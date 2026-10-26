/* =========================================================
   Portfolio – Thomas Grelet
   Sommaire
   0. Réglages (à personnaliser)
   1. Langue (EN / FR)
   2. Thème clair / sombre
   3. Effet machine à écrire
   4. Menu mobile, header, lien actif
   5. Apparition au scroll
   6. Filtres des projets
   7. Formulaire de contact
   8. Images manquantes
   ========================================================= */
(function () {
    "use strict";

    /* ---------- 0. Réglages ---------- */
    // Adresse qui recevra les messages du formulaire (ouvre l'application mail du visiteur)
    const CONTACT_EMAIL = "ton.adresse@email.com"; // TODO : mets ta vraie adresse

    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const store = {
        get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
        set(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* ignoré */ } }
    };

    /* ---------- 1. Langue ---------- */
    let lang = root.dataset.lang === "fr" ? "fr" : "en";

    // Renvoie le texte d'une clé dans la langue courante
    function t(key) {
        const match = key.match(/^proj\.([^.]+)\.(.+)$/);
        if (match && PROJECTS[match[1]]) {
            const project = PROJECTS[match[1]];
            if (match[2] === "year") return project.year;
            const own = project[lang] && project[lang][match[2]];
            return own || UI[lang]["placeholder." + match[2]] || "";
        }
        const value = UI[lang][key];
        return value !== undefined ? value : (UI.en[key] !== undefined ? UI.en[key] : key);
    }

    function applyLanguage(newLang) {
        lang = newLang;
        root.lang = lang;
        root.dataset.lang = lang;
        store.set("lang", lang);

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            el.textContent = t(el.dataset.i18n);
        });
        // Attributs traduits : data-i18n-aria="clé", data-i18n-alt="clé", data-i18n-content="clé"
        const attributes = { "i18nAria": "aria-label", "i18nAlt": "alt", "i18nContent": "content" };
        Object.keys(attributes).forEach(function (datasetKey) {
            const selector = "[data-" + datasetKey.replace(/[A-Z]/g, function (c) { return "-" + c.toLowerCase(); }) + "]";
            document.querySelectorAll(selector).forEach(function (el) {
                el.setAttribute(attributes[datasetKey], t(el.dataset[datasetKey]));
            });
        });

        // Titre de l'onglet
        const projectId = document.body.dataset.project;
        document.title = projectId ? t("proj." + projectId + ".title") + " | Thomas Grelet" : t("meta.home");

        startTypewriter();
    }

    const langBtn = document.getElementById("lang-btn");
    if (langBtn) {
        langBtn.addEventListener("click", function () {
            applyLanguage(lang === "en" ? "fr" : "en");
        });
    }

    /* ---------- 2. Thème ---------- */
    const themeBtn = document.getElementById("theme-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            const next = root.dataset.theme === "dark" ? "light" : "dark";
            root.dataset.theme = next;
            store.set("theme", next);
        });
    }

    /* ---------- 3. Machine à écrire ---------- */
    let typeTimer;
    function startTypewriter() {
        const el = document.getElementById("typed");
        if (!el) return;
        clearTimeout(typeTimer);
        const words = UI[lang]["hero.roles"];
        if (reduceMotion) {
            el.textContent = words[0];
            return;
        }
        let wordIndex = 0;
        let charCount = 0;
        let deleting = false;
        el.textContent = "";

        function tick() {
            const word = words[wordIndex];
            charCount += deleting ? -1 : 1;
            el.textContent = word.slice(0, charCount);

            let delay = deleting ? 40 : 85;
            if (!deleting && charCount === word.length) {
                deleting = true;
                delay = 1700;               // pause quand le mot est complet
            } else if (deleting && charCount === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                delay = 350;
            }
            typeTimer = setTimeout(tick, delay);
        }
        tick();
    }

    /* ---------- 4. Menu, header, lien actif ---------- */
    const header = document.getElementById("header");
    const menuBtn = document.getElementById("menu-btn");

    function setMenu(open) {
        header.classList.toggle("nav-open", open);
        menuBtn.setAttribute("aria-expanded", String(open));
        menuBtn.querySelector("use").setAttribute("href", open ? "#i-close" : "#i-menu");
    }
    if (menuBtn) {
        menuBtn.addEventListener("click", function () {
            setMenu(!header.classList.contains("nav-open"));
        });
        document.querySelectorAll("#navbar a").forEach(function (link) {
            link.addEventListener("click", function () { setMenu(false); });
        });
    }

    function onScroll() {
        header.classList.toggle("is-scrolled", window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Surligne dans le menu la section visible (page d'accueil uniquement)
    if (document.body.dataset.page === "home" && "IntersectionObserver" in window) {
        const links = document.querySelectorAll("#navbar a[data-section]");
        const spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                links.forEach(function (link) {
                    link.classList.toggle("active", link.dataset.section === entry.target.id);
                });
            });
        }, { rootMargin: "-45% 0px -50% 0px" });
        document.querySelectorAll("main section[id]").forEach(function (section) { spy.observe(section); });
    }

    /* ---------- 5. Apparition au scroll ---------- */
    const revealItems = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealItems.forEach(function (item) { revealObserver.observe(item); });
    } else {
        revealItems.forEach(function (item) { item.classList.add("is-visible"); });
    }

    /* ---------- 6. Filtres des projets ---------- */
    const filters = document.querySelectorAll(".filter");
    filters.forEach(function (button) {
        button.addEventListener("click", function () {
            const wanted = button.dataset.filter;
            filters.forEach(function (b) {
                const active = b === button;
                b.classList.toggle("active", active);
                b.setAttribute("aria-pressed", String(active));
            });
            document.querySelectorAll(".projects-grid .card").forEach(function (card) {
                card.hidden = !(wanted === "all" || card.dataset.year === wanted);
            });
        });
    });

    /* ---------- 7. Formulaire de contact ---------- */
    const form = document.getElementById("contact-form");
    if (form) {
        const status = document.getElementById("form-status");
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const data = new FormData(form);
            const subject = data.get("subject") || t("form.default_subject");
            const lines = [data.get("message"), "", "— " + data.get("name"), data.get("email")];
            if (data.get("phone")) lines.push(data.get("phone"));

            status.textContent = t("form.status");
            window.location.href = "mailto:" + CONTACT_EMAIL +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(lines.join("\n"));
        });
    }

    /* ---------- 8. Images manquantes ---------- */
    // Si une image n'existe pas, on la cache : le fond dégradé prend le relais.
    document.querySelectorAll("img[data-fallback]").forEach(function (img) {
        function hide() { img.classList.add("is-missing"); }
        if (img.complete && img.naturalWidth === 0 && img.getAttribute("loading") !== "lazy") hide();
        img.addEventListener("error", hide);
    });

    /* ---------- Démarrage ---------- */
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
    applyLanguage(lang);
})();
