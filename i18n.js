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
        "hero.bio": "Robotics engineering student interested in AI, embedded systems and image analysis. This portfolio gathers the projects I have worked on throughout my studies.",
        "hero.cv": "Download CV",
        "hero.work": "See my work",
        "chip.robotics": "Robotics",
        "chip.ai": "AI",
        "chip.embedded": "Embedded systems",

        "about.title": "About",
        "about.accent": "me",
        "about.p1": "I'm a robotics engineering student, curious about the places where artificial intelligence, embedded systems and image analysis meet.",
        "about.p2": "I have a strong interest in the space field. Currently in my forth year of studies, I am looking for an internship for a four mouth duration.",
        "about.focus": "Focus areas",
        "tag.robotics": "Robotics",
        "tag.ai": "Artificial intelligence",
        "tag.embedded": "Embedded systems",
        "tag.vision": "Image analysis",
        "about.cta": "Get in touch",

        "projects.title": "My",
        "projects.accent": "projects",
        "projects.intro": "A selection of the projects I have worked on during my studies, from first year to today (from L1 to 4A).",
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
        "proj.link_subject": "Subject (PDF)",
        "proj.link_slides": "Slides (PDF)",
        "proj.link_annexe": "Annexe (PDF)",
        "proj.link_spec": "Specification Document (PDF)",
        "proj.link_tally": "Course choice (Tally)",
        "proj.link_user_guide": "User Guide (PDF)",
        "proj.link_thackavoir": "Competition (THackaVoir)",
        "proj.link_thackavoir_page": "Project page (THackaVoir)",
        "proj.prev": "Previous project",
        "proj.next": "Next project",

        // Textes par défaut des pages projets (utilisés tant que tu n'as pas écrit les tiens dans PROJECTS)
        "placeholder.context": "Describe the context of the project and what you were trying to achieve.",
        "placeholder.role": "Explain what you personally worked on: tasks, tools, team size.",
        "placeholder.results": "Summarise the results you obtained and what you learned.",
        "placeholder.image": "Image to add",
        "placeholder.tech": "Technology",
        "placeholder.tech_gdrive": "Google Drive",
        "placeholder.tech_gsheets": "Google Sheets",
        "placeholder.tech_github": "GitHub",
        "placeholder.tech_makefile": "Makefile",
        "placeholder.tech_arduino": "Arduino",
        "placeholder.tech_raspberry": "Raspberry",
        "placeholder.tech_c": "C",
        "placeholder.tech_java": "JAVA",
        "placeholder.tech_json": "JSON",
        "placeholder.tech_python": "Python",
        "placeholder.tech_3dmodel": "3D Modeling",
        "placeholder.tech_uml": "UML"
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
        "about.p1": "Je suis étudiant ingénieur en robotique, curieux de tout ce qui se joue entre Intelligence Artificielle, systèmes embarqués et analyse d'images.",
        "about.p2": "Je suis particulièrement intéressé par le domaine spatial. Actuellement en quatrième année d'études, je suis à la recherche d'un stage pour une durée de quatre mois.",
        "about.focus": "Domaines d'intérêt",
        "tag.robotics": "Robotique",
        "tag.ai": "Intelligence artificielle",
        "tag.embedded": "Systèmes embarqués",
        "tag.vision": "Analyse d'images",
        "about.cta": "Me contacter",

        "projects.title": "Mes",
        "projects.accent": "projets",
        "projects.intro": "Une sélection des projets réalisés pendant mes études, de la première année à aujourd'hui (de la L1 à la 4A).",
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
        "proj.link_subject": "Sujet (PDF)",
        "proj.link_slides": "Présentation (PDF)",
        "proj.link_spec": "Dossier de Spécifications (PDF)",
        "proj.link_annexe": "Annexe (PDF)",
        "proj.link_tally": "Test Orientation (Tally)",
        "proj.link_user_guide": "Manuel d'Utilisation (PDF)",
        "proj.link_thackavoir": "Concours (THackaVoir)",
        "proj.link_thackavoir_page": "Page du projet (THackaVoir)",
        "proj.prev": "Projet précédent",
        "proj.next": "Projet suivant",

        "placeholder.context": "Décris le contexte du projet et ce que vous cherchiez à accomplir.",
        "placeholder.role": "Explique ce sur quoi tu as personnellement travaillé : tâches, outils, taille de l'équipe.",
        "placeholder.results": "Résume les résultats obtenus et ce que tu as appris.",
        "placeholder.image": "Image à ajouter",
        "placeholder.tech": "Technologie",
        "placeholder.tech_gdrive": "Google Drive",
        "placeholder.tech_gsheets": "Google Sheets",
        "placeholder.tech_github": "GitHub",
        "placeholder.tech_makefile": "Makefile",
        "placeholder.tech_arduino": "Arduino",
        "placeholder.tech_raspberry": "Raspberry",
        "placeholder.tech_c": "C",
        "placeholder.tech_java": "JAVA",
        "placeholder.tech_json": "JSON",
        "placeholder.tech_python": "Python",
        "placeholder.tech_3dmodel": "Modélisation 3D",
        "placeholder.tech_uml": "UML"
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
            title: "Pirate Game (JAVA)",
            desc: "Game project developed during the third year."
        },
        fr: {
            title: "Jeu des Pirates (JAVA)",
            desc: "Projet de jeu développé en troisième année."
        }
    },
    ija: {
        year: "L2",
        en: {
            title: "IJA - “Connected Speakers” Prototyping",
            desc: "Prototyping project around connected speakers, second year."
        },
        fr: {
            title: "IJA - Prototypage « Enceintes connectées »",
            desc: "Projet de deuxième année : prototype d'enceintes connectées pilotées par une télécommande, conçu pour aider de jeunes enfants déficients visuels à se repérer et à se déplacer à l'IJA de Toulouse.",

            context01: "Ce projet a été réalisé en deuxième année de CUPGE, dans le cadre de la 8e édition du concours ThacKaVoir (2025). Ce concours confie à des étudiants la fabrication de dispositifs imaginés par des enseignantes spécialisées de l'Institut des Jeunes Aveugles (IJA) de Toulouse pour leurs élèves. Notre groupe de quatre personnes a choisi le sujet « Enceintes connectées », porté par une instructrice de locomotion de l'IJA, qui était notre cliente.",
            context02: "Son besoin : aider de jeunes enfants ayant une déficience visuelle importante à se repérer et à se déplacer dans le service de la Petite Enfance. Des enceintes placées au-dessus des portes émettent un repère sonore (« Salle de jeu », « Salle de goûter »…), déclenché à distance avec une télécommande aux boutons faciles à distinguer. Le dispositif sert aussi à développer l'autonomie des enfants, qui peuvent rejoindre seuls un point d'intérêt, et à travailler la localisation spatiale et le pointage auditif en disposant les enceintes autour de l'enfant.",
            context03: "Le cahier des charges imposait notamment des enceintes mobiles et alimentées par batterie, un son facile à modifier, et une communication sans Wi-Fi, impossible à installer à l'IJA. Au-delà de la technique, le projet comprenait une vraie relation client : comprendre le besoin d'une personne qui connaît les enfants et leurs usages, reformuler le cahier des charges et lui présenter l'avancement.",

            role01: "Je me suis d'abord formé au FabLab à l'utilisation des imprimantes 3D et de la découpeuse laser. Lors du brainstorming, auquel nous avons tous participé, j'ai proposé des idées clés : le mode de communication (le Wi-Fi dans un premier temps) et un système aimanté pour déplacer facilement les enceintes d'un endroit à l'autre. Faute de temps, ce système n'a pas pu être développé.",
            role02: "J'ai ensuite modélisé la télécommande en 3D avec Tinkercad. Les boutons portent des formes en relief (carré, étoile, croix, cercle, triangle) disposées pour que deux formes voisines soient très différentes, comme le cercle à côté de l'étoile et de la croix, afin d'aider les enfants à les distinguer au toucher.",
            role03: "J'ai ensuite testé une première solution en Wi-Fi. J'ai installé et paramétré un Raspberry Pi 3, puis codé en Python un serveur Flask avec des routes pour lancer et arrêter un son sur une enceinte reliée en Bluetooth. J'ai aussi monté deux boutons sur une plaque de prototypage reliée au Raspberry et écrit un second programme pour les lire. Faire communiquer les deux programmes s'est révélé difficile. Comme le Wi-Fi n'était de toute façon pas utilisable à l'IJA, nous avons basculé sur une liaison radio.",
            role04: "Pour la version finale, j'ai réalisé les montages de trois blocs à partir de schémas trouvés en ligne : un émetteur pour la télécommande (carte Arduino Uno, émetteur radio, deux boutons) et deux récepteurs pour les enceintes (Arduino Uno, récepteur radio, lecteur MP3 relié à une enceinte). Enfin, j'ai appris la soudure à l'étain pour obtenir une télécommande plus compacte, avec moins de fils apparents.",

            results01: "Le prototype final comprend une télécommande à deux boutons et deux enceintes. Un appui sur le premier bouton fait jouer « Salle de jeu » sur la première enceinte, un appui sur le second fait jouer « Salle de goûter » sur la deuxième.",
            results02: "Le 27 mai 2025, nous l'avons présenté à l'IJA devant un public mixte de 50 à 70 personnes : personnes déficientes visuelles, accompagnants, encadrants. Nous avons ensuite tenu un stand où chacun pouvait essayer les prototypes des différents groupes. Notre projet a terminé 2e du concours, aux votes du public. En effet, le projet a été particulièrement apprécié des jeunes enfants. Le lendemain, nous l'avons présenté de nouveau à nos enseignants. Il y a donc eu deux présentations très différentes : l'une grand public, axée sur la vulgarisation et l'usage, l'autre technique, axée sur l'architecture et les choix de conception.",
            results03: "C'est la première fois que nous pouvions manipuler du matériel avec autant de liberté (Arduino, Raspberry Pi, modules radio, lecteur MP3, soudure). J'y ai appris à monter et tester un circuit, à lire des schémas, à chercher et adapter du code, à utiliser l'IA comme aide sans lui déléguer la compréhension, et à travailler pour une vraie cliente, ce qui impose d'écouter, de reformuler et de s'adapter aux contraintes du terrain. Ce projet m'a aussi aidé à confirmer mon orientation vers la filière SRI (systèmes robotiques) plutôt que STRI (réseaux informatiques). Il m'est resté une légère frustration de ne pas avoir pu le pousser plus loin."
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
            desc: "Projet de deuxième année : application en C, utilisable dans le terminal, qui simule une compagnie ferroviaire avec trois profils (administrateur, contrôleur, voyageur) : gestion des trajets, recherche d'itinéraires, réservations et comptes utilisateurs.",

            context01: "Ce projet a été réalisé en deuxième année de CUPGE (UPSSITECH, 2024-2025), en binôme et sous Linux. Le sujet, intitulé « THOMAS - a Train to HOMe And Stations », demandait de programmer en C la gestion d'une compagnie de chemin de fer : des trajets composés de gares, et des voyageurs qui réservent des places sur un ou plusieurs trajets à la suite. L'objectif était autant technique qu'organisationnel : apprendre à concevoir, programmer et documenter un projet à plusieurs en se répartissant les tâches.",
            context02: "Le programme propose trois modes d'utilisation, avec connexion par identifiant et mot de passe. L'administrateur gère les trajets (ajouter, modifier, supprimer un trajet ou ses gares) et les comptes (changer un mot de passe, supprimer un utilisateur). Le contrôleur vérifie les réservations d'un voyageur à partir de son identifiant et peut modifier son propre mot de passe. Le voyageur recherche un itinéraire entre deux gares, le réserve, consulte ses réservations et peut les annuler. Les mots de passe sont soumis à des règles de sécurité (longueur, majuscule, minuscule, chiffre, caractère spécial) et enregistrés chiffrés.",
            context03: "Le réseau simulé compte quatre trajets interconnectés, aller et retour, avec dix places par train. La recherche renvoie un trajet direct s'il existe, sinon jusqu'à deux itinéraires avec une correspondance, avec le temps de parcours de chaque étape.",

            role01: "Le début du projet s'est fait ensemble : réflexion sur l'architecture, choix des structures de données et premières fonctions. Nous nous sommes ensuite réparti le travail. J'ai réalisé tous les menus de l'application avec la bibliothèque ncurses : navigation au clavier avec les flèches, saisie des champs, messages de succès ou d'erreur, et enchaînement des écrans pour chacun des trois profils. Chaque menu est décrit par une structure qui regroupe un titre et une liste d'options, chacune associée à la fonction qu'elle déclenche. J'ai aussi écrit le Makefile qui compile le projet.",
            role02: "Mon binôme s'est occupé de produire une vraie documentation du code avec Doxygen. Nous avons présenté le projet à notre enseignant lors d'une soutenance orale avec démonstration, sans rapport écrit.",

            results01: "L'application est fonctionnelle de bout en bout : un voyageur peut créer un compte, se connecter, rechercher un itinéraire, le réserver, le consulter puis l'annuler, et le contrôleur peut vérifier ses réservations. Les places disponibles sont mises à jour à chaque réservation et annulation, et le programme refuse une réservation en double ou un train complet.",
            results02: "Le principal défi était de conserver les données entre deux exécutions. Nous avons enregistré les utilisateurs, leurs réservations et les trajets dans des fichiers JSON, que nous manipulons avec la bibliothèque cJSON : c'était la première fois que nous utilisions ce format. Nous avons aussi utilisé des piles, vues en cours un peu plus tôt dans le semestre, pour représenter les gares d'un trajet, y insérer ou supprimer une gare, et calculer le trajet retour en inversant les temps. C'était également notre deuxième utilisation de GitHub, avec une organisation plus fluide que sur le projet précédent.",
            results03: "Ce projet m'a appris à structurer une interface en terminal avec ncurses, à lire et écrire des données JSON en C, à utiliser des piles et des pointeurs de fonctions dans un vrai programme, et à me répartir le travail dans un binôme. Pistes d'amélioration : remplacer le chiffrement des mots de passe, qui est un simple décalage de caractères, par un vrai hachage, et gérer des correspondances à plus d'une étape."
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
            desc: "Projet de deuxième année : programme en C qui simule et trace la trajectoire d'un point à partir d'équations différentielles : attracteur de Lorenz, oscillateur de Van der Pol et oscillateur harmonique.",

            context01: "Projet de programmation en C réalisé en deuxième année de CUPGE (année 2024-2025), en binôme. Le sujet demandait de représenter la trajectoire d'un point à partir des équations qui définissent sa vitesse en fonction de sa position. Avec les équations de Lorenz, un système célèbre pour illustrer le chaos, on calcule pas à pas la position du point avec un petit incrément de temps dt, puis on affiche la courbe 3D avec Gnuplot. L'objectif de base était de tracer l'attracteur à partir de la position (1, 2, 3) avec σ = 10, ρ = 28 et β = 8/3. Nous avons ajouté plusieurs extensions : saisie des paramètres par l'utilisateur, choix entre trois systèmes dynamiques, et une structure commune aux systèmes (fonctions d'initialisation, de mise à jour et paramètres) pour pouvoir en ajouter facilement.",

            role01: "Nous avons travaillé ensemble sur presque tout le projet : conception du programme, écriture des fonctions de simulation et de la fonction principale, tests, puis rédaction du rapport. Nous avons aussi mis en place ensemble le dépôt GitHub et l'organisation des dossiers (sources, en-têtes, bibliothèques, exécutables, données de test et documentation).",
            role02: "J'ai écrit seul le Makefile, qui automatise la compilation des fichiers sources, la création des fichiers objets et la liaison de l'exécutable final. Il permet de recompiler tout le projet avec une seule commande, sans taper à la main chaque étape.",

            results01: "Le programme fonctionne pour les trois systèmes : il demande les paramètres à l'utilisateur, calcule la trajectoire, l'enregistre avec la position, les vitesses et la vitesse totale à chaque instant, et permet de tracer les courbes avec Gnuplot. Il vérifie les allocations mémoire et les choix de l'utilisateur, et libère la mémoire avant de quitter.",
            results02: "C'était notre première utilisation de GitHub, et cela a été notre principale source de difficulté. Il a fallu comprendre comment partager un dépôt, faire des commits réguliers, récupérer le travail de l'autre et éviter de se gêner en modifiant les mêmes fichiers. Cet apprentissage a été utile : Git est un outil quasi indispensable pour travailler à plusieurs sur du code.",
            results03: "Ce projet m'a aussi appris à coder en C, c'est-à-dire à découper un programme en modules plutôt que de tout mettre dans un seul fichier, à gérer la mémoire, à utiliser des pointeurs de fonctions pour traiter plusieurs systèmes de la même façon, et à automatiser la compilation avec Make."
        }
    },
    pro: {
        year: "L1",
        en: {
            title: "Professional Project",
            desc: "Professional project carried out during the first year."
        },
        fr: {
            title: "Projet Professionnel",
            desc: "Projet de première année : en tant que groupe de soutien numérique, nous avons fourni aux six autres groupes les outils dont ils avaient besoin (stockage partagé, quiz d'orientation, grille d'évaluation).",
            
            context01: "Réalisé en première année de classe préparatoire, le \"Projet Professionnel\" a pour but de comprendre le monde de l'ingénieur. L'objectif principal est de questionner le plus d'acteurs possibles autour de cette profession : ingénieurs (avec notamment l'organisation d'une table ronde), étudiants et ressources humaines. Commun à toute la promotion, soit environ 120 étudiants, nous étions répartis dans 7 groupes différents : Coordination, Événementiel, Support Transverse, Rencontres Ingénieurs, Rencontres Étudiants , Rencontres RH et Guides des Parcours.",
            context02: "Voici le travail de chaque équipe :",
            context03: "• Coordination : lien entre les groupes et les enseignants. Transmission des consignes, synthèses hebdomadaires de l'avancement, suivi des délais, aide à la résolution des conflits.",
            context04: "• Événementiel : organisation de la table ronde avec six ingénieurs de parcours différents (invitations, réponses, questions, logistique), préparation du point intermédiaire et du bilan final.",
            context05: "• Support Transverse : outils numériques pour les autres groupes. Drive partagé pour centraliser les documents, quiz d'orientation pour le Guide des Parcours et questionnaires d'auto-évaluation.",
            context06: "• Rencontres Ingénieurs : questionnaire commun, rencontres avec des ingénieurs de profils variés, comptes rendus partagés et restitution finale (parcours, quotidien, évolution de carrière, salaires, conseils).",
            context07: "• Rencontres Étudiants : création d'un questionnaire, interviews d'étudiants, analyse des résultats et comptes rendus.",
            context08: "• Rencontres RH : contact d'entreprises (33 contactées, 15 rencontrées), échanges avec des professionnels RH, puis restitution sur le recrutement, le dossier de candidature, l'entretien d'embauche et la formation.",
            context09: "• Guides des Parcours : mise à jour d'un guide en ligne des formations menant au métier d'ingénieur. Tri de plus de 200 formations et 8 concours, fiches « Domaines et Métiers », vidéos, podcasts, carte des formations et quiz d'orientation.",
            
            role01: "Le projet a débuté avec une réunion de présentation, suite à laquelle chaque étudiant à pu choisir un groupe. Ainsi, j'ai rejoint celui du Support Tranverse et je me suis porté volontaire pour en être le délégué principal.",
            role02: "Au début du projet, je me suis occupé de créer le dossier Drive nécessaire au partage des documents de l'ensemble de la promotion. Avec quelques de mes camarades, nous avons géré les accès : chaque groupe pouvait modifier son dossier mais pas celui des autres équipes. Difficulté : l'utilisation de l'adresse mail universitaire était obligatoire sauf que certains avaient du mal à créer un compte Google avec cette adresse-là. Nous avons donc conçu et partagé un tutoriel vidéo pour mieux les accompagner.",
            role03: "Le groupe \"Guides des Parcours\" avait besoin d'un questionnaire basé sur ce principe : on donne ses trois matières préférées et ça nous renvoie un domaine correspondant. J'ai donc conçu ce questionnaire grâce à l'outil en ligne Tally, qui propose une version gratuite satisfaite comparée à ses concurrents Surveymonkey et Typeform, également essayés.",
            role04: "Le travail qui nous a pris le plus de temps est la partie concernant l'évaluation. L'objectif visé était que notre équipe trouve un moyen efficace d'évaluer chaque personne. Ces évaluations, ensuite données à l'équipe enseignante, ont servi à poser les vraies notes. Par conséquent nous avons décidé de créer un Google Form pour chaque groupe, dans lequel chacun a pu noté sur cinq points et sur différents critères (Présence, Prise d'initiative, Implication, Esprit d'équipe...) ses camarades, de manière anonyme. L'enjeu était d'avoir des critères bienveillants pour que les étudiants soient le plus honnête possible, et pas donner une bonne note seulement aux \"copains\" par exemple. Ayant déjà acquis des connaissances en Excel, je me suis occupé de lier les Google Forms à des Google Sheets pour pouvoir éditer les feuilles de calculs : notes et moyenne de chaque étudiant, moyenne de chaque critère etc. De plus, en complément de ces évaluations, nous avons soumis à l'ensemble de la promotion des questionnaires de statisfaction concernant notamment le travail des autres groupes ou encore le ressenti global du projet.",
            role05: "En tant que délégué du groupe, j'étais en charge d'assurer le communication avec notre coordinateur et les enseignants. Cela s'est notamment manifesté par des échanges de mail, ainsi que des points de discussions en présentiel.",

            results01: "Les nombreux questionnaires ont mené à des résultats souvent concluants. Les étudiants ont été suffisamment volontaires vis-à-vis des évaluations de groupes, ce qui fait que chaque personne a pu avoir une note relativement objective par rapport aux critères. Cependant, nous pouvons aussi constater dans les statistiques que près de la moitié de la promotion n'a pas ressenti le besoin de faire appel à notre groupe. Cela s'explique notamment par le fait que certains n'ont pas besoin qu'on leur crée un fichier type Excel car ils ont déjà les compétences pour, ce qui fait que notre rôle au sein du projet a parfois été flou.",            
            results02: "D'un point de vue personnel, ce projet m'a notamment appris à travail en équipe, puisque le nombre de personnes impliquées était conséquent. Avec la fonction de délégué j'ai pu expérimenté des responsabilités intéressantes comme la prise de décisions. J'ai également pu perfectionner la pratique de certains outils comme Google Drive et Google Sheets grâce au travail d'ampleur qui a été mené."
        }
    }
};
