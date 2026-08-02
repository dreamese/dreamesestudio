(() => {
    "use strict";

    const STORAGE_KEY = "dreamese-project-manager-projects-v1";
    const CURRENT_KEY = "dreamese-project-manager-current-v1";
    const DB_NAME = "dreamese-project-manager-assets-v2";
    const DB_VERSION = 1;
    const IMAGE_STORE = "images";
    const IMAGE_PATTERN = /\.(jpe?g|png|webp|gif|avif)$/i;

    const state = createDefaultState();
    const elements = {};

    let db = null;
    let importedHomeHtml = "";
    let importedHomeFileName = "dreamese.html";
    let lastImportedFolderName = "";
    let draggedImageId = "";
    let previewTimer = null;
    let saveTimer = null;
    let suppressAutoPersist = false;

    document.addEventListener("DOMContentLoaded", init, { once: true });

    async function init() {
        cacheElements();
        bindTabs();
        bindProjectFields();
        bindImages();
        bindHero();
        bindHomepage();
        bindExport();
        bindStorage();

        try {
            db = await openDatabase();
            await requestPersistentStorage();
        } catch (error) {
            console.error(error);
            setStatus("Không mở được kho ảnh IndexedDB. App vẫn chạy nhưng ảnh sẽ không được giữ sau khi đóng.", "error");
        }

        await restoreCurrentState();
        renderAll();
        setStatus("Sẵn sàng. Ảnh đã lưu sẽ tự khôi phục khi mở lại.", "success");
    }

    function cacheElements() {
        [
            "savedProjectSelect", "newProjectBtn", "saveProjectBtn",
            "importHtmlInput", "importHtmlBtn",
            "projectFileName", "projectFolder", "projectName", "projectSlogan",
            "projectType", "projectScale", "projectArea", "projectPartner",
            "projectQuote", "projectStory",
            "assetRoot", "homePagePath", "cssPath", "jsPath",
            "galleryProjectFolder", "galleryFolderPrefix", "galleryFolderPreview",
            "useImportedFolderBtn", "storageMessage",
            "addImagesInput", "importFolderInput", "addImagesBtn", "importFolderBtn",
            "sortImagesBtn", "clearImagesBtn", "dropZone",
            "heroImageSelect", "heroPositionRange", "heroPositionNumber",
            "heroPositionOutput", "heroMoveUpBtn", "heroMoveDownBtn",
            "heroFocusPreview", "imageList", "imageCardTemplate", "imageCount",
            "homeCardTitle", "homeCardCategory", "homeCardSlogan", "homeCardImage",
            "importHomeInput", "importHomeBtn", "downloadUpdatedHomeBtn",
            "homeCardSnippet", "downloadHtmlBtn", "downloadZipBtn",
            "writeFolderBtn", "downloadJsonBtn", "importJsonBtn", "importJsonInput",
            "validationBox", "previewFrame", "refreshPreviewBtn", "statusBar"
        ].forEach((id) => {
            elements[id] = document.getElementById(id);
        });
    }

    function createDefaultState() {
        return {
            id: makeId(),
            settings: {
                assetRoot: "PROJECTS",
                cssPath: "CSS/Project-Site.css",
                jsPath: "JS/Project-Site.js",
                homePagePath: "dreamese.html"
            },
            project: {
                fileName: "Du_An_Moi.html",
                folder: "Du_An_Moi",
                name: "Dự án mới",
                slogan: "",
                type: "",
                scale: "",
                area: "",
                partner: "",
                quote: "",
                story: [],
                heroPositionY: 80
            },
            gallery: [],
            heroImageId: "",
            homeCard: {
                title: "Dự án mới",
                slogan: "",
                category: "",
                imageId: ""
            }
        };
    }

    function makeId() {
        return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
    }

    /* =====================================================
       INDEXEDDB — LƯU FILE ẢNH THẬT
    ===================================================== */

    function openDatabase() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onupgradeneeded = () => {
                const database = request.result;

                if (!database.objectStoreNames.contains(IMAGE_STORE)) {
                    const store = database.createObjectStore(IMAGE_STORE, { keyPath: "key" });
                    store.createIndex("projectId", "projectId", { unique: false });
                }
            };

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error || new Error("IndexedDB error"));
        });
    }

    async function requestPersistentStorage() {
        if (!navigator.storage?.persist) return false;

        try {
            return await navigator.storage.persist();
        } catch {
            return false;
        }
    }

    function imageStorageKey(projectId, imageId) {
        return `${projectId}:${imageId}`;
    }

    function dbTransaction(mode = "readonly") {
        if (!db) throw new Error("Kho ảnh chưa sẵn sàng.");
        return db.transaction(IMAGE_STORE, mode).objectStore(IMAGE_STORE);
    }

    function putStoredImage(projectId, image) {
        if (!db || !image.file) return Promise.resolve(false);

        return new Promise((resolve, reject) => {
            const store = dbTransaction("readwrite");
            const request = store.put({
                key: imageStorageKey(projectId, image.id),
                projectId,
                imageId: image.id,
                fileName: image.fileName,
                type: image.file.type || "application/octet-stream",
                lastModified: image.file.lastModified || Date.now(),
                blob: image.file
            });

            request.onsuccess = () => {
                image.stored = true;
                resolve(true);
            };
            request.onerror = () => reject(request.error);
        });
    }

    function deleteStoredImage(projectId, imageId) {
        if (!db) return Promise.resolve();

        return new Promise((resolve, reject) => {
            const request = dbTransaction("readwrite").delete(imageStorageKey(projectId, imageId));
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    function getStoredImages(projectId) {
        if (!db) return Promise.resolve([]);

        return new Promise((resolve, reject) => {
            const store = dbTransaction("readonly");
            const index = store.index("projectId");
            const request = index.getAll(IDBKeyRange.only(projectId));

            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => reject(request.error);
        });
    }

    function getStoredImageKeys(projectId) {
        if (!db) return Promise.resolve([]);

        return new Promise((resolve, reject) => {
            const store = dbTransaction("readonly");
            const index = store.index("projectId");
            const request = index.getAllKeys(IDBKeyRange.only(projectId));

            request.onsuccess = () => resolve(request.result || []);
            request.onerror = () => reject(request.error);
        });
    }

    async function deleteAllStoredImages(projectId) {
        const keys = await getStoredImageKeys(projectId);

        await Promise.all(keys.map((key) => new Promise((resolve, reject) => {
            const request = dbTransaction("readwrite").delete(key);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        })));
    }

    async function restoreImagesFromDatabase() {
        state.gallery.forEach(revokeImageUrl);

        const records = await getStoredImages(state.id);
        const recordMap = new Map(records.map((record) => [record.imageId, record]));

        state.gallery.forEach((image) => {
            const record = recordMap.get(image.id);

            if (!record?.blob) {
                image.file = null;
                image.objectUrl = "";
                image.stored = false;
                return;
            }

            const file = new File(
                [record.blob],
                record.fileName || image.fileName,
                {
                    type: record.type || record.blob.type,
                    lastModified: record.lastModified || Date.now()
                }
            );

            image.file = file;
            image.objectUrl = URL.createObjectURL(file);
            image.stored = true;
        });
    }

    async function persistProjectImages() {
        if (!db) return;

        const activeKeys = new Set(
            state.gallery.map((image) => imageStorageKey(state.id, image.id))
        );

        const existingKeys = await getStoredImageKeys(state.id);

        await Promise.all(
            existingKeys
                .filter((key) => !activeKeys.has(key))
                .map((key) => new Promise((resolve, reject) => {
                    const request = dbTransaction("readwrite").delete(key);
                    request.onsuccess = () => resolve();
                    request.onerror = () => reject(request.error);
                }))
        );

        for (const image of state.gallery) {
            if (image.file) {
                await putStoredImage(state.id, image);
            }
        }
    }

    /* =====================================================
       BINDING
    ===================================================== */

    function bindTabs() {
        document.querySelectorAll(".sidebar-tab").forEach((button) => {
            button.addEventListener("click", () => {
                document.querySelectorAll(".sidebar-tab").forEach((tab) => {
                    tab.classList.toggle("active", tab === button);
                });

                document.querySelectorAll(".tab-panel").forEach((panel) => {
                    panel.classList.toggle("active", panel.dataset.panel === button.dataset.tab);
                });

                if (button.dataset.tab === "export") renderValidation();
            });
        });
    }

    function bindProjectFields() {
        const bindings = [
            ["projectFileName", ["project", "fileName"]],
            ["projectFolder", ["project", "folder"]],
            ["projectName", ["project", "name"]],
            ["projectSlogan", ["project", "slogan"]],
            ["projectType", ["project", "type"]],
            ["projectScale", ["project", "scale"]],
            ["projectArea", ["project", "area"]],
            ["projectPartner", ["project", "partner"]],
            ["projectQuote", ["project", "quote"]],
            ["assetRoot", ["settings", "assetRoot"]],
            ["homePagePath", ["settings", "homePagePath"]],
            ["cssPath", ["settings", "cssPath"]],
            ["jsPath", ["settings", "jsPath"]]
        ];

        bindings.forEach(([elementId, path]) => {
            elements[elementId].addEventListener("input", () => {
                setNestedValue(state, path, elements[elementId].value);

                if (elementId === "projectName") {
                    state.homeCard.title = elements[elementId].value;
                    elements.homeCardTitle.value = state.homeCard.title;
                }

                if (elementId === "projectSlogan") {
                    state.homeCard.slogan = elements[elementId].value;
                    elements.homeCardSlogan.value = state.homeCard.slogan;
                }

                if (elementId === "projectType") {
                    state.homeCard.category = elements[elementId].value;
                    elements.homeCardCategory.value = state.homeCard.category;
                }

                if (elementId === "projectFolder") {
                    elements.galleryProjectFolder.value = state.project.folder;
                    renderGalleryFolderPreview();
                    renderImages();
                }

                if (elementId === "assetRoot") {
                    renderGalleryFolderPreview();
                    renderImages();
                }

                queueRender();
            });
        });

        elements.projectStory.addEventListener("input", () => {
            state.project.story = splitParagraphs(elements.projectStory.value);
            queueRender();
        });

        elements.galleryProjectFolder.addEventListener("input", () => {
            state.project.folder = elements.galleryProjectFolder.value;
            elements.projectFolder.value = state.project.folder;
            renderGalleryFolderPreview();
            renderImages();
            queueRender();
        });

        elements.useImportedFolderBtn.addEventListener("click", () => {
            if (!lastImportedFolderName) return;

            state.project.folder = lastImportedFolderName;
            elements.projectFolder.value = state.project.folder;
            elements.galleryProjectFolder.value = state.project.folder;
            renderGalleryFolderPreview();
            renderImages();
            queueRender();
        });

        elements.importHtmlBtn.addEventListener("click", () => elements.importHtmlInput.click());
        elements.importHtmlInput.addEventListener("change", handleImportProjectHtml);
    }

    function bindImages() {
        elements.addImagesBtn.addEventListener("click", () => elements.addImagesInput.click());
        elements.importFolderBtn.addEventListener("click", () => elements.importFolderInput.click());
        elements.dropZone.addEventListener("click", () => elements.addImagesInput.click());

        elements.addImagesInput.addEventListener("change", async () => {
            await addImageFiles(Array.from(elements.addImagesInput.files || []), true);
            elements.addImagesInput.value = "";
        });

        elements.importFolderInput.addEventListener("change", async () => {
            const files = Array.from(elements.importFolderInput.files || []);
            lastImportedFolderName = detectImportedFolderName(files);
            elements.useImportedFolderBtn.disabled = !lastImportedFolderName;

            if (lastImportedFolderName) {
                const current = state.project.folder.trim();
                const isDefault = !current || current === "Du_An_Moi";

                if (isDefault) {
                    state.project.folder = lastImportedFolderName;
                    elements.projectFolder.value = state.project.folder;
                    elements.galleryProjectFolder.value = state.project.folder;
                }
            }

            await addImageFiles(files, false);
            renderGalleryFolderPreview();
            elements.importFolderInput.value = "";
        });

        ["dragenter", "dragover"].forEach((eventName) => {
            elements.dropZone.addEventListener(eventName, (event) => {
                event.preventDefault();
                elements.dropZone.classList.add("dragover");
            });
        });

        ["dragleave", "drop"].forEach((eventName) => {
            elements.dropZone.addEventListener(eventName, (event) => {
                event.preventDefault();
                elements.dropZone.classList.remove("dragover");
            });
        });

        elements.dropZone.addEventListener("drop", async (event) => {
            await addImageFiles(Array.from(event.dataTransfer.files || []), true);
        });

        elements.sortImagesBtn.addEventListener("click", () => {
            state.gallery.sort((a, b) => a.fileName.localeCompare(b.fileName, undefined, {
                numeric: true,
                sensitivity: "base"
            }));
            renderImages();
            queueRender();
        });

        elements.clearImagesBtn.addEventListener("click", async () => {
            if (!state.gallery.length) return;
            if (!window.confirm("Xóa toàn bộ ảnh khỏi dự án này?")) return;

            state.gallery.forEach(revokeImageUrl);
            state.gallery = [];
            state.heroImageId = "";
            state.homeCard.imageId = "";

            try {
                await deleteAllStoredImages(state.id);
            } catch (error) {
                console.error(error);
            }

            renderImages();
            queueRender();
        });
    }

    function bindHero() {
        elements.heroImageSelect.addEventListener("change", () => {
            state.heroImageId = elements.heroImageSelect.value;
            if (!state.homeCard.imageId) state.homeCard.imageId = state.heroImageId;
            renderImages();
            renderHeroControls();
            queueRender();
        });

        const setPosition = (value) => {
            state.project.heroPositionY = clampNumber(value, 0, 100, 80);
            renderHeroControls();
            queueRender();
        };

        elements.heroPositionRange.addEventListener("input", () => {
            setPosition(elements.heroPositionRange.value);
        });

        elements.heroPositionNumber.addEventListener("input", () => {
            setPosition(elements.heroPositionNumber.value);
        });

        elements.heroMoveUpBtn.addEventListener("click", () => {
            setPosition(state.project.heroPositionY - 5);
        });

        elements.heroMoveDownBtn.addEventListener("click", () => {
            setPosition(state.project.heroPositionY + 5);
        });

        document.querySelectorAll(".hero-position-preset").forEach((button) => {
            button.addEventListener("click", () => setPosition(button.dataset.position));
        });
    }

    function bindHomepage() {
        [
            ["homeCardTitle", "title"],
            ["homeCardSlogan", "slogan"],
            ["homeCardCategory", "category"]
        ].forEach(([elementId, key]) => {
            elements[elementId].addEventListener("input", () => {
                state.homeCard[key] = elements[elementId].value;
                renderHomeSnippet();
                queueRender();
            });
        });

        elements.homeCardImage.addEventListener("change", () => {
            state.homeCard.imageId = elements.homeCardImage.value;
            renderHomeSnippet();
        });

        elements.importHomeBtn.addEventListener("click", () => elements.importHomeInput.click());

        elements.importHomeInput.addEventListener("change", async () => {
            const file = elements.importHomeInput.files?.[0];
            if (!file) return;

            importedHomeHtml = await file.text();
            importedHomeFileName = file.name || "dreamese.html";
            elements.downloadUpdatedHomeBtn.disabled = false;
            elements.importHomeInput.value = "";
            setStatus(`Đã mở ${importedHomeFileName}.`, "success");
        });

        elements.downloadUpdatedHomeBtn.addEventListener("click", () => {
            if (!importedHomeHtml) return;

            try {
                downloadBlob(
                    importedHomeFileName,
                    new Blob([updateHomepageHtml(importedHomeHtml)], { type: "text/html;charset=utf-8" })
                );
            } catch (error) {
                setStatus(error.message, "error");
            }
        });
    }

    function bindExport() {
        elements.refreshPreviewBtn.addEventListener("click", renderPreview);

        elements.downloadHtmlBtn.addEventListener("click", () => {
            downloadBlob(
                normalizedHtmlFileName(state.project.fileName),
                new Blob([buildProjectHtml()], { type: "text/html;charset=utf-8" })
            );
        });

        elements.downloadJsonBtn.addEventListener("click", () => {
            const name = `${normalizedBaseName(state.project.fileName)}.project.json`;

            downloadBlob(
                name,
                new Blob([JSON.stringify(serializableState(), null, 2)], {
                    type: "application/json;charset=utf-8"
                })
            );
        });

        elements.importJsonBtn.addEventListener("click", () => elements.importJsonInput.click());
        elements.importJsonInput.addEventListener("change", handleImportJson);
        elements.downloadZipBtn.addEventListener("click", exportProjectZip);
        elements.writeFolderBtn.addEventListener("click", writeProjectToFolder);
    }

    function bindStorage() {
        elements.newProjectBtn.addEventListener("click", async () => {
            if (!window.confirm("Tạo dự án mới? Những thay đổi chưa lưu sẽ bị bỏ qua.")) return;

            state.gallery.forEach(revokeImageUrl);
            replaceState(createDefaultState());

            importedHomeHtml = "";
            importedHomeFileName = "dreamese.html";
            lastImportedFolderName = "";
            elements.useImportedFolderBtn.disabled = true;

            renderAll();
            setStatus("Đã tạo dự án mới.", "success");
        });

        elements.saveProjectBtn.addEventListener("click", () => saveProjectToBrowser(false));

        elements.savedProjectSelect.addEventListener("change", async () => {
            const projectId = elements.savedProjectSelect.value;
            if (!projectId) return;

            const projects = readSavedProjects();
            const saved = projects.find((item) => item.id === projectId);
            if (!saved) return;

            state.gallery.forEach(revokeImageUrl);
            suppressAutoPersist = true;
            replaceState(saved);

            try {
                await restoreImagesFromDatabase();
            } finally {
                suppressAutoPersist = false;
            }

            renderAll();
            updateStorageMessage();

            const restored = state.gallery.filter((image) => image.objectUrl).length;

            if (state.gallery.length && restored === 0) {
                setStatus(
                    "Dự án cũ chưa có file ảnh trong kho. Nạp lại thư mục hình một lần rồi bấm “Lưu dự án và ảnh”.",
                    "error"
                );
            } else {
                setStatus(`Đã mở ${state.project.name} và khôi phục ${restored} ảnh.`, "success");
            }
        });

        window.addEventListener("beforeunload", persistCurrentMetadata);
    }

    /* =====================================================
       IMPORT
    ===================================================== */

    async function handleImportProjectHtml() {
        const file = elements.importHtmlInput.files?.[0];
        if (!file) return;

        try {
            const html = await file.text();
            await importProjectFromHtml(html, file.name);
            renderAll();

            setStatus(
                `Đã đọc ${file.name}. Nạp thư mục hình rồi lưu dự án để giữ preview cho lần sau.`,
                "success"
            );
        } catch (error) {
            console.error(error);
            setStatus("Không thể đọc file HTML này.", "error");
        } finally {
            elements.importHtmlInput.value = "";
        }
    }

    async function importProjectFromHtml(html, fileName) {
        const documentValue = new DOMParser().parseFromString(html, "text/html");
        const body = documentValue.body;
        const galleryImages = Array.from(documentValue.querySelectorAll(".gallery-page img"))
            .filter((image) => image.id !== "lightboxImg");

        const heroElement = documentValue.querySelector(".story-bg");
        const heroStyle = heroElement?.getAttribute("style") || "";
        const heroPath = extractLastCssUrl(heroStyle);
        const imagePaths = galleryImages.map((image) => image.dataset.src || image.getAttribute("src") || "");

        const metaValues = Array.from(documentValue.querySelectorAll(".project-meta span"))
            .map((span) => {
                const clone = span.cloneNode(true);
                clone.querySelector("strong")?.remove();
                return clone.textContent.trim();
            });

        state.gallery.forEach(revokeImageUrl);

        replaceState({
            ...createDefaultState(),
            id: makeId(),
            project: {
                ...createDefaultState().project,
                fileName: normalizedHtmlFileName(fileName),
                folder: inferProjectFolder([heroPath, ...imagePaths]) || normalizedBaseName(fileName),
                name: documentValue.querySelector(".story-content h1")?.textContent.trim() || normalizedBaseName(fileName),
                slogan: documentValue.querySelector(".project-slogan")?.textContent.trim() || "",
                type: metaValues[0] || "",
                scale: metaValues[1] || "",
                area: metaValues[2] || "",
                partner: body?.dataset.partner || "",
                quote: documentValue.querySelector(".project-content > p")?.textContent.trim().replace(/^["“]|["”]$/g, "") || "",
                story: Array.from(documentValue.querySelectorAll(".story-text p"))
                    .map((paragraph) => paragraph.textContent.trim())
                    .filter(Boolean),
                heroPositionY: extractHeroPosition(
                    heroStyle,
                    heroElement?.dataset.heroPositionY
                )
            },
            gallery: galleryImages.map((image, index) => {
                const source = image.dataset.src || image.getAttribute("src") || "";

                return {
                    id: makeId(),
                    fileName: source.split("/").pop() || `image-${index + 1}.jpg`,
                    title: image.dataset.title || "",
                    description: image.dataset.desc || "",
                    file: null,
                    objectUrl: "",
                    stored: false
                };
            })
        });

        const heroFileName = heroPath.split("/").pop();
        state.heroImageId =
            state.gallery.find((image) => image.fileName === heroFileName)?.id
            || state.gallery[0]?.id
            || "";

        state.homeCard = {
            title: state.project.name,
            slogan: state.project.slogan,
            category: state.project.type,
            imageId: state.heroImageId
        };
    }

    async function handleImportJson() {
        const file = elements.importJsonInput.files?.[0];
        if (!file) return;

        try {
            const parsed = JSON.parse(await file.text());

            state.gallery.forEach(revokeImageUrl);
            replaceState(normalizeImportedState(parsed));
            await restoreImagesFromDatabase();
            renderAll();

            setStatus(
                "Đã mở JSON. Nếu đây là dự án chuyển từ máy khác, hãy nạp lại thư mục hình.",
                "success"
            );
        } catch (error) {
            console.error(error);
            setStatus("File JSON không đúng định dạng.", "error");
        } finally {
            elements.importJsonInput.value = "";
        }
    }

    async function addImageFiles(files, appendUnmatched) {
        const imageFiles = files.filter((file) => IMAGE_PATTERN.test(file.name));

        if (!imageFiles.length) {
            setStatus("Không tìm thấy file hình ảnh phù hợp.", "error");
            return;
        }

        const existingByName = new Map(
            state.gallery.map((image) => [image.fileName.toLowerCase(), image])
        );

        let matched = 0;
        let added = 0;

        for (const file of imageFiles) {
            const existing = existingByName.get(file.name.toLowerCase());

            if (existing) {
                revokeImageUrl(existing);
                existing.file = file;
                existing.objectUrl = URL.createObjectURL(file);
                existing.stored = false;
                matched += 1;
                continue;
            }

            if (!appendUnmatched && state.gallery.length) {
                const item = createImageItem(file);
                state.gallery.push(item);
                existingByName.set(file.name.toLowerCase(), item);
                added += 1;
                continue;
            }

            const item = createImageItem(file);
            state.gallery.push(item);
            existingByName.set(file.name.toLowerCase(), item);
            added += 1;
        }

        if (!state.heroImageId && state.gallery.length) {
            state.heroImageId = state.gallery[0].id;
        }

        if (!state.homeCard.imageId && state.gallery.length) {
            state.homeCard.imageId = state.heroImageId || state.gallery[0].id;
        }

        renderImages();
        renderHeroControls();
        queueRender();

        try {
            await persistProjectImages();
            state.gallery.forEach((image) => {
                if (image.file) image.stored = true;
            });
            persistCurrentMetadata();
            renderImages();
            updateStorageMessage();
        } catch (error) {
            console.error(error);
            setStatus(
                "Đã nạp ảnh nhưng chưa lưu được vào kho trình duyệt. Hãy bấm “Lưu dự án và ảnh”.",
                "error"
            );
            return;
        }

        setStatus(
            `Đã nạp và lưu ${matched + added} ảnh: ${matched} ảnh khớp, ${added} ảnh mới.`,
            "success"
        );
    }

    function createImageItem(file) {
        return {
            id: makeId(),
            fileName: file.name,
            title: "",
            description: "",
            objectUrl: URL.createObjectURL(file),
            file,
            stored: false
        };
    }

    /* =====================================================
       RENDER
    ===================================================== */

    function renderAll() {
        syncFormFromState();
        renderSavedProjects();
        renderImages();
        renderHeroControls();
        renderHomeSnippet();
        renderValidation();
        renderPreview();
        updateStorageMessage();
        persistCurrentMetadata();
    }

    function syncFormFromState() {
        elements.projectFileName.value = state.project.fileName;
        elements.projectFolder.value = state.project.folder;
        elements.galleryProjectFolder.value = state.project.folder;
        elements.projectName.value = state.project.name;
        elements.projectSlogan.value = state.project.slogan;
        elements.projectType.value = state.project.type;
        elements.projectScale.value = state.project.scale;
        elements.projectArea.value = state.project.area;
        elements.projectPartner.value = state.project.partner;
        elements.projectQuote.value = state.project.quote;
        elements.projectStory.value = state.project.story.join("\n\n");

        elements.assetRoot.value = state.settings.assetRoot;
        elements.homePagePath.value = state.settings.homePagePath;
        elements.cssPath.value = state.settings.cssPath;
        elements.jsPath.value = state.settings.jsPath;

        elements.homeCardTitle.value = state.homeCard.title;
        elements.homeCardSlogan.value = state.homeCard.slogan;
        elements.homeCardCategory.value = state.homeCard.category;

        renderGalleryFolderPreview();
    }

    function renderGalleryFolderPreview() {
        const assetRoot = safeFolderSegment(state.settings.assetRoot) || "PROJECTS";
        const folder = safeFolderSegment(state.project.folder) || "Ten_Thu_Muc";

        elements.galleryFolderPrefix.textContent = `${assetRoot}/`;
        elements.galleryFolderPreview.textContent =
            `Đường dẫn xuất: ${assetRoot}/${folder}/Ten_Hinh.jpg`;
    }

    function renderImages() {
        elements.imageList.innerHTML = "";
        elements.imageCount.textContent = String(state.gallery.length);

        const heroOptions = ['<option value="">Chưa có hình ảnh</option>'];
        const homeOptions = ['<option value="">Chưa có hình ảnh</option>'];

        state.gallery.forEach((image, index) => {
            const option =
                `<option value="${escapeAttribute(image.id)}">`
                + `${String(index + 1).padStart(2, "0")} — ${escapeHtml(image.fileName)}`
                + `</option>`;

            heroOptions.push(option);
            homeOptions.push(option);

            const card = elements.imageCardTemplate.content.firstElementChild.cloneNode(true);
            card.dataset.imageId = image.id;
            card.classList.toggle("is-hero", image.id === state.heroImageId);

            const preview = card.querySelector(".image-preview");
            preview.src = image.objectUrl || placeholderImage(image.fileName);
            preview.alt = image.fileName;

            card.querySelector(".image-index").textContent = String(index + 1).padStart(2, "0");
            card.querySelector(".image-name").textContent = image.fileName;
            card.querySelector(".image-path").textContent = imageWebPath(image);

            const storedBadge = card.querySelector(".stored-badge");

            if (image.stored && image.objectUrl) {
                storedBadge.textContent = "ĐÃ LƯU";
                storedBadge.className = "stored-badge stored";
            } else if (image.objectUrl) {
                storedBadge.textContent = "CHƯA LƯU";
                storedBadge.className = "stored-badge missing";
            } else {
                storedBadge.textContent = "CẦN NẠP LẠI";
                storedBadge.className = "stored-badge missing";
            }

            const titleInput = card.querySelector(".image-title-input");
            const descInput = card.querySelector(".image-desc-input");

            titleInput.value = image.title;
            descInput.value = image.description;

            titleInput.addEventListener("input", () => {
                image.title = titleInput.value;
                queueRender();
            });

            descInput.addEventListener("input", () => {
                image.description = descInput.value;
                queueRender();
            });

            card.querySelector(".set-hero-btn").addEventListener("click", () => {
                state.heroImageId = image.id;
                renderImages();
                renderHeroControls();
                queueRender();
            });

            card.querySelector(".move-up-btn").addEventListener("click", () => {
                moveImage(index, index - 1);
            });

            card.querySelector(".move-down-btn").addEventListener("click", () => {
                moveImage(index, index + 1);
            });

            card.querySelector(".remove-image-btn").addEventListener("click", async () => {
                await removeImage(image.id);
            });

            card.addEventListener("dragstart", () => {
                draggedImageId = image.id;
                card.classList.add("dragging");
            });

            card.addEventListener("dragend", () => {
                draggedImageId = "";
                card.classList.remove("dragging");
                document.querySelectorAll(".image-card").forEach((item) => {
                    item.classList.remove("drag-target");
                });
            });

            card.addEventListener("dragover", (event) => {
                event.preventDefault();
                card.classList.add("drag-target");
            });

            card.addEventListener("dragleave", () => {
                card.classList.remove("drag-target");
            });

            card.addEventListener("drop", (event) => {
                event.preventDefault();
                card.classList.remove("drag-target");

                const fromIndex = state.gallery.findIndex((item) => item.id === draggedImageId);
                const toIndex = state.gallery.findIndex((item) => item.id === image.id);

                if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) return;

                const [moved] = state.gallery.splice(fromIndex, 1);
                state.gallery.splice(toIndex, 0, moved);

                renderImages();
                queueRender();
            });

            elements.imageList.appendChild(card);
        });

        elements.heroImageSelect.innerHTML = heroOptions.join("");
        elements.heroImageSelect.value = state.heroImageId || "";

        elements.homeCardImage.innerHTML = homeOptions.join("");
        elements.homeCardImage.value = state.homeCard.imageId || "";
    }

    function renderHeroControls() {
        const value = clampNumber(state.project.heroPositionY, 0, 100, 80);
        state.project.heroPositionY = value;

        elements.heroPositionRange.value = value;
        elements.heroPositionNumber.value = value;
        elements.heroPositionOutput.value = `${value}%`;
        elements.heroPositionOutput.textContent = `${value}%`;

        const hero = imageById(state.heroImageId) || state.gallery[0];
        elements.heroFocusPreview.style.backgroundImage =
            hero ? `url("${previewSource(hero)}")` : "none";

        elements.heroFocusPreview.style.setProperty(
            "background-position",
            `center ${value}%`,
            "important"
        );

        const guide = elements.heroFocusPreview.querySelector(".hero-focus-guide");
        if (guide) guide.style.top = `${value}%`;
    }

    function updateStorageMessage() {
        const total = state.gallery.length;
        const restored = state.gallery.filter((image) => image.objectUrl).length;
        const stored = state.gallery.filter((image) => image.stored).length;

        if (!total) {
            elements.storageMessage.className = "storage-message";
            elements.storageMessage.innerHTML =
                "<strong>Ảnh sẽ được lưu trong trình duyệt.</strong>"
                + "<span>Sau khi thêm ảnh, app sẽ lưu chúng vào IndexedDB.</span>";
            return;
        }

        if (restored < total) {
            elements.storageMessage.className = "storage-message warning";
            elements.storageMessage.innerHTML =
                `<strong>${total - restored} ảnh chưa có preview thật.</strong>`
                + "<span>Nạp lại thư mục ảnh một lần, sau đó bấm “Lưu dự án và ảnh”.</span>";
            return;
        }

        elements.storageMessage.className = "storage-message";
        elements.storageMessage.innerHTML =
            `<strong>${stored}/${total} ảnh đã được lưu cục bộ.</strong>`
            + "<span>Có thể đóng app và mở lại mà không cần chọn lại ảnh.</span>";
    }

    function moveImage(fromIndex, toIndex) {
        if (toIndex < 0 || toIndex >= state.gallery.length) return;

        const [image] = state.gallery.splice(fromIndex, 1);
        state.gallery.splice(toIndex, 0, image);
        renderImages();
        queueRender();
    }

    async function removeImage(imageId) {
        const index = state.gallery.findIndex((image) => image.id === imageId);
        if (index < 0) return;

        const [removed] = state.gallery.splice(index, 1);
        revokeImageUrl(removed);

        try {
            await deleteStoredImage(state.id, imageId);
        } catch (error) {
            console.error(error);
        }

        if (state.heroImageId === imageId) {
            state.heroImageId = state.gallery[0]?.id || "";
        }

        if (state.homeCard.imageId === imageId) {
            state.homeCard.imageId = state.heroImageId || state.gallery[0]?.id || "";
        }

        renderImages();
        renderHeroControls();
        queueRender();
    }

    function renderHomeSnippet() {
        elements.homeCardSnippet.value = buildHomeCardSnippet();
    }

    function renderValidation() {
        const issues = [];

        if (!state.project.name.trim()) issues.push("Chưa nhập tên dự án.");
        if (!state.project.folder.trim()) issues.push("Chưa nhập tên thư mục hình.");
        if (!state.project.fileName.trim()) issues.push("Chưa nhập tên file HTML.");
        if (!state.gallery.length) issues.push("Dự án chưa có hình ảnh.");
        if (state.gallery.length && !state.heroImageId) issues.push("Chưa chọn ảnh Hero.");

        const unavailable = state.gallery.filter((image) => !image.file).length;

        if (unavailable) {
            issues.push(
                `${unavailable} ảnh chưa có file thật trong phiên này. `
                + "Hãy nạp lại thư mục hình trước khi xuất ZIP hoặc ghi website."
            );
        }

        if (!issues.length) {
            elements.validationBox.className = "validation-box success";
            elements.validationBox.textContent = "Dự án đã sẵn sàng để xuất.";
        } else {
            elements.validationBox.className = "validation-box warning";
            elements.validationBox.innerHTML =
                `<strong>Cần chú ý:</strong><br>${issues.map(escapeHtml).join("<br>")}`;
        }
    }

    function queueRender() {
        persistCurrentMetadata();
        renderHomeSnippet();
        renderValidation();
        updateStorageMessage();

        window.clearTimeout(previewTimer);
        previewTimer = window.setTimeout(renderPreview, 180);

        if (!suppressAutoPersist) {
            window.clearTimeout(saveTimer);
            saveTimer = window.setTimeout(() => {
                persistCurrentMetadata();
            }, 400);
        }
    }

    function renderPreview() {
        elements.previewFrame.srcdoc = buildPreviewHtml();
    }

    /* =====================================================
       PROJECT HTML
    ===================================================== */

    function buildProjectHtml() {
        const partner = state.project.partner.trim();
        const bodyAttribute = partner ? ` data-partner="${escapeAttribute(partner)}"` : "";
        const heroImage = imageById(state.heroImageId) || state.gallery[0];
        const heroPath = heroImage ? imageWebPath(heroImage) : "";
        const heroPosition = clampNumber(state.project.heroPositionY, 0, 100, 80);

        const headerMarkup = partner
            ? `        <div class="logo" data-brand-slot="header"></div>`
            : `        <div class="logo">
            <a href="${escapeAttribute(state.settings.homePagePath)}" class="logo-link">
                <img src="Dreamese_Studio.png" alt="Logo DREAMESE STUDIO" decoding="async">
                <span class="logo-text">DREAMESE STUDIO</span>
            </a>
        </div>`;

        const heroPartnerMarkup = partner
            ? `            <div class="collaboration-line hero-collab" data-brand-slot="hero"></div>\n`
            : "";

        const footerPartnerMarkup = partner
            ? `        <div class="footer-collab" data-brand-slot="footer"></div>\n`
            : "";

        const storyMarkup = state.project.story.length
            ? state.project.story
                .map((paragraph) => `                <p>${escapeHtml(paragraph)}</p>`)
                .join("\n")
            : "                <p></p>";

        const galleryPages = chunk(state.gallery, 10).map((images, pageIndex) => {
            const imageMarkup = images.map((image) => {
                const sourceAttribute = pageIndex === 0 ? "src" : "data-src";
                const titleAttribute = image.title
                    ? `\n                            data-title="${escapeAttribute(image.title)}"`
                    : "";
                const descAttribute = image.description
                    ? `\n                            data-desc="${escapeAttribute(image.description)}"`
                    : "";

                return `                        <img
                            ${sourceAttribute}="${escapeAttribute(imageWebPath(image))}"${titleAttribute}${descAttribute}
                            loading="lazy"
                            decoding="async">`;
            }).join("\n");

            return `                    <div class="gallery-page">
${imageMarkup}
                    </div>`;
        }).join("\n\n");

        return `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>${escapeHtml(state.project.name)} – DREAMESE STUDIO</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${escapeAttribute(state.settings.cssPath)}">
    <script src="${escapeAttribute(state.settings.jsPath)}" defer></script>
</head>

<body${bodyAttribute}>
    <nav>
${headerMarkup}

        <ul class="nav-menu">
            <li><a href="${escapeAttribute(state.settings.homePagePath)}">Trang chủ</a></li>
            <li><a href="#gallery">Album</a></li>
            <li><a href="#contact">Liên hệ</a></li>
        </ul>
    </nav>

    <section class="story-hero">
        <div
            class="story-bg"
            data-hero-position-y="${heroPosition}"
            style="background-image:
                linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8)),
                url('${escapeAttribute(heroPath)}');
                background-position: center ${heroPosition}% !important;">
        </div>

        <div class="story-content">
            <h1>${escapeHtml(state.project.name)}</h1>
${heroPartnerMarkup}            <p class="project-slogan">${escapeHtml(state.project.slogan)}</p>

            <div class="project-meta">
                <span><strong>Loại hình:</strong> ${escapeHtml(state.project.type)}</span>
                <span><strong>Quy mô:</strong> ${escapeHtml(state.project.scale)}</span>
                <span><strong>Diện tích xây dựng:</strong> ${escapeHtml(state.project.area)}</span>
            </div>

            <div class="story-text">
${storyMarkup}
            </div>
        </div>
    </section>

    <section class="project-content">
        <p style="color:#b48a5a; font-style:italic; margin-bottom:10px;">
            “${escapeHtml(state.project.quote)}”
        </p>

        <div class="slider-wrapper" id="gallery">
            <button class="nav-btn" id="prevBtn" type="button">&#10094;</button>

            <div class="gallery-container">
                <div class="gallery-track" id="galleryTrack">
${galleryPages || `                    <div class="gallery-page"></div>`}
                </div>
            </div>

            <button class="nav-btn" id="nextBtn" type="button">&#10095;</button>
        </div>
    </section>

    <section class="project-contact" id="contact">
        <h2>Trao đổi về công trình</h2>

        <form style="max-width:600px; margin:0 auto;">
            <input type="text" placeholder="Tên của bạn">
            <input type="tel" placeholder="Số điện thoại">
            <textarea rows="5" placeholder="Mong muốn của bạn về không gian sống..."></textarea>
            <button type="button">GỬI YÊU CẦU</button>
        </form>
    </section>

    <div class="lightbox" id="lightbox">
        <span class="lb-close" id="closeLb">&times;</span>

        <div class="lightbox-content">
            <img id="lightboxImg" alt="" decoding="async">

            <div class="lb-caption">
                <h4 id="lbTitle"></h4>
                <p id="lbDesc"></p>
            </div>

            <button class="lb-arrow lb-prev" id="lbPrev" type="button">&#10094;</button>
            <button class="lb-arrow lb-next" id="lbNext" type="button">&#10095;</button>
        </div>
    </div>

    <footer>
        <div class="footer-left">
            <div class="footer-logo">
                © DREAMESE STUDIO – Architecture & Interior Design
            </div>

            <a href="mailto:vtv.arc@gmail.com" class="footer-contact">
                vtv.arc@gmail.com - 09 4363 4758
            </a>
        </div>
${footerPartnerMarkup}    </footer>
</body>
</html>
`;
    }

    function buildPreviewHtml() {
        const hero = imageById(state.heroImageId) || state.gallery[0];
        const heroSource = hero ? previewSource(hero) : placeholderImage("Hero");
        const heroPosition = clampNumber(state.project.heroPositionY, 0, 100, 80);

        const partnerText = state.project.partner
            ? `In collaboration with ${state.project.partner === "mt" ? "MT Construction" : "TITAN Construction"}`
            : "";

        const galleryMarkup = state.gallery.slice(0, 10)
            .map((image) => `<img src="${escapeAttribute(previewSource(image))}" alt="">`)
            .join("");

        const storyMarkup = state.project.story
            .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
            .join("");

        return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<style>
@font-face{font-family:"Avo";src:local("UTM Avo"),url("../Fonts/UTM_Avo.ttf")}
@font-face{font-family:"God";src:local("UTM God WordR"),url("../Fonts/UTM_God_WordR.ttf")}
*{box-sizing:border-box}
body{margin:0;background:#0d0d0d;color:#eee;font-family:"Avo",Arial,sans-serif}
nav{height:58px;padding:0 6%;background:#050505;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:5}
.logo,h1,h2{font-family:"God",Georgia,serif;font-weight:400}
.logo{letter-spacing:.12em;font-size:13px}
.menu{display:flex;gap:18px;color:#aaa;font-size:9px}
.hero{min-height:520px;padding:250px 10% 48px;background-image:linear-gradient(rgba(0,0,0,.22),rgba(0,0,0,.82)),url("${escapeAttribute(heroSource)}");background-size:cover;background-repeat:no-repeat;background-position:center ${heroPosition}% !important}
h1{margin:0;font-size:44px}
.partner{margin:8px 0;color:#c39b6c;font-size:8px;letter-spacing:.16em;text-transform:uppercase}
.slogan{color:#f4e2cc;font-style:italic;letter-spacing:.12em;text-transform:uppercase;font-size:10px}
.meta{margin:20px 0;color:#c6a27a;font-size:9px;display:grid;gap:7px}
.story{max-width:610px;padding:22px;background:rgba(0,0,0,.58);border-left:3px solid #b48a5a;font-size:10px;line-height:1.7}
.album{padding:38px 5%;background:#111;text-align:center}
.quote{color:#b48a5a;font-style:italic;font-size:10px}
.grid{margin-top:20px;display:grid;grid-template-columns:repeat(5,1fr);gap:7px}
.grid img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:4px;background:#222}
.contact{padding:48px 10%;text-align:center;background:#0c0c0c}
.contact h2{color:#b48a5a}
footer{padding:24px 7%;display:flex;justify-content:space-between;background:#050505;color:#888;font-size:8px}
</style>
</head>
<body>
<nav>
    <div class="logo">DREAMESE STUDIO</div>
    <div class="menu"><span>TRANG CHỦ</span><span>ALBUM</span><span>LIÊN HỆ</span></div>
</nav>
<section class="hero">
    <h1>${escapeHtml(state.project.name)}</h1>
    <div class="partner">${escapeHtml(partnerText)}</div>
    <p class="slogan">${escapeHtml(state.project.slogan)}</p>
    <div class="meta">
        <span>Loại hình: ${escapeHtml(state.project.type)}</span>
        <span>Quy mô: ${escapeHtml(state.project.scale)}</span>
        <span>Diện tích: ${escapeHtml(state.project.area)}</span>
    </div>
    <div class="story">${storyMarkup || "<p>Nội dung câu chuyện dự án.</p>"}</div>
</section>
<section class="album">
    <p class="quote">“${escapeHtml(state.project.quote)}”</p>
    <div class="grid">${galleryMarkup}</div>
</section>
<section class="contact"><h2>Trao đổi về công trình</h2></section>
<footer>
    <span>© DREAMESE STUDIO – Architecture & Interior Design</span>
    <span>${escapeHtml(partnerText)}</span>
</footer>
</body>
</html>`;
    }

    /* =====================================================
       HOMEPAGE
    ===================================================== */

    function buildHomeCardSnippet() {
        const image =
            imageById(state.homeCard.imageId)
            || imageById(state.heroImageId)
            || state.gallery[0];

        const imagePath = image ? imageWebPath(image) : "";

        return `            <a href="${escapeAttribute(normalizedHtmlFileName(state.project.fileName))}" class="project" data-bg="${escapeAttribute(imagePath)}">
                <span class="project-content">
                    ${escapeHtml(state.homeCard.title)}<br>
                    <small>${escapeHtml(state.homeCard.slogan)}</small>
                    <small class="project-meta">${escapeHtml(state.homeCard.category)}</small>
                </span>
            </a>`;
    }

    function updateHomepageHtml(html) {
        const documentValue = new DOMParser().parseFromString(html, "text/html");
        const track = documentValue.querySelector("#projectTrack");

        if (!track) {
            throw new Error("Không tìm thấy #projectTrack trong dreamese.html.");
        }

        const snippetDocument = new DOMParser().parseFromString(
            buildHomeCardSnippet(),
            "text/html"
        );

        const newCard = snippetDocument.body.firstElementChild;

        if (!newCard) {
            throw new Error("Không tạo được thẻ dự án trang chủ.");
        }

        const fileName = normalizedHtmlFileName(state.project.fileName);
        const existingCard = Array.from(track.querySelectorAll("a[href]"))
            .find((card) => card.getAttribute("href") === fileName);

        if (existingCard) {
            existingCard.replaceWith(newCard);
        } else {
            track.appendChild(newCard);
        }

        return `<!DOCTYPE html>\n${documentValue.documentElement.outerHTML}`;
    }

    /* =====================================================
       SAVE / LOAD
    ===================================================== */

    async function saveProjectToBrowser(silent = false) {
        try {
            setStatus("Đang lưu dự án và file ảnh…", "");

            await persistProjectImages();

            const projects = readSavedProjects();
            const serialized = serializableState();
            const existingIndex = projects.findIndex((item) => item.id === serialized.id);

            if (existingIndex >= 0) {
                projects[existingIndex] = serialized;
            } else {
                projects.push(serialized);
            }

            localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
            localStorage.setItem(CURRENT_KEY, JSON.stringify(serialized));

            state.gallery.forEach((image) => {
                if (image.file) image.stored = true;
            });

            renderSavedProjects();
            renderImages();
            updateStorageMessage();
            elements.savedProjectSelect.value = state.id;

            if (!silent) {
                setStatus(
                    `Đã lưu ${state.project.name} và ${state.gallery.filter((image) => image.stored).length} ảnh.`,
                    "success"
                );
            }
        } catch (error) {
            console.error(error);
            setStatus(
                `Không thể lưu ảnh: ${error?.message || error}. Có thể dung lượng trình duyệt đã đầy.`,
                "error"
            );
        }
    }

    function renderSavedProjects() {
        const projects = readSavedProjects();

        elements.savedProjectSelect.innerHTML = [
            '<option value="">Dự án đã lưu trong trình duyệt</option>',
            ...projects.map((project) => (
                `<option value="${escapeAttribute(project.id)}">`
                + `${escapeHtml(project.project?.name || "Dự án chưa đặt tên")}`
                + `</option>`
            ))
        ].join("");

        if (projects.some((project) => project.id === state.id)) {
            elements.savedProjectSelect.value = state.id;
        }
    }

    function readSavedProjects() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        } catch {
            return [];
        }
    }

    function persistCurrentMetadata() {
        try {
            localStorage.setItem(CURRENT_KEY, JSON.stringify(serializableState()));
        } catch {
            // Không làm gián đoạn app nếu localStorage đầy.
        }
    }

    async function restoreCurrentState() {
        try {
            const current = JSON.parse(localStorage.getItem(CURRENT_KEY) || "null");
            if (!current) return;

            replaceState(normalizeImportedState(current));
            await restoreImagesFromDatabase();
        } catch (error) {
            console.error(error);
        }
    }

    function serializableState() {
        return {
            id: state.id,
            settings: { ...state.settings },
            project: {
                ...state.project,
                story: [...state.project.story]
            },
            gallery: state.gallery.map((image) => ({
                id: image.id,
                fileName: image.fileName,
                title: image.title,
                description: image.description
            })),
            heroImageId: state.heroImageId,
            homeCard: { ...state.homeCard }
        };
    }

    function normalizeImportedState(input) {
        const base = createDefaultState();

        return {
            id: input.id || base.id,
            settings: {
                ...base.settings,
                ...(input.settings || {})
            },
            project: {
                ...base.project,
                ...(input.project || {}),
                story: Array.isArray(input.project?.story)
                    ? input.project.story
                    : splitParagraphs(input.project?.story || ""),
                heroPositionY: clampNumber(input.project?.heroPositionY, 0, 100, 80)
            },
            gallery: Array.isArray(input.gallery)
                ? input.gallery.map((image, index) => ({
                    id: image.id || `${Date.now()}-${index}`,
                    fileName: image.fileName || `image-${index + 1}.jpg`,
                    title: image.title || "",
                    description: image.description || "",
                    objectUrl: "",
                    file: null,
                    stored: false
                }))
                : [],
            heroImageId: input.heroImageId || "",
            homeCard: {
                ...base.homeCard,
                ...(input.homeCard || {})
            }
        };
    }

    function replaceState(nextState) {
        const normalized = normalizeImportedState(nextState);

        Object.keys(state).forEach((key) => delete state[key]);
        Object.assign(state, normalized);
    }

    /* =====================================================
       EXPORT
    ===================================================== */

    async function exportProjectZip() {
        try {
            setStatus("Đang đóng gói dự án…", "");

            const zip = new StoreZipWriter();
            const htmlName = normalizedHtmlFileName(state.project.fileName);
            const jsonName = `${normalizedBaseName(htmlName)}.project.json`;

            await zip.addText(htmlName, buildProjectHtml());
            await zip.addText(jsonName, JSON.stringify(serializableState(), null, 2));
            await zip.addText("HOME-CARD.html", buildHomeCardSnippet());
            await zip.addText("HUONG-DAN.txt", buildPackageReadme());

            if (importedHomeHtml) {
                await zip.addText(importedHomeFileName, updateHomepageHtml(importedHomeHtml));
            }

            for (const image of state.gallery) {
                if (!image.file) continue;
                await zip.addFile(imageWebPath(image), image.file);
            }

            downloadBlob(
                `${normalizedBaseName(htmlName)}-Website.zip`,
                zip.build()
            );

            setStatus("Đã tạo gói ZIP.", "success");
        } catch (error) {
            console.error(error);
            setStatus(`Không thể tạo ZIP: ${error.message}`, "error");
        }
    }

    async function writeProjectToFolder() {
        if (!window.showDirectoryPicker) {
            setStatus("Hãy dùng Chrome/Edge hoặc tải gói ZIP.", "error");
            return;
        }

        try {
            const rootHandle = await window.showDirectoryPicker({ mode: "readwrite" });

            if (!window.confirm("Ghi hoặc ghi đè file dự án và ảnh vào thư mục vừa chọn?")) {
                return;
            }

            await writeTextFile(
                rootHandle,
                normalizedHtmlFileName(state.project.fileName),
                buildProjectHtml()
            );

            const assetRootHandle = await rootHandle.getDirectoryHandle(
                safeFolderSegment(state.settings.assetRoot),
                { create: true }
            );

            const projectFolderHandle = await assetRootHandle.getDirectoryHandle(
                safeFolderSegment(state.project.folder),
                { create: true }
            );

            for (const image of state.gallery) {
                if (!image.file) continue;
                await writeFileHandle(projectFolderHandle, image.fileName, image.file);
            }

            if (importedHomeHtml) {
                await writeTextFile(
                    rootHandle,
                    importedHomeFileName,
                    updateHomepageHtml(importedHomeHtml)
                );
            }

            setStatus("Đã ghi dự án vào thư mục website.", "success");
        } catch (error) {
            if (error.name === "AbortError") {
                setStatus("Đã hủy chọn thư mục.", "");
                return;
            }

            console.error(error);
            setStatus(`Không thể ghi thư mục: ${error.message}`, "error");
        }
    }

    async function writeTextFile(directoryHandle, fileName, text) {
        const fileHandle = await directoryHandle.getFileHandle(fileName, { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(text);
        await writable.close();
    }

    async function writeFileHandle(directoryHandle, fileName, file) {
        const fileHandle = await directoryHandle.getFileHandle(fileName, { create: true });
        const writable = await fileHandle.createWritable();
        await writable.write(file);
        await writable.close();
    }

    function buildPackageReadme() {
        const missing = state.gallery
            .filter((image) => !image.file)
            .map((image) => image.fileName);

        return `DREAMESE PROJECT MANAGER v0.5

1. Chép ${normalizedHtmlFileName(state.project.fileName)} vào thư mục gốc website.
2. Chép ${safeFolderSegment(state.settings.assetRoot)}/${safeFolderSegment(state.project.folder)} vào đúng vị trí.
3. Website cần có:
   - ${state.settings.cssPath}
   - ${state.settings.jsPath}
   - Dreamese_Studio.png
   - Logo đối tác nếu dự án có đối tác.

ẢNH CHƯA CÓ TRONG ZIP:
${missing.length ? missing.join("\n") : "Không có."}
`;
    }

    /* =====================================================
       HELPERS
    ===================================================== */

    function imageById(id) {
        return state.gallery.find((image) => image.id === id);
    }

    function imageWebPath(image) {
        return [
            safeFolderSegment(state.settings.assetRoot),
            safeFolderSegment(state.project.folder),
            image.fileName
        ].filter(Boolean).join("/");
    }

    function previewSource(image) {
        return image.objectUrl || placeholderImage(image.fileName);
    }

    function detectImportedFolderName(files) {
        for (const file of files) {
            const relativePath = String(file.webkitRelativePath || "").replace(/\\/g, "/");
            const firstSegment = relativePath.split("/").filter(Boolean)[0];
            if (firstSegment) return safeFolderSegment(firstSegment);
        }

        return "";
    }

    function inferProjectFolder(paths) {
        for (const path of paths) {
            if (!path) continue;

            const normalized = path.replace(/\\/g, "/").replace(/^\.?\//, "");
            const parts = normalized.split("/").filter(Boolean);
            const projectsIndex = parts.findIndex((part) => part.toUpperCase() === "PROJECTS");

            if (projectsIndex >= 0 && parts[projectsIndex + 1]) {
                return parts[projectsIndex + 1];
            }

            if (parts.length >= 2) return parts[parts.length - 2];
        }

        return "";
    }

    function extractLastCssUrl(styleText) {
        const matches = Array.from(String(styleText).matchAll(/url\((['"]?)(.*?)\1\)/gi));
        return matches.at(-1)?.[2] || "";
    }

    function extractHeroPosition(styleText, dataValue = "") {
        if (String(dataValue).trim() !== "") {
            return clampNumber(dataValue, 0, 100, 80);
        }

        const match = String(styleText).match(
            /background-position(?:-y)?\s*:\s*(?:center\s+)?(-?\d+(?:\.\d+)?)%/i
        );

        return match ? clampNumber(match[1], 0, 100, 80) : 80;
    }

    function splitParagraphs(text) {
        return String(text)
            .split(/\n\s*\n/g)
            .map((paragraph) => paragraph.trim())
            .filter(Boolean);
    }

    function chunk(items, size) {
        const result = [];

        for (let index = 0; index < items.length; index += size) {
            result.push(items.slice(index, index + size));
        }

        return result;
    }

    function clampNumber(value, min, max, fallback) {
        const number = Number(value);
        if (!Number.isFinite(number)) return fallback;
        return Math.min(max, Math.max(min, number));
    }

    function safeFolderSegment(value) {
        return String(value || "")
            .trim()
            .replace(/[\\/:*?"<>|]+/g, "_")
            .replace(/\s+/g, "_")
            .replace(/^_+|_+$/g, "");
    }

    function normalizedHtmlFileName(value) {
        const base = String(value || "Du_An_Moi.html").trim();
        return /\.html?$/i.test(base) ? base : `${base}.html`;
    }

    function normalizedBaseName(value) {
        return normalizedHtmlFileName(value).replace(/\.html?$/i, "");
    }

    function setNestedValue(object, path, value) {
        let target = object;

        path.slice(0, -1).forEach((key) => {
            target = target[key];
        });

        target[path.at(-1)] = value;
    }

    function revokeImageUrl(image) {
        if (image?.objectUrl) {
            URL.revokeObjectURL(image.objectUrl);
            image.objectUrl = "";
        }
    }

    function setStatus(message, type = "") {
        elements.statusBar.textContent = message;
        elements.statusBar.className = `status-bar ${type}`.trim();
    }

    function downloadBlob(fileName, blob) {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");

        anchor.href = url;
        anchor.download = fileName;
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();

        window.setTimeout(() => URL.revokeObjectURL(url), 1500);
    }

    function placeholderImage(label) {
        const safeLabel = String(label || "Image").slice(0, 32);

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600">
                <rect width="100%" height="100%" fill="#181818"/>
                <path d="M0 520L220 300L390 450L520 330L800 600H0Z" fill="#272727"/>
                <circle cx="610" cy="160" r="55" fill="#b48a5a" opacity=".45"/>
                <text x="50%" y="52%" fill="#888" font-family="Arial" font-size="28" text-anchor="middle">${escapeHtml(safeLabel)}</text>
            </svg>
        `;

        return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    }

    function escapeHtml(value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    function escapeAttribute(value) {
        return escapeHtml(value).replaceAll("\n", "&#10;");
    }

    function escapeRegExp(value) {
        return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    /* =====================================================
       ZIP STORE WRITER — KHÔNG CẦN THƯ VIỆN
    ===================================================== */

    class StoreZipWriter {
        constructor() {
            this.files = [];
        }

        async addText(path, text) {
            this.files.push({
                path: normalizeZipPath(path),
                bytes: new TextEncoder().encode(text)
            });
        }

        async addFile(path, file) {
            this.files.push({
                path: normalizeZipPath(path),
                bytes: new Uint8Array(await file.arrayBuffer())
            });
        }

        build() {
            const localParts = [];
            const centralParts = [];
            let localOffset = 0;

            this.files.forEach((entry) => {
                const nameBytes = new TextEncoder().encode(entry.path);
                const crc = crc32(entry.bytes);
                const { time, date } = dosDateTime(new Date());

                const localHeader = new Uint8Array(30 + nameBytes.length);
                const localView = new DataView(localHeader.buffer);

                localView.setUint32(0, 0x04034b50, true);
                localView.setUint16(4, 20, true);
                localView.setUint16(6, 0x0800, true);
                localView.setUint16(8, 0, true);
                localView.setUint16(10, time, true);
                localView.setUint16(12, date, true);
                localView.setUint32(14, crc, true);
                localView.setUint32(18, entry.bytes.length, true);
                localView.setUint32(22, entry.bytes.length, true);
                localView.setUint16(26, nameBytes.length, true);
                localView.setUint16(28, 0, true);
                localHeader.set(nameBytes, 30);

                localParts.push(localHeader, entry.bytes);

                const centralHeader = new Uint8Array(46 + nameBytes.length);
                const centralView = new DataView(centralHeader.buffer);

                centralView.setUint32(0, 0x02014b50, true);
                centralView.setUint16(4, 20, true);
                centralView.setUint16(6, 20, true);
                centralView.setUint16(8, 0x0800, true);
                centralView.setUint16(10, 0, true);
                centralView.setUint16(12, time, true);
                centralView.setUint16(14, date, true);
                centralView.setUint32(16, crc, true);
                centralView.setUint32(20, entry.bytes.length, true);
                centralView.setUint32(24, entry.bytes.length, true);
                centralView.setUint16(28, nameBytes.length, true);
                centralView.setUint16(30, 0, true);
                centralView.setUint16(32, 0, true);
                centralView.setUint16(34, 0, true);
                centralView.setUint16(36, 0, true);
                centralView.setUint32(38, 0, true);
                centralView.setUint32(42, localOffset, true);
                centralHeader.set(nameBytes, 46);

                centralParts.push(centralHeader);
                localOffset += localHeader.length + entry.bytes.length;
            });

            const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
            const end = new Uint8Array(22);
            const endView = new DataView(end.buffer);

            endView.setUint32(0, 0x06054b50, true);
            endView.setUint16(4, 0, true);
            endView.setUint16(6, 0, true);
            endView.setUint16(8, this.files.length, true);
            endView.setUint16(10, this.files.length, true);
            endView.setUint32(12, centralSize, true);
            endView.setUint32(16, localOffset, true);
            endView.setUint16(20, 0, true);

            return new Blob([...localParts, ...centralParts, end], {
                type: "application/zip"
            });
        }
    }

    function normalizeZipPath(path) {
        return String(path).replaceAll("\\", "/").replace(/^\/+/, "");
    }

    function dosDateTime(dateValue) {
        const year = Math.max(1980, dateValue.getFullYear());

        return {
            time:
                (dateValue.getHours() << 11)
                | (dateValue.getMinutes() << 5)
                | Math.floor(dateValue.getSeconds() / 2),
            date:
                ((year - 1980) << 9)
                | ((dateValue.getMonth() + 1) << 5)
                | dateValue.getDate()
        };
    }

    const CRC_TABLE = (() => {
        const table = new Uint32Array(256);

        for (let index = 0; index < 256; index += 1) {
            let value = index;

            for (let bit = 0; bit < 8; bit += 1) {
                value = (value & 1)
                    ? (0xedb88320 ^ (value >>> 1))
                    : (value >>> 1);
            }

            table[index] = value >>> 0;
        }

        return table;
    })();

    function crc32(bytes) {
        let crc = 0xffffffff;

        for (const byte of bytes) {
            crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
        }

        return (crc ^ 0xffffffff) >>> 0;
    }
})();
