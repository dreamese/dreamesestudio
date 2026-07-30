(() => {
    "use strict";

    /* =====================================================
       1. DỮ LIỆU ĐỐI TÁC
       Muốn dùng đối tác khác, thêm dữ liệu tại đây và đổi
       data-partner trong thẻ <body> của trang HTML.
    ===================================================== */
    const PARTNERS = {
        mt: {
            name: "MT Construction",
            logo: "MT_Logo.png",
            url: "https://www.facebook.com/profile.php?id=61576433862099"
        },

        titan: {
            name: "TITAN Construction",
            logo: "TITAN_Logo.png",
            url: "https://www.tiktok.com/@quoclinh258"
        }
    };

    function injectPartnerFallbackStyles() {
        if (document.getElementById("project-partner-fallback-styles")) return;

        const style = document.createElement("style");
        style.id = "project-partner-fallback-styles";
        style.textContent = `
            .project-footer-default {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 2px;
                width: 100%;
                text-align: left;
            }

            .project-footer-default__copyright {
                color: #999;
                font-size: 17px;
                line-height: 1.5;
            }

            .project-footer-default__contact {
                color: #b48a5a;
                font-size: 14px;
                line-height: 1.5;
            }

            .project-footer-default__contact a {
                color: inherit;
                text-decoration: none;
            }

            .project-footer-default__contact a:hover {
                color: #d6ad72;
            }

            [data-brand-slot="hero"]:empty {
                display: none;
            }

            @media (max-width: 768px) {
                .project-footer-default__copyright {
                    font-size: 14px;
                }

                .project-footer-default__contact {
                    font-size: 12px;
                }
            }
        `;

        document.head.appendChild(style);
    }

    function renderPartner() {
        const partnerCode = (document.body.dataset.partner || "").trim();
        const partner = PARTNERS[partnerCode];

        injectPartnerFallbackStyles();

        const defaultTemplates = {
            header: `
                <a href="dreamese.html" class="logo-link">
                    <img src="Dreamese_Studio.png" alt="Logo DREAMESE STUDIO">
                    <div class="logo-stack">
                        <span class="logo-text">DREAMESE STUDIO</span>
                    </div>
                </a>
            `,
            hero: "",
            footer: `
                <div class="project-footer-default">
                    <div class="project-footer-default__copyright">
                        © DREAMESE STUDIO – Architecture &amp; Interior Design
                    </div>
                    <div class="project-footer-default__contact">
                        <a href="mailto:vtv.arc@gmail.com">vtv.arc@gmail.com</a>
                        <span> - </span>
                        <a href="tel:+84943634758">09 4363 4758</a>
                    </div>
                </div>
            `
        };

        if (!partner) {
            if (partnerCode) {
                console.warn(`Không tìm thấy dữ liệu đối tác: ${partnerCode}`);
            }

            document.querySelectorAll("[data-brand-slot]").forEach((slot) => {
                const template = defaultTemplates[slot.dataset.brandSlot];
                if (template !== undefined) slot.innerHTML = template;
            });

            return;
        }

        const safeName = partner.name;
        const partnerLink = (nameTag = "span") => `
            <a
                href="${partner.url}"
                class="partner-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mở trang của ${safeName}"
            >
                <img
                    src="${partner.logo}"
                    class="collab-logo"
                    alt="Logo ${safeName}"
                    loading="lazy"
                    decoding="async"
                >
                <${nameTag} class="collab-name">${safeName}</${nameTag}>
            </a>
        `;

        const templates = {
            header: `
                <a href="dreamese.html" class="logo-link">
                    <img src="Dreamese_Studio.png" alt="Logo DREAMESE STUDIO">
                    <div class="logo-stack">
                        <span class="logo-text">DREAMESE STUDIO</span>
                        <span class="logo-collab">In collaboration with ${safeName}</span>
                    </div>
                </a>
            `,
            hero: `
                <span class="collab-text">In collaboration with</span>
                ${partnerLink("span")}
            `,
            footer: `
                <span>In collaboration with</span>
                ${partnerLink("strong")}
            `
        };

        document.querySelectorAll("[data-brand-slot]").forEach((slot) => {
            const template = templates[slot.dataset.brandSlot];
            if (template !== undefined) slot.innerHTML = template;
        });
    }

    /* =====================================================
       2. LAZY LOAD THEO TỪNG TRANG SLIDER
       Không thay đổi grid, tỷ lệ ảnh hay kích thước layout.
       Trang đầu dùng native loading="lazy"; các trang sau chỉ
       được gán src khi người dùng chuyển đến trang đó.
    ===================================================== */
    function loadPage(page) {
        if (!page || page.dataset.loaded === "true") return;

        page.querySelectorAll("img[data-src]").forEach((image) => {
            image.src = image.dataset.src;
            image.removeAttribute("data-src");
        });

        page.dataset.loaded = "true";
    }

    /* =====================================================
       3. BỘ ĐIỀU KHIỂN CON LĂN

       Trackpad thường phát ra nhiều wheel event cho một lần lăn.
       Bộ tích lũy và khóa nhịp bên dưới giúp mỗi thao tác chỉ
       chuyển đúng một trang hoặc một ảnh.
    ===================================================== */
    function createWheelNavigator({
        element,
        onNext,
        onPrevious,
        canGoNext = () => true,
        canGoPrevious = () => true,
        threshold = 55,
        cooldown = 420,
        alwaysCapture = false
    }) {
        if (!element) return () => {};

        let accumulatedDelta = 0;
        let locked = false;
        let resetTimer = null;

        function resetAccumulator() {
            accumulatedDelta = 0;
            window.clearTimeout(resetTimer);
            resetTimer = null;
        }

        function handleWheel(event) {
            const dominantDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX)
                ? event.deltaY
                : event.deltaX;

            if (!dominantDelta) return;

            const movingForward = dominantDelta > 0;
            const canMove = movingForward ? canGoNext() : canGoPrevious();

            /*
               Ở gallery thường, chỉ chặn cuộn trang khi slider còn
               có thể di chuyển theo hướng đó. Trong lightbox thì luôn
               giữ wheel để trang phía sau không bị cuộn.
            */
            if (alwaysCapture || canMove) {
                event.preventDefault();
            }

            if (!canMove || locked) return;

            accumulatedDelta += dominantDelta;
            window.clearTimeout(resetTimer);
            resetTimer = window.setTimeout(resetAccumulator, 180);

            if (Math.abs(accumulatedDelta) < threshold) return;

            locked = true;

            if (accumulatedDelta > 0) {
                onNext();
            } else {
                onPrevious();
            }

            resetAccumulator();

            window.setTimeout(() => {
                locked = false;
            }, cooldown);
        }

        element.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            resetAccumulator();
            element.removeEventListener("wheel", handleWheel);
        };
    }

    /* =====================================================
       4. GALLERY SLIDER — TRƯỢT TỪNG CỘT ẢNH

       Cấu trúc dữ liệu gốc vẫn giữ nguyên trong HTML:
       - Mỗi .gallery-page có tối đa 10 ảnh.
       - 5 ảnh đầu thuộc hàng trên.
       - 5 ảnh sau thuộc hàng dưới.

       Ví dụ trạng thái đầu:
       [1] [2] [3] [4] [5]
       [6] [7] [8] [9] [10]

       Sau một lần lăn / bấm / vuốt:
       [2] [3] [4] [5] [11]
       [7] [8] [9] [10] [16]

       DESKTOP:
       - Mỗi lần lăn chỉ dịch đúng 1 cột ảnh.

       MOBILE:
       - Vuốt ngang chỉ dịch đúng 1 cột ảnh.
       - Vuốt dọc vẫn cuộn trang web bình thường.
    ===================================================== */
    function injectColumnSliderStyles() {
        if (document.getElementById("project-column-slider-styles")) return;

        const style = document.createElement("style");
        style.id = "project-column-slider-styles";
        style.textContent = `
            #galleryTrack.gallery-track--column-slider {
                display: grid !important;
                grid-template-rows: repeat(2, minmax(0, auto));
                gap: 12px;
                min-width: 0;
                padding: 0 6px;
                transform: none !important;
                transition: none !important;
                will-change: auto;
            }

            .gallery-row-viewport {
                width: 100%;
                min-width: 0;
                overflow: hidden;
            }

            .gallery-row-track {
                display: flex;
                gap: 12px;
                width: 100%;
                min-width: 0;
                transform: translate3d(0, 0, 0);
                transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
                will-change: transform;
            }

            .gallery-row-track img {
                display: block;
                flex: 0 0 auto;
                width: auto;
                max-width: none;
                aspect-ratio: 4 / 3;
                object-fit: cover;
                cursor: pointer;
                border-radius: 10px;
                background: #1a1a1a;
                transition: transform 0.3s ease, filter 0.3s ease;
                user-select: none;
                -webkit-user-drag: none;
            }

            .gallery-row-track img:hover {
                transform: scale(1.02);
                filter: brightness(1.1);
            }

            @media (max-width: 700px) {
                #galleryTrack.gallery-track--column-slider {
                    gap: 8px;
                    padding: 0 4px;
                }

                .gallery-row-track {
                    gap: 8px;
                }
            }
        `;

        document.head.appendChild(style);
    }

    function initSlider() {
        const track = document.getElementById("galleryTrack");
        const sourcePages = Array.from(document.querySelectorAll(".gallery-page"));
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");

        if (!track || !sourcePages.length || !prevBtn || !nextBtn) return;

        injectColumnSliderStyles();

        const SOURCE_COLUMNS_PER_ROW = 5;
        const IMAGES_PER_SOURCE_PAGE = SOURCE_COLUMNS_PER_ROW * 2;
        const allImages = [];
        const topRowImages = [];
        const bottomRowImages = [];

        /*
           Chia lại dữ liệu theo đúng hai dòng của từng trang HTML.
           Không đổi thứ tự ảnh trong lightbox.
        */
        sourcePages.forEach((page) => {
            const pageImages = Array.from(page.querySelectorAll("img"));

            pageImages.forEach((image) => {
                image.dataset.galleryIndex = String(allImages.length);
                allImages.push(image);
            });

            for (let start = 0; start < pageImages.length; start += IMAGES_PER_SOURCE_PAGE) {
                const group = pageImages.slice(start, start + IMAGES_PER_SOURCE_PAGE);

                topRowImages.push(...group.slice(0, SOURCE_COLUMNS_PER_ROW));
                bottomRowImages.push(...group.slice(
                    SOURCE_COLUMNS_PER_ROW,
                    IMAGES_PER_SOURCE_PAGE
                ));
            }
        });

        const topViewport = document.createElement("div");
        const bottomViewport = document.createElement("div");
        const topRowTrack = document.createElement("div");
        const bottomRowTrack = document.createElement("div");

        topViewport.className = "gallery-row-viewport";
        bottomViewport.className = "gallery-row-viewport";
        topRowTrack.className = "gallery-row-track gallery-row-track--top";
        bottomRowTrack.className = "gallery-row-track gallery-row-track--bottom";

        topViewport.appendChild(topRowTrack);
        bottomViewport.appendChild(bottomRowTrack);

        /*
           Xóa các page cũ khỏi vùng hiển thị, sau đó dùng lại chính
           các thẻ img cũ trong hai đường chạy liên tục.
        */
        track.replaceChildren(topViewport, bottomViewport);
        track.classList.add("gallery-track--column-slider");

        topRowImages.forEach((image) => topRowTrack.appendChild(image));
        bottomRowImages.forEach((image) => bottomRowTrack.appendChild(image));

        const gestureArea = track.parentElement || track;
        let currentColumn = 0;
        let visibleColumns = 5;
        let columnStep = 0;
        let touchStartX = 0;
        let touchStartY = 0;
        let touchCurrentX = 0;
        let touchCurrentY = 0;
        let horizontalGesture = false;
        let suppressClickUntil = 0;
        let resizeTimer = null;

        gestureArea.style.touchAction = "pan-y";

        function getVisibleColumnCount() {
            if (window.innerWidth <= 700) return 2;
            if (window.innerWidth <= 1000) return 3;
            return 5;
        }

        function getLongestRowLength() {
            return Math.max(topRowImages.length, bottomRowImages.length);
        }

        function getMaximumColumn() {
            return Math.max(0, getLongestRowLength() - visibleColumns);
        }

        function canGoNext() {
            return currentColumn < getMaximumColumn();
        }

        function canGoPrevious() {
            return currentColumn > 0;
        }

        function loadImage(image) {
            if (!image || !image.dataset.src) return;

            image.src = image.dataset.src;
            image.removeAttribute("data-src");
        }

        function loadVisibleImages() {
            const preloadStart = Math.max(0, currentColumn - 1);
            const preloadEnd = currentColumn + visibleColumns + 1;

            [topRowImages, bottomRowImages].forEach((rowImages) => {
                for (let index = preloadStart; index <= preloadEnd; index += 1) {
                    loadImage(rowImages[index]);
                }
            });
        }

        function setRowTransition(enabled) {
            const transition = enabled
                ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
                : "none";

            topRowTrack.style.transition = transition;
            bottomRowTrack.style.transition = transition;
        }

        function applyRowTransform(extraOffset = 0, animate = true) {
            setRowTransition(animate);

            const translateX = -(currentColumn * columnStep) + extraOffset;
            const transform = `translate3d(${translateX}px, 0, 0)`;

            topRowTrack.style.transform = transform;
            bottomRowTrack.style.transform = transform;
        }

        function updateButtons() {
            const firstColumn = !canGoPrevious();
            const lastColumn = !canGoNext();

            prevBtn.classList.toggle("disabled", firstColumn);
            nextBtn.classList.toggle("disabled", lastColumn);
            prevBtn.disabled = firstColumn;
            nextBtn.disabled = lastColumn;
        }

        function measureGallery() {
            visibleColumns = getVisibleColumnCount();

            const rowWidth = topViewport.clientWidth;
            const rowStyle = window.getComputedStyle(topRowTrack);
            const gap = Number.parseFloat(rowStyle.columnGap || rowStyle.gap) || 12;
            const imageWidth = Math.max(
                1,
                (rowWidth - gap * (visibleColumns - 1)) / visibleColumns
            );

            [...topRowImages, ...bottomRowImages].forEach((image) => {
                image.style.flexBasis = `${imageWidth}px`;
                image.style.width = `${imageWidth}px`;
            });

            columnStep = imageWidth + gap;
            currentColumn = Math.min(currentColumn, getMaximumColumn());

            applyRowTransform(0, false);
            updateButtons();
            loadVisibleImages();
        }

        function goToColumn(columnIndex) {
            const safeColumn = Math.max(
                0,
                Math.min(columnIndex, getMaximumColumn())
            );

            if (safeColumn === currentColumn) {
                applyRowTransform(0, true);
                return;
            }

            currentColumn = safeColumn;
            loadVisibleImages();
            applyRowTransform(0, true);
            updateButtons();
        }

        function nextColumn() {
            if (canGoNext()) goToColumn(currentColumn + 1);
        }

        function previousColumn() {
            if (canGoPrevious()) goToColumn(currentColumn - 1);
        }

        nextBtn.addEventListener("click", nextColumn);
        prevBtn.addEventListener("click", previousColumn);

        createWheelNavigator({
            element: gestureArea,
            onNext: nextColumn,
            onPrevious: previousColumn,
            canGoNext,
            canGoPrevious,
            threshold: 45,
            cooldown: 360
        });

        gestureArea.addEventListener("touchstart", (event) => {
            if (event.touches.length !== 1) return;

            const touch = event.touches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
            touchCurrentX = touchStartX;
            touchCurrentY = touchStartY;
            horizontalGesture = false;
        }, { passive: true });

        gestureArea.addEventListener("touchmove", (event) => {
            if (event.touches.length !== 1) return;

            const touch = event.touches[0];
            touchCurrentX = touch.clientX;
            touchCurrentY = touch.clientY;

            const deltaX = touchCurrentX - touchStartX;
            const deltaY = touchCurrentY - touchStartY;

            if (Math.abs(deltaX) > Math.abs(deltaY) + 8) {
                horizontalGesture = true;
                event.preventDefault();

                const limitedDelta = Math.max(-columnStep, Math.min(deltaX, columnStep));

                if (
                    (limitedDelta > 0 && !canGoPrevious()) ||
                    (limitedDelta < 0 && !canGoNext())
                ) {
                    applyRowTransform(limitedDelta * 0.2, false);
                } else {
                    applyRowTransform(limitedDelta, false);
                }
            }
        }, { passive: false });

        gestureArea.addEventListener("touchend", () => {
            if (!horizontalGesture) return;

            const deltaX = touchCurrentX - touchStartX;
            const swipeThreshold = Math.min(65, Math.max(45, columnStep * 0.22));

            if (deltaX <= -swipeThreshold) {
                nextColumn();
                suppressClickUntil = Date.now() + 350;
            } else if (deltaX >= swipeThreshold) {
                previousColumn();
                suppressClickUntil = Date.now() + 350;
            } else {
                applyRowTransform(0, true);
            }

            horizontalGesture = false;
        }, { passive: true });

        gestureArea.addEventListener("touchcancel", () => {
            horizontalGesture = false;
            applyRowTransform(0, true);
        }, { passive: true });

        /* Không mở ảnh do click giả phát sinh ngay sau khi vuốt. */
        gestureArea.addEventListener("click", (event) => {
            if (Date.now() < suppressClickUntil) {
                event.preventDefault();
                event.stopPropagation();
            }
        }, true);

        window.addEventListener("resize", () => {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(measureGallery, 120);
        });

        measureGallery();
    }

    /* =====================================================
       5. LIGHTBOX

       DESKTOP:
       - Lăn xuống: ảnh tiếp theo.
       - Lăn lên: ảnh trước.

       MOBILE:
       - Vuốt từ dưới lên trên: ảnh tiếp theo.
       - Vuốt từ trên xuống dưới: quay lại ảnh trước.
       - Trong lightbox, thao tác dọc không cuộn trang phía sau.
    ===================================================== */
    function initLightbox() {
        const lightbox = document.getElementById("lightbox");
        const lbImg = document.getElementById("lightboxImg");
        const lbTitle = document.getElementById("lbTitle");
        const lbDesc = document.getElementById("lbDesc");
        const lbPrev = document.getElementById("lbPrev");
        const lbNext = document.getElementById("lbNext");
        const closeLb = document.getElementById("closeLb");
        const allImages = Array.from(
            document.querySelectorAll(".gallery-row-track img, .gallery-page img")
        ).sort((firstImage, secondImage) => {
            const firstIndex = Number(firstImage.dataset.galleryIndex ?? 0);
            const secondIndex = Number(secondImage.dataset.galleryIndex ?? 0);
            return firstIndex - secondIndex;
        });

        if (!lightbox || !lbImg || !lbTitle || !lbDesc || !lbPrev || !lbNext || !closeLb) {
            return;
        }

        let currentIndex = 0;
        let previousBodyOverflow = "";
        let touchStartX = 0;
        let touchStartY = 0;
        let touchCurrentX = 0;
        let touchCurrentY = 0;
        let verticalGesture = false;

        lightbox.style.touchAction = "none";

        function imageSource(image) {
            return image.dataset.src || image.getAttribute("src") || "";
        }

        function preloadAround(index) {
            const indexes = [
                (index + 1) % allImages.length,
                (index - 1 + allImages.length) % allImages.length
            ];

            indexes.forEach((imageIndex) => {
                const source = imageSource(allImages[imageIndex]);
                if (!source) return;

                const preload = new Image();
                preload.src = source;
            });
        }

        function resetTouchPreview() {
            lbImg.style.transition = "transform 180ms ease, opacity 180ms ease";
            lbImg.style.transform = "translate3d(0, 0, 0)";
            lbImg.style.opacity = "1";

            window.setTimeout(() => {
                lbImg.style.removeProperty("transition");
            }, 200);
        }

        function openLightbox(index) {
            currentIndex = (index + allImages.length) % allImages.length;

            const image = allImages[currentIndex];
            const source = imageSource(image);

            if (!source) return;

            /* Nếu ảnh thuộc trang chưa mở, chỉ tải riêng ảnh đang xem. */
            if (image.dataset.src) {
                image.src = image.dataset.src;
                image.removeAttribute("data-src");
            }

            lbImg.src = source;
            lbImg.alt = image.alt || "Ảnh công trình Dreamese Studio";
            lbTitle.textContent = image.dataset.title || "";
            lbDesc.textContent = image.dataset.desc || "";

            if (!lightbox.classList.contains("active")) {
                previousBodyOverflow = document.body.style.overflow;
            }

            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";
            resetTouchPreview();
            preloadAround(currentIndex);
        }

        function showNextImage() {
            openLightbox(currentIndex + 1);
        }

        function showPreviousImage() {
            openLightbox(currentIndex - 1);
        }

        function closeLightbox() {
            lightbox.classList.remove("active");
            document.body.style.overflow = previousBodyOverflow;
            resetTouchPreview();
        }

        allImages.forEach((image, index) => {
            image.addEventListener("click", () => openLightbox(index));
        });

        lbNext.addEventListener("click", (event) => {
            event.stopPropagation();
            showNextImage();
        });

        lbPrev.addEventListener("click", (event) => {
            event.stopPropagation();
            showPreviousImage();
        });

        closeLb.addEventListener("click", closeLightbox);

        createWheelNavigator({
            element: lightbox,
            onNext: showNextImage,
            onPrevious: showPreviousImage,
            threshold: 45,
            cooldown: 380,
            alwaysCapture: true
        });

        lightbox.addEventListener("touchstart", (event) => {
            if (!lightbox.classList.contains("active") || event.touches.length !== 1) {
                return;
            }

            const touch = event.touches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
            touchCurrentX = touchStartX;
            touchCurrentY = touchStartY;
            verticalGesture = false;
        }, { passive: true });

        lightbox.addEventListener("touchmove", (event) => {
            if (!lightbox.classList.contains("active") || event.touches.length !== 1) {
                return;
            }

            const touch = event.touches[0];
            touchCurrentX = touch.clientX;
            touchCurrentY = touch.clientY;

            const deltaX = touchCurrentX - touchStartX;
            const deltaY = touchCurrentY - touchStartY;

            if (Math.abs(deltaY) > Math.abs(deltaX) + 8) {
                verticalGesture = true;
                event.preventDefault();

                const limitedDelta = Math.max(-120, Math.min(deltaY, 120));
                const fade = Math.max(0.65, 1 - Math.abs(limitedDelta) / 420);

                lbImg.style.transform = `translate3d(0, ${limitedDelta * 0.35}px, 0)`;
                lbImg.style.opacity = String(fade);
            }
        }, { passive: false });

        lightbox.addEventListener("touchend", () => {
            if (!verticalGesture) {
                resetTouchPreview();
                return;
            }

            const deltaY = touchCurrentY - touchStartY;
            const swipeThreshold = 60;

            if (deltaY <= -swipeThreshold) {
                showNextImage();
            } else if (deltaY >= swipeThreshold) {
                showPreviousImage();
            } else {
                resetTouchPreview();
            }

            verticalGesture = false;
        }, { passive: true });

        document.addEventListener("keydown", (event) => {
            if (!lightbox.classList.contains("active")) return;

            if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                event.preventDefault();
                showNextImage();
            }

            if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                event.preventDefault();
                showPreviousImage();
            }

            if (event.key === "Escape") {
                closeLightbox();
            }
        });
    }

    function init() {
        renderPartner();
        initSlider();
        initLightbox();

        /* Hiện trang ngay khi DOM sẵn sàng, không chờ toàn bộ ảnh tải. */
        requestAnimationFrame(() => document.body.classList.add("loaded"));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
