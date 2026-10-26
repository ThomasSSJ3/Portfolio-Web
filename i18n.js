/* =========================================================
   TRADUCTIONS DU SITE (Anglais / Français)
   ---------------------------------------------------------
   Tous les textes du site sont ici, côte à côte en EN et FR.
   Dans le HTML, un élément avec data-i18n="nav.home" affichera
   le texte de la clé "nav.home" dans la langue choisie.

   - Textes généraux  -> objet UI
   - Projets          -> objet PROJECTS (plus bas)
   ========================================================= */

const UI = {
    en: {
        "meta.home": "Thomas Grelet | Robotics Engineering Student",
        "meta.description": "Portfolio of Thomas Grelet, robotics engineering student: AI, embedded systems and image analysis.",

        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        "aria.theme": "Switch between light and dark theme",
        "aria.lang": "Switch language to French",
        "aria.menu": "Open or close the menu",
        "aria.photo": "Portrait of Thomas Grelet",

        "hero.hi": "Hi, I'm",
        "hero.roles": ["Robotics Student", "Engineering Student", "AI Student", "Embedded Systems Student", "Image Analyst"],
        "hero.roles_sr": "Robotics student, engineering student, AI student, embedded systems student, image analyst.",
        // TODO : remplace cette bio par la tienne
        "hero.bio": "Robotics engineering student interested in AI, embedded systems and image analysis. This portfolio gathers the projects I have worked on throughout my studies.",
        "hero.cv": "Download CV",
        "hero.work": "See my work",
        "chip.robotics": "Robotics",
        "chip.ai": "AI",
        "chip.embedded": "Embedded systems",

        "about.title": "About",
        "about.accent": "me",
        "about.p1": "I'm a robotics engineering student, curious about the places where artificial intelligence, embedded systems and image analysis meet.",
        // TODO : remplace ce paragraphe par ton parcours, ce qui te motive, ce que tu recherches (stage, alternance, premier poste…)
        "about.p2": "[Replace this text with your own story: your background, what drives you, what you are looking for.]",
        "about.focus": "Focus areas",
        "tag.robotics": "Robotics",
        "tag.ai": "Artificial intelligence",
        "tag.embedded": "Embedded systems",
        "tag.vision": "Image analysis",
        "about.cta": "Get in touch",

        "projects.title": "My",
        "projects.accent": "projects",
        "projects.intro": "A selection of the projects I have worked on during my studies, from first year to today.",
        "filter.all": "All",
        "card.view": "View project",

        "contact.title": "Get in",
        "contact.accent": "touch",
        "contact.intro": "A question, an opportunity, or just want to say hi? Send me a message and I'll get back to you.",
        "form.name": "Full name",
        "form.email": "Email",
        "form.phone": "Phone number (optional)",
        "form.subject": "Subject",
        "form.message": "Your message",
        "form.send": "Send message",
        "form.status": "Opening your email app…",
        "form.default_subject": "Message from your portfolio",

        "footer.rights": "All rights reserved.",
        "footer.top": "Back to top",

        "page.back": "All projects",
        "proj.context_h": "Context & goals",
        "proj.role_h": "My role",
        "proj.results_h": "Results & takeaways",
        "proj.gallery_h": "Gallery",
        "proj.details": "Project details",
        "proj.level": "Level",
        "proj.tech_h": "Technologies",
        "proj.links_h": "Links",
        "proj.link_repo": "Source code",
        "proj.link_report": "Report (PDF)",
        "proj.prev": "Previous project",
        "proj.next": "Next project",

        // Textes par défaut des pages projets (utilisés tant que tu n'as pas écrit les tiens dans PROJECTS)
        "placeholder.context": "Describe the context of the project and what you were trying to achieve.",
        "placeholder.role": "Explain what you personally worked on: tasks, tools, team size.",
        "placeholder.results": "Summarise the results you obtained and what you learned.",
        "placeholder.image": "Image to add",
        "placeholder.tech": "Technology"
    },

    fr: {
        "meta.home": "Thomas Grelet | Étudiant ingénieur en robotique",
        "meta.description": "Portfolio de Thomas Grelet, étudiant ingénieur en robotique : IA, systèmes embarqués et analyse d'images.",

        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.projects": "Projets",
        "nav.contact": "Contact",

        "aria.theme": "Basculer entre thème clair et sombre",
        "aria.lang": "Passer le site en anglais",
        "aria.menu": "Ouvrir ou fermer le menu",
        "aria.photo": "Portrait de Thomas Grelet",

        "hero.hi": "Bonjour, moi c'est",
        "hero.roles": ["Étudiant en robotique", "Étudiant ingénieur", "Étudiant en IA", "Étudiant en systèmes embarqués", "Analyste d'images"],
        "hero.roles_sr": "Étudiant en robotique, étudiant ingénieur, étudiant en IA, étudiant en systèmes embarqués, analyste d'images.",
        "hero.bio": "Étudiant ingénieur en robotique, intéressé par l'IA, les systèmes embarqués et l'analyse d'images. Ce portfolio rassemble les projets réalisés au fil de mes études.",
        "hero.cv": "Télécharger mon CV",
        "hero.work": "Voir mes projets",
        "chip.robotics": "Robotique",
        "chip.ai": "IA",
        "chip.embedded": "Systèmes embarqués",

        "about.title": "À propos",
        "about.accent": "de moi",
        "about.p1": "Je suis étudiant ingénieur en robotique, curieux de tout ce qui se joue entre intelligence artificielle, systèmes embarqués et analyse d'images.",
        "about.p2": "[Remplace ce texte par ton parcours, ce qui te motive et ce que tu recherches.]",
        "about.focus": "Domaines d'intérêt",
        "tag.robotics": "Robotique",
        "tag.ai": "Intelligence artificielle",
        "tag.embedded": "Systèmes embarqués",
        "tag.vision": "Analyse d'images",
        "about.cta": "Me contacter",

        "projects.title": "Mes",
        "projects.accent": "projets",
        "projects.intro": "Une sélection des projets réalisés pendant mes études, de la première année à aujourd'hui.",
        "filter.all": "Tous",
        "card.view": "Voir le projet",

        "contact.title": "Me",
        "contact.accent": "contacter",
        "contact.intro": "Une question, une opportunité, ou simplement envie de dire bonjour ? Écris-moi, je te répondrai rapidement.",
        "form.name": "Nom complet",
        "form.email": "Email",
        "form.phone": "Téléphone (facultatif)",
        "form.subject": "Objet",
        "form.message": "Votre message",
        "form.send": "Envoyer le message",
        "form.status": "Ouverture de votre application mail…",
        "form.default_subject": "Message depuis votre portfolio",

        "footer.rights": "Tous droits réservés.",
        "footer.top": "Haut de page",

        "page.back": "Tous les projets",
        "proj.context_h": "Contexte et objectifs",
        "proj.role_h": "Mon rôle",
        "proj.results_h": "Résultats et enseignements",
        "proj.gallery_h": "Galerie",
        "proj.details": "Détails du projet",
        "proj.level": "Niveau",
        "proj.tech_h": "Technologies",
        "proj.links_h": "Liens",
        "proj.link_repo": "Code source",
        "proj.link_report": "Rapport (PDF)",
        "proj.prev": "Projet précédent",
        "proj.next": "Projet suivant",

        "placeholder.context": "Décris le contexte du projet et ce que vous cherchiez à accomplir.",
        "placeholder.role": "Explique ce sur quoi tu as personnellement travaillé : tâches, outils, taille de l'équipe.",
        "placeholder.results": "Résume les résultats obtenus et ce que tu as appris.",
        "placeholder.image": "Image à ajouter",
        "placeholder.tech": "Technologie"
    }
};

/* =========================================================
   PROJETS
   ---------------------------------------------------------
   Pour chaque projet : le niveau (year) et, dans chaque langue :
     title    -> titre (carte + page)
     desc     -> courte description (carte + début de page)
     context  -> (facultatif) section « Contexte et objectifs »
     role     -> (facultatif) section « Mon rôle »
     results  -> (facultatif) section « Résultats et enseignements »
   Les champs facultatifs affichent un texte par défaut tant que tu
   ne les as pas ajoutés. Exemple :
       fr: { title: "...", desc: "...", context: "Mon texte ici" }
   ========================================================= */

const PROJECT_ORDER = ["ter", "pfr", "pirates", "ija", "trains", "lorenz", "pro"];

const PROJECTS = {
    ter: {
        year: "4A",
        en: {
            title: "Study and Research Project (TER)",
            desc: "Research and study project carried out during the fourth year."
        },
        fr: {
            title: "Travaux d'Études et de Recherche (TER)",
            desc: "Projet d'études et de recherche réalisé en quatrième année."
        }
    },
    pfr: {
        year: "3A",
        en: {
            title: "Fil Rouge Project (PFR)",
            desc: "Long-running team project carried out over the third year."
        },
        fr: {
            title: "Projet Fil Rouge (PFR)",
            desc: "Projet d'équipe mené sur la durée en troisième année."
        }
    },
    pirates: {
        year: "3A",
        en: {
            title: "Pirate Game",
            desc: "Game project developed during the third year."
        },
        fr: {
            title: "Pirate Game",
            desc: "Projet de jeu développé en troisième année."
        }
    },
    ija: {
        year: "L2",
        en: {
            title: "IJA – “Connected Speakers” Prototyping",
            desc: "Prototyping project around connected speakers, second year."
        },
        fr: {
            title: "IJA – Prototypage « Enceintes connectées »",
            desc: "Projet de prototypage autour d'enceintes connectées, en deuxième année."
        }
    },
    trains: {
        year: "L2",
        en: {
            title: "Railway Traffic Management",
            desc: "Project on managing railway traffic, second year."
        },
        fr: {
            title: "Gestion d'un trafic ferroviaire",
            desc: "Projet de gestion d'un trafic ferroviaire, en deuxième année."
        }
    },
    lorenz: {
        year: "L2",
        en: {
            title: "Lorenz Attractor",
            desc: "Project on the Lorenz attractor, second year."
        },
        fr: {
            title: "Attracteur de Lorenz",
            desc: "Projet autour de l'attracteur de Lorenz, en deuxième année."
        }
    },
    pro: {
        year: "L1",
        en: {
            title: "Professional Project",
            desc: "Professional project carried out during the first year."
        },
        fr: {
            title: "Projet professionnel",
            desc: "Projet professionnel réalisé en première année."
        }
    }
};
