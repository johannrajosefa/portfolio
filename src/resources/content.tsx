import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

export type Language = "en" | "fr";

const person: Person = {
  firstName: "Johann",
  lastName: "Rajosefa",
  name: "Johann Rajosefa",
  role: "aspiring AI Engineer, Data Scientist, and Data Analyst",
  avatar: "/images/avatar.png",
  email: "johann.rajosefa@gmail.com",
  location: "America/Toronto",
  languages: ["English", "Français"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/johannrajosefa",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/johann-rajosefa/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

/* =========================================================
   HOME
========================================================= */

const home = {
  en: {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Building intelligent solutions with AI and data</>,

    featured: {
      display: true,
      title: (
        <Row gap="12" vertical="center">
          <Text
            marginRight="4"
            marginLeft="4"
            onBackground="brand-medium"
          >
            Featured work
          </Text>
        </Row>
      ),
      href: "/work/building-once-ui-a-customizable-design-system",
    },

    subline: (
      <>
        I'm {person.firstName}, an {person.role} who loves building software,
        exploring artificial intelligence, and learning new technologies.
        Whether I'm developing applications, experimenting with machine
        learning models, or analyzing data, I'm always looking for ways to
        create solutions that make a real impact.
      </>
    ),
  },

  fr: {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Accueil",
    title: `Portfolio de ${person.name}`,
    description: `Portfolio présentant le travail de ${person.name} en intelligence artificielle et en science des données`,
    headline: <>Créer des solutions intelligentes grâce à l'IA et aux données</>,

    featured: {
      display: true,
      title: (
        <Row gap="12" vertical="center">
          <Text
            marginRight="4"
            marginLeft="4"
            onBackground="brand-medium"
          >
            Projets à la une
          </Text>
        </Row>
      ),
      href: "/work/building-once-ui-a-customizable-design-system",
    },

    subline: (
      <>
        Je suis {person.firstName}, futur ingénieur en IA, scientifique des
        données et analyste de données. J'aime développer des logiciels,
        explorer l'intelligence artificielle et découvrir de nouvelles
        technologies. Que je développe des applications, expérimente avec des
        modèles de machine learning ou analyse des données, je cherche toujours
        à créer des solutions qui ont un réel impact.
      </>
    ),
  },
};

/* =========================================================
   ABOUT
========================================================= */

const about = {
  en: {
    path: "/about",
    label: "About",
    title: `About – ${person.name}`,
    description: `Meet ${person.name}, ${person.role}`,

    tableOfContent: {
      display: true,
      subItems: false,
    },

    avatar: {
      display: true,
    },

    calendar: {
      display: false,
      link: "https://cal.com",
    },

    intro: {
      display: true,
      title: "Introduction",
      description: (
        <>
          Technology has fascinated me since I was a child. I build my own
          computers, code almost every day because I genuinely enjoy it, and
          love transforming complex data into meaningful insights that help
          people make better decisions.
        </>
      ),
    },

    work: {
      display: true,
      title: "Work Experience",

      experiences: [
        {
          company: "AWE Digital Wellness",
          timeframe: "Sept 2025 - Present",
          role: "Junior AI Developer",

          achievements: [
            <>
              Evaluated and improved AI-generated responses from large language
              models (LLMs), providing structured feedback to enhance response
              quality, accuracy, consistency, and user experience.
            </>,

            <>
              Documented AI workflows, quality guidelines, testing procedures,
              and feature requirements using Confluence and Microsoft 365 to
              support the continuous improvement of AI-powered applications.
            </>,

            <>
              Collaborated with cross-functional teams through Jira to plan AI
              feature improvements, prioritize quality initiatives, and
              translate business requirements into actionable implementation
              plans.
            </>,

            <>
              Conducted quality assurance and validation of conversational AI
              outputs, identifying issues, tracking defects, and contributing
              recommendations to improve model performance and reliability.
            </>,

            <>
              Leveraged ChatGPT and prompt engineering techniques to support
              documentation, testing, workflow optimization, and rapid
              prototyping, improving software development efficiency.
            </>,
          ],
        },

        {
          company: "University of Ottawa",
          timeframe: "Aug 2025 – Sept 2025",
          role: "Student Card Distributor",

          achievements: [
            <>
              Provided bilingual front-line support to 100+ students daily by
              managing onboarding requests, verifying information, and resolving
              access issues.
            </>,

            <>
              Handled high-volume requests by prioritizing tasks and maintaining
              accurate records using Microsoft 365 and Excel to support smooth
              workflow operations.
            </>,

            <>
              Communicated technical procedures clearly in English and French to
              non-technical users, improving understanding and service
              experience.
            </>,

            <>
              Supported issue tracking, documentation, and service coordination
              while collaborating with team members during peak operational
              periods.
            </>,
          ],

          images: [],
        },

        {
          company: "La société Aranatha",
          timeframe: "Aug 2024 – Sept 2024",
          role: "iOS Development Intern",

          achievements: [
            <>
              Supported iOS application development and testing using Swift and
              Xcode by identifying defects, documenting findings, and improving
              software reliability and user experience.
            </>,

            <>
              Maintained technical documentation, testing records, and
              version-controlled code using Git to support knowledge sharing and
              future maintenance.
            </>,

            <>
              Collaborated with developers to understand requirements,
              troubleshoot issues, and contribute to smoother project
              coordination.
            </>,

            <>
              Worked with Firebase services while quickly learning new tools and
              development workflows to support product improvements.
            </>,
          ],

          images: [],
        },
      ],
    },

    studies: {
      display: true,
      title: "Education",

      institutions: [
        {
          name: "University of Ottawa",
          description: (
            <>
              Honours Bachelor of Science in Computer Science (with Data
              Science Option)
            </>
          ),
          timeframe: "",
        },
      ],
    },

    technical: {
      display: true,
      title: "Technical Skills",

      skills: [
        {
          title: "AI & MACHINE LEARNING",

          description: (
            <>
              Large Language Models (LLMs); Generative AI; Conversational AI;
              AI Response Evaluation; AI Output Quality Assessment; AI Model
              Feedback & Improvement; Prompt Evaluation; AI Workflow Analysis;
              Machine Learning Fundamentals; AI Product Testing; AI Performance
              Analysis
            </>
          ),

          tags: [],

          images: [],
        },

        {
          title: "QUALITY ASSURANCE & TESTING",

          description: (
            <>
              Quality Assurance (QA); Test Planning; Test Case Development;
              Functional Testing; Regression Testing; User Acceptance Testing
              (UAT); AI Application Testing; Data Validation; Defect
              Identification & Reporting; Quality Documentation; Test Result
              Analysis
            </>
          ),

          tags: [],

          images: [],
        },

        {
          title: "PROGRAMMING & DEVELOPMENT",

          description: (
            <>
              Python; JavaScript/TypeScript; SQL; Data Processing; Automation
              Concepts; Git; GitHub; API Testing; Software Development
              Lifecycle
            </>
          ),

          tags: [
            {
              name: "JavaScript",
              icon: "javascript",
            },
            {
              name: "Python",
              icon: "python",
            },
            {
              name: "TypeScript",
              icon: "typescript",
            },
            {
              name: "GitHub",
              icon: "github",
            },
          ],

          images: [],
        },

        {
          title: "AI TOOLS & TECHNOLOGIES",

          description: (
            <>
              ChatGPT; AI Coding Assistants; LLM-Based Applications; AI Agents
              (Analysis & Evaluation); LangChain (Familiarity); Hugging Face
              (Familiarity); AI Workflow Documentation
            </>
          ),

          tags: [],

          images: [],
        },

        {
          title: "DATA & ANALYTICS",

          description: (
            <>
              Data Analysis; Data Cleaning; Data Validation; Data
              Interpretation; Reporting; Dashboard Development; Performance
              Metrics Analysis; Data-Driven Insights
            </>
          ),

          tags: [],

          images: [],
        },

        {
          title: "DOCUMENTATION & COLLABORATION",

          description: (
            <>
              Technical Documentation; AI Feature Documentation; Requirements
              Analysis; Cross-Functional Collaboration; Stakeholder
              Communication; Agile Methodologies; Jira; Confluence; Team
              Collaboration
            </>
          ),

          tags: [],

          images: [],
        },

        {
          title: "CLOUD & DEVELOPMENT TOOLS",

          description: (
            <>
              AWS (Familiarity); Docker (Familiarity); GitHub Actions; CI/CD
              Concepts
            </>
          ),

          tags: [
            {
              name: "AWS",
              icon: "aws",
            },
            {
              name: "Docker",
              icon: "docker",
            },
          ],

          images: [],
        },

        {
          title: "CERTIFICATES",

          description: (
            <>
              <a href="https://www.freecodecamp.org/certification/fcc-51735c5d-edfb-41df-bfc0-adef27894891/data-analysis-with-python-v7">
                Data Analysis with Python
              </a>
              {" | "}
              <a href="https://learn.saylor.org/admin/tool/certificate/index.php?code=3137738589JR">
                Bitcoin for Developers I
              </a>
            </>
          ),

          tags: [],

          images: [
            {
              src: "/images/certificates/DataPython.png",
              alt: "Data Analysis with Python certificate",
              width: 12,
              height: 10,
            },
            {
              src: "/images/certificates/bitcoin.png",
              alt: "Bitcoin for Developers certificate",
              width: 12,
              height: 10,
            },
          ],
        },
      ],
    },
  },

  /* =========================================================
     FRENCH
  ========================================================= */

  fr: {
    path: "/about",
    label: "À propos",
    title: `À propos – ${person.name}`,
    description: `Découvrez ${person.name}, futur ingénieur en IA, scientifique des données et analyste de données`,

    tableOfContent: {
      display: true,
      subItems: false,
    },

    avatar: {
      display: true,
    },

    calendar: {
      display: false,
      link: "https://cal.com",
    },

    intro: {
      display: true,
      title: "Introduction",

      description: (
        <>
          La technologie me passionne depuis mon enfance. Je construis mes
          propres ordinateurs, je code presque tous les jours parce que j'aime
          réellement cela, et j'aime transformer des données complexes en
          informations pertinentes qui permettent de prendre de meilleures
          décisions.
        </>
      ),
    },

    work: {
      display: true,
      title: "Expérience professionnelle",

      experiences: [
        {
          company: "AWE Digital Wellness",
          timeframe: "Sept. 2025 - Présent",
          role: "Développeur junior en IA",

          achievements: [
            <>
              Évalué et amélioré les réponses générées par des modèles de
              langage de grande taille (LLM) en fournissant des retours
              structurés afin d'améliorer leur qualité, leur précision, leur
              cohérence et l'expérience utilisateur.
            </>,

            <>
              Documenté les flux de travail liés à l'IA, les lignes directrices
              de qualité, les procédures de test et les exigences fonctionnelles
              à l'aide de Confluence et Microsoft 365 afin de soutenir
              l'amélioration continue des applications utilisant l'IA.
            </>,

            <>
              Collaboré avec des équipes interfonctionnelles à l'aide de Jira
              pour planifier les améliorations des fonctionnalités d'IA,
              prioriser les initiatives de qualité et transformer les besoins
              d'affaires en plans d'action concrets.
            </>,

            <>
              Réalisé des activités d'assurance qualité et de validation des
              résultats d'IA conversationnelle, identifié les problèmes, suivi
              les défauts et formulé des recommandations pour améliorer les
              performances et la fiabilité des modèles.
            </>,

            <>
              Utilisé ChatGPT et des techniques de prompt engineering pour
              soutenir la documentation, les tests, l'optimisation des flux de
              travail et le prototypage rapide afin d'améliorer l'efficacité du
              développement logiciel.
            </>,
          ],
        },

        {
          company: "Université d'Ottawa",
          timeframe: "Août 2025 – Sept. 2025",
          role: "Distributeur de cartes étudiantes",

          achievements: [
            <>
              Assuré un soutien bilingue de première ligne auprès de plus de
              100 étudiants par jour en gérant les demandes d'intégration, en
              vérifiant les informations et en résolvant les problèmes d'accès.
            </>,

            <>
              Géré un volume important de demandes en priorisant les tâches et
              en maintenant des dossiers précis à l'aide de Microsoft 365 et
              Excel afin d'assurer un fonctionnement fluide des opérations.
            </>,

            <>
              Expliqué clairement les procédures techniques en anglais et en
              français à des utilisateurs non techniques afin d'améliorer leur
              compréhension et leur expérience du service.
            </>,

            <>
              Soutenu le suivi des problèmes, la documentation et la
              coordination des services tout en collaborant avec les membres de
              l'équipe durant les périodes de forte activité.
            </>,
          ],

          images: [],
        },

        {
          company: "La société Aranatha",
          timeframe: "Août 2024 – Sept. 2024",
          role: "Stagiaire en développement iOS",

          achievements: [
            <>
              Participé au développement et aux tests d'applications iOS avec
              Swift et Xcode en identifiant les défauts, en documentant les
              résultats et en améliorant la fiabilité des logiciels et
              l'expérience utilisateur.
            </>,

            <>
              Maintenu la documentation technique, les dossiers de tests et le
              code versionné avec Git afin de faciliter le partage des
              connaissances et la maintenance future.
            </>,

            <>
              Collaboré avec les développeurs pour comprendre les exigences,
              résoudre les problèmes et contribuer à une meilleure coordination
              des projets.
            </>,

            <>
              Travaillé avec les services Firebase tout en apprenant rapidement
              de nouveaux outils et flux de développement afin de soutenir
              l'amélioration des produits.
            </>,
          ],

          images: [],
        },
      ],
    },

    studies: {
      display: true,
      title: "Formation",

      institutions: [
        {
          name: "Université d'Ottawa",
          description: (
            <>
              Baccalauréat spécialisé en sciences informatiques avec option en
              science des données
            </>
          ),
          timeframe: "",
        },
      ],
    },

    technical: {
      display: true,
      title: "Compétences techniques",

      skills: [
        {
          title: "IA & APPRENTISSAGE AUTOMATIQUE",

          description: (
            <>
              Grands modèles de langage (LLM); IA générative; IA
              conversationnelle; Évaluation des réponses d'IA; Évaluation de la
              qualité des résultats d'IA; Amélioration des modèles d'IA;
              Évaluation des prompts; Analyse des flux de travail IA;
              Fondamentaux du machine learning; Tests d'applications IA;
              Analyse des performances des modèles
            </>
          ),

          tags: [],

          images: [],
        },

        {
          title: "ASSURANCE QUALITÉ & TESTS",

          description: (
            <>
              Assurance qualité (QA); Planification des tests; Création de cas
              de test; Tests fonctionnels; Tests de régression; Tests
              d'acceptation utilisateur (UAT); Tests d'applications IA;
              Validation des données; Identification et signalement des
              défauts; Documentation qualité; Analyse des résultats de tests
            </>
          ),

          tags: [],

          images: [],
        },

        {
          title: "PROGRAMMATION & DÉVELOPPEMENT",

          description: (
            <>
              Python; JavaScript/TypeScript; SQL; Traitement des données;
              Concepts d'automatisation; Git; GitHub; Tests d'API; Cycle de vie
              du développement logiciel
            </>
          ),

          tags: [
            {
              name: "JavaScript",
              icon: "javascript",
            },
            {
              name: "Python",
              icon: "python",
            },
            {
              name: "TypeScript",
              icon: "typescript",
            },
            {
              name: "GitHub",
              icon: "github",
            },
          ],

          images: [],
        },

        {
          title: "OUTILS & TECHNOLOGIES IA",

          description: (
            <>
              ChatGPT; Assistants de programmation IA; Applications basées sur
              les LLM; Agents IA (analyse et évaluation); LangChain (notions);
              Hugging Face (notions); Documentation des flux de travail IA
            </>
          ),

          tags: [],

          images: [],
        },

        {
          title: "DONNÉES & ANALYTIQUE",

          description: (
            <>
              Analyse de données; Nettoyage des données; Validation des données;
              Interprétation des données; Reporting; Création de tableaux de
              bord; Analyse des indicateurs de performance; Production
              d'informations basées sur les données
            </>
          ),

          tags: [],

          images: [],
        },

        {
          title: "DOCUMENTATION & COLLABORATION",

          description: (
            <>
              Documentation technique; Documentation des fonctionnalités IA;
              Analyse des exigences; Collaboration interfonctionnelle;
              Communication avec les parties prenantes; Méthodologies Agile;
              Jira; Confluence; Collaboration d'équipe
            </>
          ),

          tags: [],

          images: [],
        },

        {
          title: "CLOUD & OUTILS DE DÉVELOPPEMENT",

          description: (
            <>
              AWS (notions); Docker (notions); GitHub Actions; Concepts CI/CD
            </>
          ),

          tags: [
            {
              name: "AWS",
              icon: "aws",
            },
            {
              name: "Docker",
              icon: "docker",
            },
          ],

          images: [],
        },

        {
          title: "CERTIFICATS",

          description: (
            <>
              <a href="https://www.freecodecamp.org/certification/fcc-51735c5d-edfb-41df-bfc0-adef27894891/data-analysis-with-python-v7">
                Analyse de données avec Python
              </a>
              {" | "}
              <a href="https://learn.saylor.org/admin/tool/certificate/index.php?code=3137738589JR">
                Bitcoin pour développeurs I
              </a>
            </>
          ),

          tags: [],

          images: [
            {
              src: "/images/certificates/DataPython.png",
              alt: "Certificat Analyse de données avec Python",
              width: 12,
              height: 10,
            },
            {
              src: "/images/certificates/bitcoin.png",
              alt: "Certificat Bitcoin pour développeurs",
              width: 12,
              height: 10,
            },
          ],
        },
      ],
    },
  },
};

/* =========================================================
   BLOG
========================================================= */

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

/* =========================================================
   WORK
========================================================= */

const work: Work = {
  path: "/work",
  label: "Work",
  title: "My personal projects",
  description: `Design and dev projects by ${person.name}`,
};

/* =========================================================
   GALLERY
========================================================= */

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,

  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
};