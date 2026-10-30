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
        "proj.link_bhealthcare": "BHealthCare's website",
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
        "placeholder.tech_uml": "UML",
        "placeholder.tech_research": "Research"
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
        "proj.link_bhealthcare": "Site de BHealthCare",
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
        "placeholder.tech_uml": "UML",
        "placeholder.tech_research": "Recherche"
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
            desc: "Fourth-year project: researching robotic solutions for blood sampling, with a state-of-the-art review as the deliverable.",

            context01: "A project spanning the whole fourth year (4A SRI). Our group of six works for the company BHealthCare, which develops, among other things, an autonomous blood-sampling robot (Heiva). In this project, called TER (Travaux d'Études et de Recherche, i.e. Study and Research Project), we must produce a state of the art on four themes related to Heiva: robotic techniques, imaging techniques, trajectory accuracy and the hardware to use. We will then be able to focus on a solution that we will try to bring to BHealthCare.",
            context02: "Ongoing project: content to come.",

            role01: "Ongoing project: content to come.",

            results01: "Ongoing project: content to come."
        },
        fr: {
            title: "Travaux d'Études et de Recherche (TER)",
            desc: "Projet de quatrième année : recherche de solutions robotiques pour le prélèvement sanguin, avec la production d'un état de l'art.",

            context01: "Projet couvrant toute la quatrième année (4A SRI). Notre groupe de six personnes travaille pour l'entreprise BHealthCare, qui développe notamment un robot autonome pour le prélèvement sanguin (Heiva). Dans ce projet du nom de TER, pour Travaux d'Études et de Recherche, nous devons produire un état de l'art sur quatre thèmes liés à Heiva : Techniques de robotiques, Techniques d'imagerie, Précision de la trajectoire et Matériel à utiliser. Nous pourrons ensuite se concentrer sur une solution que nous essairons d'apporter à BHealthCare.",
            context02: "Projet en cours : contenu à venir.",

            role01: "Projet en cours : contenu à venir.",

            results01: "Projet en cours : contenu à venir."
        }
    },
    pfr: {
        year: "3A",
        en: {
            title: "Fil Rouge Project (PFR)",
            desc: "Third-year project: designing a mobile robot controlled by text commands, voice commands or a web interface, able to map a room and find coloured balls. A first phase of simulation in C and Python, then a phase of building the real robot.",

            context01: "The Fil Rouge Project (PFR, a “common thread” project) is the integration project of the third year (3A SRI). It runs all year long and brings together the skills seen in class: C and Python programming, image processing, embedded systems, project management. There were five of us, from different academic backgrounds, supervised by a tutor who acted as client, adviser and assessor at once. It was up to us to book meetings with him, to regularly present our progress and to get our technical choices validated. The overall goal was to design a mobile robot that a user controls by voice or by text, and that can detect coloured objects in its environment. The project is split into two very different phases.",
            context02: "Phase 1 (PFR1, September to January): the simulation. The aim was to develop the robot's software building blocks without a robot, mainly in C on Linux, with a bit of Python. We began by writing a specification document: description of the features, diagrams, error handling, a provisional schedule in the form of a Gantt chart, and the allocation of tasks. The development had three blocks. The first turns a typed or spoken sentence (“move forward two metres then turn left”) into standardised commands. The words and languages come from JSON configuration files rather than from the code, and the program works in French, English and Spanish. The second is an image-processing module that detects and characterises objects (coloured balls) in supplied photos, without any dedicated library: we had to write the algorithms ourselves. The third is a Python simulation (turtle library) that moves the robot around a warehouse with walls, openings and balls.",
            context03: "Phase 2 (PFR2, February to May): the real robot. Each group received a crate of loose parts and had to assemble and validate a robot, then integrate the building blocks from phase 1 into it. We had to implement the control modes (manual, text, voice, automatic), mapping of the room with a LiDAR, ball detection with an onboard camera and obstacle detection, and set up the communications between the computer, the Raspberry Pi and the Arduino. We justified our architecture and assembly choices, then presented a report, an oral defence and a demonstration.",

            role01: "Phase 1 (simulation). The whole team took part in writing the specification document. In the allocation of tasks given in that document, with its Gantt chart, image processing was assigned to a pair: so we started on this module as two. At the end of the specification document, I created the project's Git repository. From the coding phase onwards, I also handled the exchanges with the tutor on behalf of the group: booking meetings and sending progress reports by email.",
            role02: "I then developed most of the image-processing module in C. It loads an image as colour matrices, then binarises it (background at 0, objects at 1). A labelling step then numbers each object (the first one as 1, the second as 2, and so on), so that they can be processed separately. For each object, the colour is determined by quantising each pixel and then computing a histogram from which the dominant colour is kept. The shape is determined by computing the circularity, which decides whether or not the object is a ball. Finally, the module computes more advanced characteristics: bounding box, centre and position of the object in the image. Every step produces log files so that the results can be checked. This module had its own Git branch, a first for me.",
            role03: "In the last weeks, I handled a large part of the integration: connecting image processing to the text and voice commands and to the Python simulation, with help from teammates for the missing functions. The idea was to bring everything together in a single main.c file. We then built the demonstration scenarios together and rehearsed until the validation.",
            role04: "Phase 2 (real robot). After a group phase of hardware testing, the work was split between two teams: one on the Raspberry Pi (server, camera, LiDAR, voice), the other on the Arduino (motors, sensors, Bluetooth). I tested the Arduino Mega board with the Arduino environment, and the LiDAR, of which I got a first visualisation with the Slamtec software. I also installed the Raspberry Pi's operating system on the SD card. Midway through the project, I started modelling 3D supports for the ultrasonic sensors, thanks to the FabLab training I had taken the year before, then handed this task over to a teammate.",
            role05: "I took part in designing the Python script `pilote_robot.py`, which links the Raspberry Pi to the Arduino: it reads the actions to perform, translates them into bytes and sends them over the USB serial port. This script was then extended by each member of the group to integrate their own part. I then took part in the experimentation phase: making the robot move a precise distance and rotate by a given angle, which required measuring, adjusting and finding calibration formulas, which I integrated into the code.",
            role06: "I also coded, with a teammate, the ball detection in `pilote_robot.py`, as a continuation of phase 1. The camera image is converted to HSV, a colour mask isolates the requested ball, then the program keeps the most circular contour. From its centre and radius, the robot estimates the ball's angle and distance, turns, and approaches it from a single photo. If no ball is visible, it spins on the spot to widen its field of view.",
            role07: "Our group also added a loudspeaker that works as a horn, an initiative that was well received and that was not required by the brief. It goes off when the robot approaches a wall, a moment before the robot stops to avoid the collision, and can also be used from the interface.",
            role08: "Finally, I took part in the tests and final adjustments, then in preparing the demonstration, and I stayed in touch with the tutor through regular progress reports. The other members worked in particular on the text and voice commands, the automatic mode, the web interface and the mapping.",

            results01: "Phase 1. The simulation works from end to end: the user writes or says a command, the C program standardises it in the three languages, and the simulation moves the robot around the warehouse. It can find a ball of a given colour and stops in front of walls instead of going through them. The main challenge was making C and Python coexist through shared files (commands, ball positions, JSON configuration).",
            results02: "This phase gave me three difficulties. The first concerned the data structures: we had planned three structures for the image, the shape and the object, but the Shape structure became more and more blurry. At the end of the phase, I merged Shape and Object, which removed two files. The second concerned locating a pixel: two coordinate systems were used at the same time, row-column as for a matrix and x-y for the calculations, which caused confusion. I chose to keep only the first. The third concerned Git: when merging my image branch into the main branch, I ran into my first merge conflicts. I was a little lost at first, but I learned how to resolve them.",
            results03: "Phase 2. The final robot can be controlled in four ways: by keyboard, by voice (in three languages), with a digital joystick on a web interface, or automatically. In automatic mode, the robot moves forward and turns as soon as its ultrasonic sensors detect an obstacle. It finds coloured balls on request (“find the blue ball”). The LiDAR produces a 2D map of the room. The architecture separates a Raspberry Pi, which handles processing and communication, from an Arduino, which handles real time, the motors and the sensors.",
            results04: "The goal for the LiDAR was more ambitious: to work in real time and reuse its data for other tasks, such as localisation or navigation. We were not able to implement it. The LiDAR is therefore only used to produce the map of the room at a given moment, saved as an image displayed in the interface.",
            results05: "Tests in real conditions revealed several limits: noisy ultrasonic sensors with false alarms, colour thresholds to be tuned according to the light, movement calibration that differs depending on the floor, a faulty battery during demonstrations, and network latency. A defective Arduino board and a defective camera had to be replaced.",
            results06: "What I take away from it. Phase 2 confronted me with the difference between a solution that works in simulation and behaviour that is reliable on a real robot. I only had a theoretical background in hardware and had to learn everything on the job. The many real tests led me to adopt a more rigorous method: measure, adjust, redo. I also went through a formative disappointment: the image module from phase 1, developed over dozens of hours, could not be reused. It was poorly suited to real conditions and was replaced by a few lines of OpenCV. I take away from it the importance of knowing the existing, optimised libraries rather than reprogramming everything. Finally, this is the project that taught me the most about teamwork and working with a client: specifications, schedule, allocation of roles, progress reports, integration of separately written modules and using Git as a team of five.",

            cap01: "The box of hardware provided at the start of phase 2",
            cap02: "Result of the LiDAR mapping",
            cap03: "Hardware architecture of the robot",
            cap04: "Manual control via the EduConnect app"
        },
        fr: {
            title: "Projet Fil Rouge (PFR)",
            desc: "Projet de troisième année : conception d'un robot mobile piloté par commande textuelle, vocale ou par une interface web, capable de cartographier une pièce et de retrouver des balles colorées. Une première phase de simulation en C et Python, puis une phase de construction réelle du robot.",

            context01: "Le Projet Fil Rouge (PFR) est le projet d'intégration de la 3A SRI. Il dure toute l'année et rassemble les compétences vues dans les cours : programmation en C, Python, traitement d'image, systèmes embarqués, gestion de projet. Nous étions cinq, issus de cursus différents, encadrés par un tuteur qui jouait à la fois le rôle de client, de conseiller et d'évaluateur. C'était à nous de prendre rendez-vous avec lui, de lui présenter régulièrement l'avancement et de faire valider nos choix techniques. L'objectif global était de concevoir un robot mobile qu'un utilisateur pilote par la voix ou par le texte, et capable de détecter des objets colorés dans son environnement. Le projet est découpé en deux phases très différentes.",
            context02: "Phase 1 (PFR1, septembre à janvier) : la simulation. Il s'agissait de développer les briques logicielles du robot sans robot, essentiellement en C sous Linux, avec un peu de Python. Nous avons commencé par rédiger un dossier de spécifications : description des fonctionnalités, diagrammes, gestion des erreurs, planning prévisionnel sous forme de diagramme de Gantt et répartition des tâches. Le développement comprenait trois blocs. Le premier transforme une phrase tapée ou dite (« avance de deux mètres puis tourne à gauche ») en commandes normalisées. Les mots et les langues viennent de fichiers de configuration JSON et non du code, et le programme fonctionne en français, en anglais et en espagnol. Le deuxième est un module de traitement d'image qui détecte et caractérise des objets (balles de couleur) dans des photos fournies, sans bibliothèque dédiée : nous devions écrire nous-mêmes les algorithmes. Le troisième est une simulation en Python (bibliothèque turtle) qui déplace le robot dans un entrepôt avec des murs, des ouvertures et des balles.",
            context03: "Phase 2 (PFR2, février à mai) : le robot réel. Chaque groupe a reçu une caisse de pièces détachées et devait assembler et valider un robot, puis y intégrer les briques de la phase 1. Il fallait réaliser les modes de pilotage (manuel, textuel, vocal, automatique), la cartographie de la pièce avec un LiDAR, la détection de balles avec une caméra embarquée, la détection d'obstacles, et mettre en place les communications entre l'ordinateur, la Raspberry Pi et l'Arduino. Nous avons justifié nos choix d'architecture et de montage, puis présenté un rapport, une soutenance et une démonstration.",

            role01: "Phase 1 (simulation). Toute l'équipe a participé à la rédaction du dossier de spécifications. Dans la répartition des tâches inscrite dans ce dossier, avec son diagramme de Gantt, le traitement d'image était confié à un binôme : nous avons donc commencé à deux sur ce module. À la fin du dossier de spécifications, j'ai créé le dépôt Git du projet. À partir de la phase de code, j'ai aussi pris en charge les échanges avec le tuteur au nom du groupe : prise de rendez-vous et envoi de comptes rendus par mail.",
            role02: "J'ai ensuite développé la plus grande partie du module de traitement d'image en C. Il charge une image sous forme de matrices de couleurs, puis la binarise (fond à 0, objets à 1). Une étape de labellisation numérote ensuite chaque objet (le premier à 1, le deuxième à 2, etc.), ce qui permet de les traiter séparément. Pour chaque objet, la couleur est déterminée par une quantification de chaque pixel, puis par le calcul d'un histogramme dont on retient la couleur dominante. La forme est déterminée par le calcul de la circularité, qui permet de décider si l'objet est une balle ou non. Le module calcule enfin des caractéristiques plus avancées : boîte englobante, centre et position de l'objet dans l'image. Chaque étape produit des fichiers de log pour pouvoir vérifier les résultats. Ce module a eu sa propre branche Git, une première pour moi.",
            role03: "Dans les dernières semaines, j'ai assuré une grande partie de l'intégration : connecter le traitement d'image aux commandes textuelles et vocales, et à la simulation Python, avec l'aide de coéquipiers pour les fonctions qui manquaient. L'idée était donc de tout regrouper dans un fichier main.c. Nous avons ensuite construit ensemble les scénarios de démonstration et répété jusqu'à la validation.",
            role04: "Phase 2 (robot réel). Après une phase de test du matériel en groupe, le travail s'est réparti en deux équipes : l'une sur la Raspberry Pi (serveur, caméra, LiDAR, voix), l'autre sur l'Arduino (moteurs, capteurs, Bluetooth). J'ai testé la carte Arduino Mega avec l'environnement Arduino et le LiDAR, dont j'ai obtenu une première visualisation avec le logiciel Slamtec. J'ai aussi installé le système d'exploitation de la Raspberry Pi sur la carte SD. À mi-projet, j'ai commencé à modéliser en 3D des supports pour les capteurs à ultrasons, grâce à la formation au FabLab suivie l'année précédente, puis j'ai confié cette tâche à un coéquipier.",
            role05: "J'ai participé à la conception du script Python `pilote_robot.py`, qui fait le lien entre la Raspberry Pi et l'Arduino : il lit les actions à exécuter, les traduit en octets et les envoie par le port série USB. Ce script a ensuite été enrichi par chaque membre du groupe pour y intégrer sa partie. J'ai ensuite pris part à la phase d'expérimentation : faire avancer le robot d'une distance précise et le faire pivoter d'un angle donné, ce qui a demandé de mesurer, d'ajuster et de trouver des formules de calibration, que j'ai intégrées au code.",
            role06: "J'ai aussi codé, avec un coéquipier, la détection de balles dans `pilote_robot.py`, dans la continuité de la phase 1. L'image de la caméra est convertie en HSV, un masque de couleur isole la balle demandée, puis le programme garde le contour le plus circulaire. À partir de son centre et de son rayon, le robot estime l'angle et la distance de la balle, pivote, et s'en approche à partir d'une seule photo. Si aucune balle n'est visible, il tourne sur lui-même pour élargir son champ de vision.",
            role07: "Notre groupe a également ajouté un haut-parleur qui fait office de klaxon, une initiative appréciée qui n'était pas demandée par le sujet. Il se déclenche à l'approche d'un mur, un instant avant que le robot s'arrête pour éviter la collision, et peut aussi être utilisé depuis l'interface.",
            role08: "Enfin, j'ai participé aux tests et aux ajustements finaux, puis à la préparation de la démonstration, et je suis resté en contact avec le tuteur par des comptes rendus réguliers. Les autres membres ont notamment travaillé sur les commandes textuelle et vocale, le mode automatique, l'interface web et la cartographie",

            results01: "Phase 1. La simulation fonctionne de bout en bout : l'utilisateur écrit ou dit une commande, le programme C la normalise dans les trois langues, et la simulation déplace le robot dans l'entrepôt. Il peut trouver une balle d'une couleur donnée et s'arrête devant les murs au lieu de les traverser. Le principal défi était de faire cohabiter le C et le Python à travers des fichiers partagés (commandes, position des balles, configuration JSON).",
            results02: "Cette phase m'a posé trois difficultés. La première concernait les structures de données : nous avions prévu trois structures pour l'image, la forme et l'objet, mais la structure Forme est devenue de plus en plus floue. À la fin de la phase, j'ai fusionné Forme et Objet, ce qui a supprimé deux fichiers. La deuxième concernait le repérage d'un pixel : deux systèmes de coordonnées étaient utilisés en même temps, ligne-colonne comme pour une matrice et x-y pour les calculs, ce qui provoquait des confusions. J'ai choisi de ne garder que le premier. La troisième concernait Git : en fusionnant ma branche image dans la branche principale, j'ai eu mes premiers conflits de fusion. J'ai été un peu perdu au début, mais j'ai appris à les résoudre.",
            results03: "Phase 2. Le robot final se pilote de quatre manières : au clavier, à la voix (en trois langues), avec un joystick numérique sur une interface web, ou automatiquement. En mode automatique, le robot avance et tourne dès que ses capteurs à ultrasons détectent un obstacle. Il retrouve des balles de couleur à la demande (« trouve la balle bleue »). Le LiDAR produit une carte 2D de la pièce. L'architecture sépare une Raspberry Pi, qui gère le traitement et la communication, d'un Arduino, qui gère le temps réel, les moteurs et les capteurs.",
            results04: "L'objectif pour le LiDAR était plus ambitieux : travailler en temps réel et réutiliser ses données pour d'autres tâches, comme la localisation ou la navigation. Nous n'avons pas pu l'implémenter. Le LiDAR sert donc seulement à produire la carte de la pièce à un instant donné, enregistrée dans une image affichée dans l'interface.",
            results05: "Les tests en conditions réelles ont mis en évidence plusieurs limites : capteurs à ultrasons bruyants avec de fausses alertes, seuils de couleur à régler selon la lumière, calibration des déplacements différente selon le sol, batterie défaillante pendant des démonstrations, et latence du réseau. Une carte Arduino et une caméra défectueuses ont dû être remplacées.",
            results06: "Ce que j'en retiens. La phase 2 m'a confronté à la différence entre une solution qui marche en simulation et un comportement fiable sur un vrai robot. Je n'avais qu'un bagage théorique du matériel et j'ai dû tout apprendre sur le tas. Les nombreux tests réels m'ont fait adopter une méthode plus rigoureuse : mesurer, ajuster, refaire. J'ai aussi vécu une déception formatrice : le module d'image de la phase 1, développé pendant des dizaines d'heures, n'a pas pu être réutilisé. Il était peu adapté aux conditions réelles et a été remplacé par quelques lignes d'OpenCV. J'en retiens l'importance de connaître les bibliothèques existantes et optimisées plutôt que de tout reprogrammer. Enfin, c'est le projet qui m'a le plus appris sur le travail en équipe et la relation avec un client : cahier des charges, planning, répartition des rôles, comptes rendus, intégration de modules écrits séparément et utilisation de Git à cinq.",

            cap01: "Boîte du matériel fournie au début de la phase 2",
            cap02: "Résultat de la cartographie LiDAR",
            cap03: "Architecture matérielle du robot",
            cap04: "Pilotage manuel via l'application EduConnect"
        }
    },
    pirates: {
        year: "3A",
        en: {
            title: "Pirate Game (JAVA)",
            desc: "Third-year project: a board game in Java, played in the console: dice rolls, moving along a 30-square board and special squares with various effects. The project is documented with UML diagrams.",

            context01: "This project was carried out in the third year, as part of the object-oriented programming course, individually. It involved programming a board game in Java, “The Pirates”, and documenting it with UML diagrams. Two pirates, Jack Le Borgne and Bill Jambe de Bois, face each other: each starts on square 1 with 5 life points, rolls the dice in turn and moves along the board. The game ends when a player reaches the last square, or when the other has no life points left.",
            context02: "The brief asked us to invent our own special squares: each student therefore ended up with a slightly different game. The aim was to put the principles of object-oriented programming into practice (classes, inheritance, abstraction, polymorphism, interfaces) and to learn to model them with UML before and after the code.",

            role01: "I carried out the whole project on my own: design, code, tests and documentation.",
            role02: "I came up with three special squares, in addition to the normal squares with no effect. The Russian Roulette square teleports the player to a random square on the board. The Life Steal square lets the player steal one life point from their opponent. The Swap square triggers a coin toss: on “Heads”, the two players swap positions; on “Tails”, they swap life points. The board has 30 squares, and a player who goes past the last square turns back by the number of excess squares.",
            role03: "On the code side, I organised the program into several packages: a game package (Jeu, Plateau, Joueur, De, Couleur), a squares package and a display package. All the squares inherit from an abstract class Case that requires a method `declencherAction`. The running of the game therefore does not need to know the type of the square: it simply calls the same method, and each square reacts in its own way (polymorphism). Adding a new square amounts to creating a new class, without changing the rest of the logic. The display is isolated in its own class, defined by an interface, which separates the rules of the game from what the player sees.",
            role04: "I then produced four UML diagrams: the class diagram, a system sequence diagram on a player's move, and two detailed sequence diagrams for the Russian Roulette and Life Steal squares. The code is published on GitHub.",

            results01: "The game works from end to end: you start a game, each turn is displayed in the console (dice result, square reached, life points, action triggered) and the game ends with the announcement of the winner, as the screenshots of a run show.",
            results02: "This project taught me to go from a brief to an architecture before writing the code, to read and draw UML diagrams, to use inheritance and polymorphism to make a program extensible, and to separate logic from display. I also saw the value of splitting code into small classes that each have a single responsibility.",
            results03: "Several improvements are possible: adding new types of squares, allowing more than two players, creating a graphical interface in place of the console...",

            cap01: "Example of the start of a game in the console",
            cap02: "Example of the end of a game in the console"
        },
        fr: {
            title: "Jeu des Pirates (JAVA)",
            desc: "Projet de troisième année : jeu de plateau en Java, joué dans la console : lancer de dés, déplacement sur un plateau de 30 cases et cases spéciales aux effets variés. Projet documenté par des diagrammes UML.",

            context01: "Ce projet a été réalisé en troisième année, dans le cadre du cours de programmation orientée objet, de manière individuelle. Il s'agissait de programmer en Java un jeu de plateau, « Les Pirates », et de le documenter par des diagrammes UML. Deux pirates, Jack Le Borgne et Bill Jambe de Bois, s'affrontent : chacun commence sur la case 1 avec 5 points de vie, lance les dés à tour de rôle et avance sur le plateau. La partie se termine quand un joueur atteint la dernière case, ou quand l'autre n'a plus de points de vie.",
            context02: "Le sujet nous demandait d'inventer nos propres cases spéciales : chaque étudiant a donc obtenu un jeu légèrement différent. L'objectif était de mettre en pratique les principes de la programmation orientée objet (classes, héritage, abstraction, polymorphisme, interface) et d'apprendre à les modéliser avant et après le code avec UML.",

            role01: "J'ai réalisé seul l'ensemble du projet : conception, code, tests et documentation.",
            role02: "J'ai imaginé trois cases spéciales, en plus des cases normales sans effet. La case Roulette russe téléporte le joueur sur une case aléatoire du plateau. La case Vol de vie permet au joueur de voler un point de vie à son adversaire. La case Échange déclenche un lancer de pièce : sur « Pile », les deux joueurs échangent leur position, sur « Face », ils échangent leurs points de vie. Le plateau compte 30 cases, et le joueur qui dépasse la dernière case rebrousse chemin du nombre de cases en trop.",
            role03: "Côté code, j'ai organisé le programme en plusieurs paquets : un paquet de jeu (Jeu, Plateau, Joueur, De, Couleur), un paquet de cases et un paquet d'affichage. Toutes les cases héritent d'une classe abstraite Case qui impose une méthode `declencherAction`. Le déroulement de la partie n'a donc pas besoin de connaître le type de la case : il appelle simplement la même méthode, et chaque case réagit à sa façon (polymorphisme). Ajouter une nouvelle case revient à créer une nouvelle classe, sans modifier le reste de la logique. L'affichage est isolé dans sa propre classe, définie par une interface, ce qui sépare les règles du jeu de ce que voit le joueur.",
            role04: "J'ai ensuite produit quatre diagrammes UML : le diagramme de classes, un diagramme de séquence système sur le déplacement d'un joueur, et deux diagrammes de séquence détaillés pour les cases Roulette russe et Vol de vie. Le code est publié sur GitHub.",

            results01: "Le jeu fonctionne de bout en bout : on lance une partie, chaque tour est affiché dans la console (résultat des dés, case atteinte, point de vie, action déclenchée) et la partie se termine par l'annonce du vainqueur, comme le montrent les captures d'exécution.",
            results02: "Ce projet m'a appris à passer d'un énoncé à une architecture avant d'écrire le code, à lire et dessiner des diagrammes UML, à utiliser l'héritage et le polymorphisme pour rendre un programme extensible, et à séparer logique et affichage. J'ai aussi vu l'intérêt de découper en petites classes ayant chacune une seule responsabilité.",
            results03: "Plusieurs pistes d'amélioration sont envisageables : ajouter de nouveaux types de cases, permettre plus de deux joueurs, créer une interface graphique à la place de la console...",

            cap01: "Illustration d'un début de partie dans la console",
            cap02: "Illustration d'une fin de partie dans la console"
        }
    },
    ija: {
        year: "L2",
        en: {
            title: "IJA - “Connected Speakers” Prototyping",
            desc: "Second-year project: a prototype of connected speakers controlled by a remote control, designed to help young visually impaired children find their bearings and move around at the IJA in Toulouse.",

            context01: "This project was carried out in the second year of CUPGE (the preparatory cycle), as part of the 8th edition of the ThacKaVoir competition (2025). The competition entrusts students with building devices imagined by specialised teachers of the Institut des Jeunes Aveugles (IJA, an institute for blind young people) in Toulouse for their pupils. Our group of four chose the “Connected Speakers” topic, put forward by a locomotion instructor at the IJA, who was our client.",
            context02: "Her need: to help young children with a severe visual impairment find their bearings and move around the Early Childhood unit. Speakers placed above the doors play a sound cue (“Playroom”, “Snack room”…), triggered remotely with a remote control whose buttons are easy to tell apart. The device also serves to develop the children's autonomy, as they can reach a point of interest on their own, and to work on spatial localisation and auditory pointing by placing the speakers around the child.",
            context03: "The specifications notably required mobile, battery-powered speakers, a sound that is easy to change, and communication without Wi-Fi, which is impossible to install at the IJA. Beyond the technical side, the project involved real client relations: understanding the need of a person who knows the children and how they use things, reformulating the specifications and presenting our progress to her.",

            role01: "I first trained at the FabLab to use the 3D printers and the laser cutter. During the brainstorming, in which we all took part, I proposed key ideas: the means of communication (Wi-Fi at first) and a magnetic system to easily move the speakers from one place to another. For lack of time, this system could not be developed.",
            role02: "I then modelled the remote control in 3D with Tinkercad. The buttons have raised shapes (square, star, cross, circle, triangle) arranged so that two neighbouring shapes are very different, like the circle next to the star and the cross, to help the children tell them apart by touch.",
            role03: "I then tested a first solution using Wi-Fi. I installed and configured a Raspberry Pi 3, then coded in Python a Flask server with routes to start and stop a sound on a speaker connected via Bluetooth. I also wired two buttons onto a prototyping board connected to the Raspberry Pi and wrote a second program to read them. Getting the two programs to communicate proved difficult. As Wi-Fi could not be used at the IJA anyway, we switched to a radio link.",
            role04: "For the final version, I built the assemblies for three blocks from diagrams found online: a transmitter for the remote control (Arduino Uno board, radio transmitter, two buttons) and two receivers for the speakers (Arduino Uno, radio receiver, MP3 player connected to a speaker). Finally, I learned tin soldering to obtain a more compact remote control, with fewer visible wires.",

            results01: "The final prototype consists of a remote control with two buttons and two speakers. Pressing the first button plays “Playroom” on the first speaker; pressing the second plays “Snack room” on the second.",
            results02: "On 27 May 2025, we presented it at the IJA to a mixed audience of 50 to 70 people: visually impaired people, companions and supervisors. We then held a stand where everyone could try out the prototypes of the different groups. Our project finished 2nd in the competition, in the audience vote. Indeed, the project was particularly appreciated by the young children. The next day, we presented it again to our teachers. There were therefore two very different presentations: one for the general public, focused on popularisation and use, the other technical, focused on the architecture and design choices.",
            results03: "It was the first time we could handle hardware with so much freedom (Arduino, Raspberry Pi, radio modules, MP3 player, soldering). I learned to build and test a circuit, to read diagrams, to look for and adapt code, to use AI as an aid without delegating my understanding to it, and to work for a real client, which requires listening, reformulating and adapting to the constraints of the field. This project also helped me confirm my choice of the SRI track (robotic systems) rather than STRI (computer networks). A slight frustration remained at not having been able to take it further.",

            cap01: "Sketch: layout of the speakers for working on localisation and auditory pointing",
            cap02: "Sketch: the Early Childhood corridor (IJA)",
            cap03: "3D model of the remote control"
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
            results03: "C'est la première fois que nous pouvions manipuler du matériel avec autant de liberté (Arduino, Raspberry Pi, modules radio, lecteur MP3, soudure). J'y ai appris à monter et tester un circuit, à lire des schémas, à chercher et adapter du code, à utiliser l'IA comme aide sans lui déléguer la compréhension, et à travailler pour une vraie cliente, ce qui impose d'écouter, de reformuler et de s'adapter aux contraintes du terrain. Ce projet m'a aussi aidé à confirmer mon orientation vers la filière SRI (systèmes robotiques) plutôt que STRI (réseaux informatiques). Il m'est resté une légère frustration de ne pas avoir pu le pousser plus loin.",

            cap01: "Croquis : disposition des enceintes pour le travail de localisation et de pointage auditif",
            cap02: "Croquis : couloir de la Petite Enfance (IJA)",
            cap03: "Modélisation 3D de la télécommande"
        }
    },
    trains: {
        year: "L2",
        en: {
            title: "Railway Traffic Management",
            desc: "Second-year project: a C application, usable in the terminal, that simulates a railway company with three profiles (administrator, ticket inspector, traveller): trip management, itinerary search, reservations and user accounts.",

            context01: "This project was carried out in the second year of CUPGE (UPSSITECH, 2024-2025), in pairs and on Linux. The brief, entitled “THOMAS - a Train to HOme And Stations”, asked us to program in C the management of a railway company: trips made up of stations, and travellers who book seats on one or several trips in a row. The goal was as much organisational as technical: learning to design, program and document a project as a team by sharing out the tasks.",
            context02: "The program offers three modes of use, with login by ID and password. The administrator manages the trips (adding, modifying, deleting a trip or its stations) and the accounts (changing a password, deleting a user). The ticket inspector checks a traveller's reservations from their ID and can change their own password. The traveller searches for an itinerary between two stations, books it, views their reservations and can cancel them. Passwords are subject to security rules (length, uppercase, lowercase, digit, special character) and are stored encrypted.",
            context03: "The simulated network has four interconnected trips, outbound and return, with ten seats per train. The search returns a direct trip if there is one, otherwise up to two itineraries with one connection, with the travel time of each leg.",

            role01: "The start of the project was done together: thinking about the architecture, choosing the data structures and writing the first functions. We then shared out the work. I built all the application's menus with the ncurses library: keyboard navigation with the arrow keys, field input, success or error messages, and the sequence of screens for each of the three profiles. Each menu is described by a structure that groups a title and a list of options, each associated with the function it triggers. I also wrote the Makefile that compiles the project.",
            role02: "My partner took care of producing real documentation of the code with Doxygen. We presented the project to our teacher in an oral defence with a demonstration, with no written report.",

            results01: "The application works from end to end: a traveller can create an account, log in, search for an itinerary, book it, view it and then cancel it, and the ticket inspector can check their reservations. The available seats are updated at each reservation and cancellation, and the program refuses a duplicate reservation or a full train.",
            results02: "The main challenge was keeping the data between two runs. We stored the users, their reservations and the trips in JSON files, which we handle with the cJSON library: it was the first time we used this format. We also used stacks, seen in class a little earlier in the semester, to represent the stations of a trip, to insert or delete a station, and to compute the return trip by reversing the times. It was also our second use of GitHub, with a smoother organisation than on the previous project.",
            results03: "This project taught me to structure a terminal interface with ncurses, to read and write JSON data in C, to use stacks and function pointers in a real program, and to share the work within a pair. Areas for improvement: replacing the password encryption, which is a simple character shift, with proper hashing, and handling connections with more than one change.",

            cap01: "Main menu",
            cap02: "Menu: log in",
            cap03: "Administrator menu",
            cap04: "Ticket inspector menu",
            cap05: "Traveller menu",
            cap06: "Menu: check a traveller",
            cap07: "Menu: search for a trip",
            cap08: "Menu: reservation",
            cap09: "Diagram showing how the menus are linked"
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
            results03: "Ce projet m'a appris à structurer une interface en terminal avec ncurses, à lire et écrire des données JSON en C, à utiliser des piles et des pointeurs de fonctions dans un vrai programme, et à me répartir le travail dans un binôme. Pistes d'amélioration : remplacer le chiffrement des mots de passe, qui est un simple décalage de caractères, par un vrai hachage, et gérer des correspondances à plus d'une étape.",

            cap01: "Menu principal",
            cap02: "Menu : se connecter",
            cap03: "Menu Administrateur",
            cap04: "Menu Contrôleur",
            cap05: "Menu Voyageur",
            cap06: "Menu : vérifier un voyageur",
            cap07: "Menu : rechercher un trajet",
            cap08: "Menu : réservation",
            cap09: "Schéma représentant l'ordonnancement des menus"
        }
    },
    lorenz: {
        year: "L2",
        en: {
            title: "Lorenz Attractor",
            desc: "Second-year project: a C program that simulates and plots the trajectory of a point from differential equations: the Lorenz attractor, the Van der Pol oscillator and the harmonic oscillator.",

            context01: "A C programming project carried out in the second year of CUPGE (2024-2025), in pairs. The brief asked us to represent the trajectory of a point from the equations that define its velocity as a function of its position. With the Lorenz equations, a famous system used to illustrate chaos, the position of the point is computed step by step with a small time increment dt, then the 3D curve is displayed with Gnuplot. The basic goal was to plot the attractor from the position (1, 2, 3) with σ = 10, ρ = 28 and β = 8/3. We added several extensions: user input of the parameters, a choice between three dynamical systems, and a structure common to the systems (initialisation functions, update functions and parameters) so that more can easily be added.",

            role01: "We worked together on almost the whole project: designing the program, writing the simulation functions and the main function, testing, then writing the report. We also set up the GitHub repository together, along with the organisation of the folders (sources, headers, libraries, executables, test data and documentation).",
            role02: "I wrote the Makefile on my own. It automates the compilation of the source files, the creation of the object files and the linking of the final executable. It allows the whole project to be rebuilt with a single command, without typing each step by hand.",

            results01: "The program works for the three systems: it asks the user for the parameters, computes the trajectory, saves it with the position, the velocities and the total speed at each instant, and allows the curves to be plotted with Gnuplot. It checks the memory allocations and the user's choices, and frees the memory before exiting.",
            results02: "It was our first use of GitHub, and it was our main source of difficulty. We had to understand how to share a repository, make regular commits, retrieve the other's work and avoid getting in each other's way by editing the same files. This learning was useful: Git is an almost indispensable tool for working with others on code.",
            results03: "This project also taught me to code in C, that is, to split a program into modules rather than putting everything in a single file, to manage memory, to use function pointers to handle several systems in the same way, and to automate compilation with Make.",

            cap01: "Lorenz attractor (1/2)",
            cap02: "Lorenz attractor (2/2)",
            cap03: "Van der Pol oscillator",
            cap04: "Harmonic oscillator"
        },
        fr: {
            title: "Attracteur de Lorenz",
            desc: "Projet de deuxième année : programme en C qui simule et trace la trajectoire d'un point à partir d'équations différentielles : attracteur de Lorenz, oscillateur de Van der Pol et oscillateur harmonique.",

            context01: "Projet de programmation en C réalisé en deuxième année de CUPGE (année 2024-2025), en binôme. Le sujet demandait de représenter la trajectoire d'un point à partir des équations qui définissent sa vitesse en fonction de sa position. Avec les équations de Lorenz, un système célèbre pour illustrer le chaos, on calcule pas à pas la position du point avec un petit incrément de temps dt, puis on affiche la courbe 3D avec Gnuplot. L'objectif de base était de tracer l'attracteur à partir de la position (1, 2, 3) avec σ = 10, ρ = 28 et β = 8/3. Nous avons ajouté plusieurs extensions : saisie des paramètres par l'utilisateur, choix entre trois systèmes dynamiques, et une structure commune aux systèmes (fonctions d'initialisation, de mise à jour et paramètres) pour pouvoir en ajouter facilement.",

            role01: "Nous avons travaillé ensemble sur presque tout le projet : conception du programme, écriture des fonctions de simulation et de la fonction principale, tests, puis rédaction du rapport. Nous avons aussi mis en place ensemble le dépôt GitHub et l'organisation des dossiers (sources, en-têtes, bibliothèques, exécutables, données de test et documentation).",
            role02: "J'ai écrit seul le Makefile, qui automatise la compilation des fichiers sources, la création des fichiers objets et la liaison de l'exécutable final. Il permet de recompiler tout le projet avec une seule commande, sans taper à la main chaque étape.",

            results01: "Le programme fonctionne pour les trois systèmes : il demande les paramètres à l'utilisateur, calcule la trajectoire, l'enregistre avec la position, les vitesses et la vitesse totale à chaque instant, et permet de tracer les courbes avec Gnuplot. Il vérifie les allocations mémoire et les choix de l'utilisateur, et libère la mémoire avant de quitter.",
            results02: "C'était notre première utilisation de GitHub, et cela a été notre principale source de difficulté. Il a fallu comprendre comment partager un dépôt, faire des commits réguliers, récupérer le travail de l'autre et éviter de se gêner en modifiant les mêmes fichiers. Cet apprentissage a été utile : Git est un outil quasi indispensable pour travailler à plusieurs sur du code.",
            results03: "Ce projet m'a aussi appris à coder en C, c'est-à-dire à découper un programme en modules plutôt que de tout mettre dans un seul fichier, à gérer la mémoire, à utiliser des pointeurs de fonctions pour traiter plusieurs systèmes de la même façon, et à automatiser la compilation avec Make.",

            cap01: "Attracteur de Lorenz (1/2)",
            cap02: "Attracteur de Lorenz (2/2)",
            cap03: "Oscillateur de Van der Pol",
            cap04: "Oscillateur harmonique"
        }
    },
    pro: {
        year: "L1",
        en: {
            title: "Professional Project",
            desc: "First-year project: as a digital support group, we provided the six other groups with the tools they needed (shared storage, a guidance quiz, an assessment grid).",

            context01: "Carried out in the first year of preparatory classes, the “Professional Project” aims to understand the engineer's world. The main goal is to question as many people as possible around this profession: engineers (notably by organising a round table), students and human resources staff. Shared by the whole year group, about 120 students, we were split into 7 different groups: Coordination, Events, Cross-cutting Support, Engineer Meetings, Student Meetings, HR Meetings and Pathway Guides.",
            context02: "Here is the work of each team:",
            context03: "• Coordination: link between the groups and the teachers. Passing on instructions, weekly summaries of progress, monitoring deadlines, helping to resolve conflicts.",
            context04: "• Events: organising the round table with six engineers from different backgrounds (invitations, replies, questions, logistics), preparing the interim review and the final review.",
            context05: "• Cross-cutting Support: digital tools for the other groups. A shared Drive to centralise documents, a guidance quiz for the Pathway Guides and self-assessment questionnaires.",
            context06: "• Engineer Meetings: a common questionnaire, meetings with engineers of varied profiles, shared reports and a final presentation (career paths, daily life, career development, salaries, advice).",
            context07: "• Student Meetings: creating a questionnaire, interviewing students, analysing the results and writing reports.",
            context08: "• HR Meetings: contacting companies (33 contacted, 15 met), discussions with HR professionals, then a presentation on recruitment, the application file, the job interview and training.",
            context09: "• Pathway Guides: updating an online guide to the courses leading to the engineering profession. Sorting more than 200 courses and 8 competitive exams, “Fields and Careers” sheets, videos, podcasts, a map of courses and a guidance quiz.",

            role01: "The project started with a presentation meeting, after which each student could choose a group. I therefore joined the Cross-cutting Support group and volunteered to be its main representative.",
            role02: "At the start of the project, I took care of creating the Drive folder needed to share documents across the whole year group. With a few of my classmates, we managed the access rights: each group could edit its own folder but not those of the other teams. Difficulty: using the university email address was compulsory, but some people had trouble creating a Google account with that address. We therefore designed and shared a video tutorial to support them better.",
            role03: "The “Pathway Guides” group needed a questionnaire based on this principle: you give your three favourite subjects and it returns a matching field. I therefore designed this questionnaire with the online tool Tally, whose free version is satisfactory compared with its competitors SurveyMonkey and Typeform, which we also tried.",
            role04: "The work that took us the most time was the assessment part. The aim was for our team to find an effective way to assess each person. These assessments, later given to the teaching team, were used to set the actual grades. We therefore decided to create a Google Form for each group, in which everyone could rate their classmates out of five on different criteria (Attendance, Initiative, Involvement, Team spirit...), anonymously. The challenge was to have supportive criteria so that students would be as honest as possible, and not only give a good mark to their “friends”, for example. Having already acquired some knowledge of Excel, I took care of linking the Google Forms to Google Sheets so that the spreadsheets could be edited: each student's marks and average, the average of each criterion, etc. In addition to these assessments, we gave the whole year group satisfaction questionnaires about, among other things, the work of the other groups and the overall feeling about the project.",
            role05: "As the group's representative, I was in charge of communication with our coordinator and the teachers. This took the form of emails as well as face-to-face discussion points.",

            results01: "The many questionnaires led to results that were often conclusive. Students were willing enough to take part in the group assessments, so each person could get a relatively objective mark against the criteria. However, the statistics also show that nearly half of the year group did not feel the need to call on our group. This is partly explained by the fact that some people do not need us to create an Excel-type file for them because they already have the skills to do it, which means our role in the project was sometimes unclear.",
            results02: "On a personal level, this project taught me in particular to work in a team, since the number of people involved was considerable. With the representative role, I got to experience interesting responsibilities such as decision-making. I was also able to improve my use of tools such as Google Drive and Google Sheets thanks to the large-scale work that was carried out.",

            cap01: "Charts and results of questionnaires",
            cap02: "Illustration of the Tally questionnaire"
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
            results02: "D'un point de vue personnel, ce projet m'a notamment appris à travail en équipe, puisque le nombre de personnes impliquées était conséquent. Avec la fonction de délégué j'ai pu expérimenté des responsabilités intéressantes comme la prise de décisions. J'ai également pu perfectionner la pratique de certains outils comme Google Drive et Google Sheets grâce au travail d'ampleur qui a été mené.",

            cap01: "Graphes et résultats de questionnaires",
            cap02: "Illustration du questionnaire Tally"
        }
    }
};
