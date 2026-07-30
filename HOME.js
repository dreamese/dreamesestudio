(() => {
    "use strict";

    /* =====================================================
       1. DỮ LIỆU ĐỐI TÁC

       - Chọn đối tác hiển thị trong thẻ <body>:
         data-partners="mt"

       - Hiển thị nhiều đối tác:
         data-partners="mt,titan"

       - Thêm đối tác mới: bổ sung một object bên dưới.
    ===================================================== */
    const PARTNERS = {
        mt: {
            name: "MT CONSTRUCTION",
            logo: "MT_Logo.png",
            url: "https://www.facebook.com/profile.php?id=61576433862099"
        },

        titan: {
            name: "TITAN CONSTRUCTION",
            logo: "TITAN_Logo.png",
            url: "https://www.tiktok.com/@quoclinh258"
        }
    };

    function getActivePartners() {
        const partnerCodes = (document.body.dataset.partners || "")
            .split(",")
            .map((code) => code.trim())
            .filter(Boolean);

        return partnerCodes
            .map((code) => {
                const partner = PARTNERS[code];

                if (!partner) {
                    console.warn(`Không tìm thấy dữ liệu đối tác: ${code}`);
                    return null;
                }

                return partner;
            })
            .filter(Boolean);
    }

    function createPartnerLink(partner, context = "footer") {
        const link = document.createElement("a");
        const image = document.createElement("img");
        const name = document.createElement(context === "footer" ? "span" : "strong");

        link.href = partner.url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = context === "footer" ? "partner-item" : "partner-link";
        link.setAttribute("aria-label", `Mở trang của ${partner.name}`);

        image.src = partner.logo;
        image.alt = `Logo ${partner.name}`;
        image.loading = "lazy";
        image.decoding = "async";

        name.textContent = partner.name;

        link.append(image, name);
        return link;
    }

    function renderPartners() {
        const partners = getActivePartners();
        const slots = document.querySelectorAll("[data-partners-slot]");

        slots.forEach((slot) => {
            const slotType = slot.dataset.partnersSlot;
            slot.replaceChildren();

            if (!partners.length) {
                slot.hidden = true;
                return;
            }

            slot.hidden = false;

            if (slotType === "footer") {
                const label = document.createElement("span");
                label.className = "partner-label";
                label.textContent = "In collaboration with";
                slot.append(label);

                partners.forEach((partner) => {
                    slot.append(createPartnerLink(partner, "footer"));
                });

                return;
            }

            if (slotType === "hero") {
                const label = document.createElement("span");
                label.className = "collab-text";
                label.textContent = "In collaboration with";
                slot.append(label);

                partners.forEach((partner) => {
                    slot.append(createPartnerLink(partner, "hero"));
                });

                return;
            }

            if (slotType === "header") {
                const names = partners.map((partner) => partner.name).join(" · ");
                slot.textContent = `In collaboration with ${names}`;
            }
        });
    }

    /* =====================================================
       2. TIỆN ÍCH TẢI ẢNH
    ===================================================== */
    const imageCache = new Map();

    function preloadImage(source) {
        if (!source) return Promise.resolve(false);
        if (imageCache.has(source)) return imageCache.get(source);

        const request = new Promise((resolve) => {
            const image = new Image();

            image.onload = () => resolve(true);
            image.onerror = () => {
                console.warn(`Không thể tải ảnh: ${source}`);
                resolve(false);
            };

            image.src = source;
        });

        imageCache.set(source, request);
        return request;
    }

    function runWhenIdle(callback) {
        if ("requestIdleCallback" in window) {
            window.requestIdleCallback(callback, { timeout: 1500 });
            return;
        }

        window.setTimeout(callback, 250);
    }

    function hydrateLazyImages(container) {
        container.querySelectorAll("img[data-src]").forEach((image) => {
            image.src = image.dataset.src;
            image.removeAttribute("data-src");
        });
    }

    /* =====================================================
       3. BACKGROUND SLIDER

       Chỉ tải ảnh hiện tại và chuẩn bị trước một ảnh kế tiếp.
       Slider tạm dừng khi tab bị ẩn hoặc người dùng bật chế độ
       giảm chuyển động.
    ===================================================== */
    function initBackgroundSlider() {
        const body = document.body;
        const sources = (body.dataset.bg || "")
            .split(",")
            .map((source) => source.trim())
            .filter(Boolean);

        if (!sources.length) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let currentIndex = 0;
        let timerId = null;
        let requestToken = 0;

        async function showBackground(index) {
            const token = ++requestToken;
            const source = sources[index];
            const loaded = await preloadImage(source);

            if (!loaded || token !== requestToken) return;

            body.style.setProperty("--bg-image", `url("${source}")`);
            currentIndex = index;

            const nextIndex = (currentIndex + 1) % sources.length;
            runWhenIdle(() => preloadImage(sources[nextIndex]));
        }

        function stopSlider() {
            window.clearInterval(timerId);
            timerId = null;
        }

        function startSlider() {
            stopSlider();

            if (sources.length < 2 || document.hidden || reduceMotion.matches) return;

            timerId = window.setInterval(() => {
                const nextIndex = (currentIndex + 1) % sources.length;
                showBackground(nextIndex);
            }, 6000);
        }

        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                stopSlider();
            } else {
                startSlider();
            }
        });

        reduceMotion.addEventListener?.("change", startSlider);

        showBackground(0).then(startSlider);
    }

    /* =====================================================
       4. PROJECT SLIDER + LAZY BACKGROUND

       Ảnh dự án không còn nằm trong style="background-image".
       Chỉ nhóm card đang hiển thị và một card kế tiếp được tải.
    ===================================================== */
    function initProjectSlider() {
        const track = document.getElementById("projectTrack");
        const wrapper = document.querySelector(".project-wrapper");
        const section = document.getElementById("projects");
        const items = Array.from(document.querySelectorAll(".project"));
        const nextButton = document.querySelector(".nav-btn.next");
        const previousButton = document.querySelector(".nav-btn.prev");

        if (!track || !wrapper || !section || !items.length || !nextButton || !previousButton) {
            return;
        }

        const desktopMedia = window.matchMedia("(min-width: 901px)");

        let sliderIndex = 0;
        let sectionIsVisible = false;
        let resizeFrame = null;

        /* Chống trackpad phát nhiều sự kiện wheel trong cùng một lần lăn. */
        let wheelLocked = false;
        let wheelUnlockTimer = null;

        /* Trạng thái kéo bằng tay trên mobile/tablet. */
        let activePointerId = null;
        let dragStartX = 0;
        let dragStartY = 0;
        let dragCurrentX = 0;
        let dragBaseTranslate = 0;
        let dragDirection = "";
        let suppressProjectClick = false;

        function getSliderConfig() {
            const trackStyle = window.getComputedStyle(track);
            const gap = Number.parseFloat(trackStyle.columnGap || trackStyle.gap) || 0;
            const itemWidth = items[0].getBoundingClientRect().width;
            const step = itemWidth + gap;
            const wrapperWidth = wrapper.getBoundingClientRect().width;
            const visibleCount = Math.max(1, Math.floor((wrapperWidth + gap) / step));
            const maxIndex = Math.max(0, items.length - visibleCount);

            return {
                itemWidth,
                step,
                visibleCount,
                maxIndex
            };
        }

        async function loadProject(item) {
            if (!item || item.dataset.loaded === "true" || item.dataset.loaded === "loading") {
                return;
            }

            const source = item.dataset.bg;
            if (!source) return;

            item.dataset.loaded = "loading";
            const loaded = await preloadImage(source);

            if (!loaded) {
                item.dataset.loaded = "false";
                return;
            }

            item.style.backgroundImage = `url("${source}")`;
            item.dataset.loaded = "true";
            item.classList.add("is-loaded");
        }

        function loadVisibleProjects() {
            const { visibleCount } = getSliderConfig();
            const firstIndex = Math.max(0, sliderIndex - 1);
            const lastIndex = Math.min(items.length - 1, sliderIndex + visibleCount);

            for (let index = firstIndex; index <= lastIndex; index += 1) {
                loadProject(items[index]);
            }
        }

        function setTrackTransition(enabled) {
            track.classList.toggle("is-dragging", !enabled);
        }

        function updateSlider({ animate = true } = {}) {
            /*
             * Mobile/tablet dùng native overflow scrolling.
             * Không ghi transform vì Safari sẽ phải tranh quyền điều khiển
             * giữa quán tính cuộn và pointermove của JavaScript.
             */
            if (!desktopMedia.matches) {
                sliderIndex = 0;
                setTrackTransition(false);
                track.style.transform = "none";

                previousButton.disabled = true;
                nextButton.disabled = true;
                previousButton.classList.add("disabled");
                nextButton.classList.add("disabled");
                return;
            }

            const { step, maxIndex } = getSliderConfig();

            sliderIndex = Math.max(0, Math.min(sliderIndex, maxIndex));
            setTrackTransition(animate);
            track.style.transform = `translate3d(${-sliderIndex * step}px, 0, 0)`;

            previousButton.disabled = sliderIndex <= 0;
            nextButton.disabled = sliderIndex >= maxIndex;
            previousButton.classList.toggle("disabled", sliderIndex <= 0);
            nextButton.classList.toggle("disabled", sliderIndex >= maxIndex);

            if (sectionIsVisible) {
                loadVisibleProjects();
            }
        }

        function moveTo(index, options = {}) {
            const { maxIndex } = getSliderConfig();
            const nextIndex = Math.max(0, Math.min(index, maxIndex));
            const changed = nextIndex !== sliderIndex;

            sliderIndex = nextIndex;
            updateSlider(options);

            return changed;
        }

        function nextSlide() {
            return moveTo(sliderIndex + 1);
        }

        function previousSlide() {
            return moveTo(sliderIndex - 1);
        }

        /* =================================================
           DESKTOP — LĂN CHUỘT / TRACKPAD

           Chỉ chặn cuộn trang khi slider còn có thể đi tiếp.
           Khi ở đầu hoặc cuối, wheel được trả lại cho trang.
        ================================================= */
        wrapper.addEventListener("wheel", (event) => {
            if (!desktopMedia.matches || !sectionIsVisible) return;

            const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
                ? event.deltaX
                : event.deltaY;

            if (Math.abs(delta) < 4) return;

            const direction = delta > 0 ? 1 : -1;
            const { maxIndex } = getSliderConfig();
            const atStart = sliderIndex <= 0 && direction < 0;
            const atEnd = sliderIndex >= maxIndex && direction > 0;

            /* Đã tới biên: cho phép trang tiếp tục cuộn dọc. */
            if (atStart || atEnd) return;

            event.preventDefault();

            if (wheelLocked) return;

            wheelLocked = true;
            moveTo(sliderIndex + direction);

            window.clearTimeout(wheelUnlockTimer);
            wheelUnlockTimer = window.setTimeout(() => {
                wheelLocked = false;
            }, 420);
        }, { passive: false });

        /* =================================================
           MOBILE / TABLET — KÉO TRỰC TIẾP BẰNG TAY
        ================================================= */
        wrapper.addEventListener("pointerdown", (event) => {
            /* Mobile đã dùng native scroll-snap; không bắt pointer. */
            if (!desktopMedia.matches) return;
            if (event.pointerType === "mouse") return;
            if (event.target.closest(".nav-btn")) return;

            activePointerId = event.pointerId;
            dragStartX = event.clientX;
            dragStartY = event.clientY;
            dragCurrentX = event.clientX;
            dragDirection = "";

            const { step } = getSliderConfig();
            dragBaseTranslate = -sliderIndex * step;

            wrapper.setPointerCapture?.(event.pointerId);
        });

        wrapper.addEventListener("pointermove", (event) => {
            if (event.pointerId !== activePointerId) return;

            const deltaX = event.clientX - dragStartX;
            const deltaY = event.clientY - dragStartY;
            dragCurrentX = event.clientX;

            if (!dragDirection) {
                if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) return;

                dragDirection = Math.abs(deltaX) > Math.abs(deltaY)
                    ? "horizontal"
                    : "vertical";
            }

            /* Vuốt dọc vẫn dùng để cuộn trang bình thường. */
            if (dragDirection !== "horizontal") return;

            event.preventDefault();

            const { maxIndex } = getSliderConfig();
            const pullingPastStart = sliderIndex === 0 && deltaX > 0;
            const pullingPastEnd = sliderIndex === maxIndex && deltaX < 0;
            const resistance = pullingPastStart || pullingPastEnd ? 0.28 : 1;

            setTrackTransition(false);
            track.style.transform = `translate3d(${dragBaseTranslate + deltaX * resistance}px, 0, 0)`;
        }, { passive: false });

        function finishPointerGesture(event) {
            if (event.pointerId !== activePointerId) return;

            const deltaX = dragCurrentX - dragStartX;
            const wasHorizontal = dragDirection === "horizontal";
            const { itemWidth } = getSliderConfig();
            const threshold = Math.min(90, Math.max(45, itemWidth * 0.16));

            activePointerId = null;
            dragDirection = "";

            if (!wasHorizontal) {
                updateSlider();
                return;
            }

            suppressProjectClick = Math.abs(deltaX) > 8;

            if (deltaX <= -threshold) {
                nextSlide();
            } else if (deltaX >= threshold) {
                previousSlide();
            } else {
                updateSlider();
            }

            window.setTimeout(() => {
                suppressProjectClick = false;
            }, 320);
        }

        wrapper.addEventListener("pointerup", finishPointerGesture);
        wrapper.addEventListener("pointercancel", finishPointerGesture);

        /* Không mở nhầm dự án khi người dùng vừa vuốt card. */
        track.addEventListener("click", (event) => {
            if (!suppressProjectClick) return;

            event.preventDefault();
            event.stopPropagation();
        }, true);

        /* Nút vẫn giữ trên desktop như phương án điều khiển dự phòng. */
        nextButton.addEventListener("click", nextSlide);
        previousButton.addEventListener("click", previousSlide);

        window.addEventListener("resize", () => {
            if (resizeFrame) window.cancelAnimationFrame(resizeFrame);

            resizeFrame = window.requestAnimationFrame(() => {
                updateSlider({ animate: false });
            });
        });

        desktopMedia.addEventListener?.("change", () => {
            wrapper.scrollLeft = 0;
            updateSlider({ animate: false });

            if (!desktopMedia.matches) {
                loadProject(items[0]);
                loadProject(items[1]);
            }
        });

        /*
         * Lazy-load riêng cho native slider mobile.
         * rootMargin ngang chuẩn bị trước khoảng một card ở mỗi phía,
         * tránh ảnh xuất hiện trễ trong lúc người dùng đang vuốt.
         */
        if ("IntersectionObserver" in window) {
            const mobileProjectObserver = new IntersectionObserver((entries) => {
                if (desktopMedia.matches) return;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        loadProject(entry.target);
                    }
                });
            }, {
                root: wrapper,
                rootMargin: "0px 100% 0px 100%",
                threshold: 0.01
            });

            items.forEach((item) => mobileProjectObserver.observe(item));
        }

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver((entries) => {
                sectionIsVisible = entries[0]?.isIntersecting ?? false;

                if (sectionIsVisible) {
                    loadVisibleProjects();
                }
            }, {
                rootMargin: "250px 0px",
                threshold: 0.01
            });

            observer.observe(section);
        } else {
            sectionIsVisible = true;
        }

        updateSlider({ animate: false });

        if (!desktopMedia.matches) {
            loadProject(items[0]);
            loadProject(items[1]);
        }
    }

    /* =====================================================
       5. Q&A DESKTOP + MOBILE

       Ảnh minh họa chỉ được gán src khi câu trả lời mở ra.
    ===================================================== */
    function initQna() {
        const wrapper = document.querySelector(".qna-wrapper");
        const cards = Array.from(document.querySelectorAll(".qna-card"));
        const desktopPlaceholder = document.getElementById("desktop-content-placeholder");
        const stickyContent = document.querySelector(".sticky-content");
        const closeButton = document.querySelector(".close-preview");

        if (!wrapper || !cards.length || !desktopPlaceholder || !stickyContent || !closeButton) {
            return;
        }

        function setEmptyState() {
            desktopPlaceholder.innerHTML = `
                <div class="qna-empty-state">
                    <p>Chọn một câu hỏi để xem chi tiết</p>
                </div>
            `;
        }

        function resetCards() {
            cards.forEach((card) => {
                card.classList.remove("active", "mobile-open");
                card.setAttribute("aria-expanded", "false");
            });
        }

        function closeDesktopPreview() {
            wrapper.classList.remove("active-view");
            resetCards();
            setEmptyState();
        }

        function openCard(card) {
            const contentBox = card.querySelector(".qna-content-data");
            if (!contentBox) return;

            const isDesktop = window.innerWidth > 900;
            const wasOpenOnMobile = card.classList.contains("mobile-open");

            resetCards();

            if (!isDesktop && wasOpenOnMobile) {
                return;
            }

            card.classList.add("active");
            card.setAttribute("aria-expanded", "true");

            if (isDesktop) {
                wrapper.classList.add("active-view");
                const contentFragment = document.createDocumentFragment();

                contentBox.childNodes.forEach((node) => {
                    contentFragment.append(node.cloneNode(true));
                });

                desktopPlaceholder.replaceChildren(contentFragment);
                hydrateLazyImages(desktopPlaceholder);
                stickyContent.scrollTop = 0;
                return;
            }

            wrapper.classList.remove("active-view");
            card.classList.add("mobile-open");
            hydrateLazyImages(contentBox);
        }

        cards.forEach((card) => {
            card.tabIndex = 0;
            card.setAttribute("role", "button");
            card.setAttribute("aria-expanded", "false");

            card.addEventListener("click", (event) => {
                if (event.target.closest("a")) return;
                if (event.target.closest(".qna-content-data")) return;
                openCard(card);
            });

            card.addEventListener("keydown", (event) => {
                if (event.key !== "Enter" && event.key !== " ") return;
                event.preventDefault();
                openCard(card);
            });
        });

        closeButton.addEventListener("click", closeDesktopPreview);

        const desktopMedia = window.matchMedia("(min-width: 901px)");

        desktopMedia.addEventListener?.("change", () => {
            closeDesktopPreview();
        });

        setEmptyState();
    }

    /* =====================================================
       KHỞI TẠO
    ===================================================== */
    function init() {
        renderPartners();
        initBackgroundSlider();
        initProjectSlider();
        initQna();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
