import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Johann",
  lastName: "Rajosefa",
  name: `Johann Rajosefa`,
  role: "aspiring AI Engineer, Data Scientist, and Data Analyst ",
  avatar: "/images/avatar.png",
  email: "johann.rajosefa@gmail.com",
  location: "Canada/Eastern", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Français"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
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

const home: Home = {
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
        <Text marginRight="4" marginLeft="4" onBackground="brand-medium">
        Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, an {person.role}
      who loves building software, exploring artificial intelligence, and learning new technologies. Whether I'm developing applications, experimenting with machine learning models, or analyzing data, I'm always looking for ways to create solutions that make a real impact.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
        Technology has fascinated me since I was a child. I build my own computers, 
        code almost every day because I genuinely enjoy it, 
        and love transforming complex data into meaningful insights that help people
        make better decisions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "AWE Digital Wellness 	",
        timeframe: "Sept 2025 - Present",
        role: "Junior AI Developer",
        achievements: [
          <>
            Evaluated and improved AI-generated responses from large language models (LLMs),
            providing structured feedback to enhance response quality, accuracy, consistency, 
            and user experience.
          </>,
          <>
            Documented AI workflows, quality guidelines, testing procedures, 
            and feature requirements using Confluence and Microsoft 365 to support the 
            continuous improvement of AI-powered applications.
          </>,
          <>
            Collaborated with cross-functional teams through Jira to plan AI feature 
            improvements, prioritize quality initiatives, and translate business requirements 
            into actionable implementation plans.
          </>,
          <>
            Conducted quality assurance and validation of conversational AI outputs, 
            identifying issues, tracking defects, and contributing recommendations to 
            improve model performance and reliability.
          </>,
          <>
            Leveraged ChatGPT and prompt engineering techniques to support documentation, 
            testing, workflow optimization, and rapid prototyping, 
            improving software development efficiency.
          </>
        ],
        /*images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
        */
      },
      {
        company: "University of Ottawa",
        timeframe: "Aug 2025 – Sept 2025",
        role: "Student Card Distributor",
        achievements: [
          <>
            Provided bilingual front-line support to 100+ students daily by managing
            onboarding requests, verifying information, and resolving access issues.
          </>,
          <>
            Handled high-volume requests by prioritizing tasks and maintaining accurate 
            records using Microsoft 365 and Excel to support smooth workflow operations.
          </>,
          <>
            Communicated technical procedures clearly in English and French to 
            non-technical users, improving understanding and service experience.
          </>,
          <>
            Supported issue tracking, documentation, and service coordination while 
            collaborating with team members during peak operational periods.
          </>
        ],
        images: [],
      },
      {
        company: "La société Aranatha",
        timeframe: "Aug 2024 – Sept 2024",
        role: "iOS Development Intern	",
        achievements: [
          <>
            Supported iOS application development and testing using Swift, 
            and Xcode by identifying defects, documenting findings, 
            and improving software reliability and user experience.
          </>,
          <>
            Maintained technical documentation, testing records, 
            and version-controlled code using Git to 
            support knowledge sharing and future maintenance.
          </>,
          <>
            Collaborated with developers to understand requirements, 
            troubleshoot issues, 
            and contribute to smoother project coordination.
          </>,
          <>
            Worked with Firebase services while quickly learning 
            new tools and development workflows 
            to support product improvements.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of Ottawa",
        description: <>Honours Bachelor of Science in Computer Science (with Data Science Option) </>,
        timeframe: "Graduated 2026",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "AI & MACHINE LEARNING",
        description: (
          <>
            Large Language Models (LLMs); Generative AI; Conversational AI; 
            AI Response Evaluation; AI Output Quality Assessment; 
            AI Model Feedback & Improvement; Prompt Evaluation; 
            AI Workflow Analysis; Machine Learning Fundamentals; 
            AI Product Testing; AI Performance Analysis
          </>
        ),
        tags: [/*
          {
            name: "Figma",
            icon: "figma",
          },
          */
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          /*
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          */
        ],
      },
      {
        title: "QUALITY ASSURANCE & TESTING",
        description: (
          <>
            Quality Assurance (QA); Test Planning; Test Case Development; Functional Testing; 
            Regression Testing; User Acceptance Testing (UAT); AI Application Testing; 
            Data Validation; Defect Identification & Reporting; Quality Documentation; 
            Test Result Analysis
          </>
        ),
        tags: [
          /*
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
          */
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          /*
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          */
        ],
      },
      {
        title: "PROGRAMMING & DEVELOPMENT",
        description: (
          <>
            Python; JavaScript/TypeScript; SQL; Data Processing; Automation Concepts; 
            Git; GitHub; API Testing; Software Development Lifecycle
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
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "AI TOOLS & TECHNOLOGIES",
        description: (
          <>
            ChatGPT; AI Coding Assistants; LLM-Based Applications; 
            AI Agents (Analysis & Evaluation); LangChain (Familiarity); 
            Hugging Face (Familiarity); AI Workflow Documentation
          </>
        ),
        tags: [
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "DATA & ANALYTICS",
        description: (
          <>
            Data Analysis; Data Cleaning; Data Validation; Data Interpretation; 
            Reporting; Dashboard Development; Performance Metrics Analysis; 
            Data-Driven Insights
          </>
        ),
        tags: [
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "DOCUMENTATION & COLLABORATION",
        description: (
          <>
            Technical Documentation; AI Feature Documentation; Requirements Analysis; 
            Cross-Functional Collaboration; Stakeholder Communication; Agile Methodologies; 
            Jira; Confluence; Team Collaboration
          </>
        ),
        tags: [
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "CLOUD & DEVELOPMENT TOOLS",
        description: (
          <>
            AWS (Familiarity); Docker (Familiarity); GitHub Actions; CI/CD Concepts
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
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "CERTIFICATES",
        description: (
          <>
            <a href="https://www.freecodecamp.org/certification/fcc-51735c5d-edfb-41df-bfc0-adef27894891/data-analysis-with-python-v7">Data Analysis with Python </a>
            | 
            <a href="https://learn.saylor.org/admin/tool/certificate/index.php?code=3137738589JR"> Bitcoin for Developers I</a>
          </>
        ),
        tags: [
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/certificates/DataPython.png",
            alt: "Project image",
            width: 12,
            height: 10,
          },
          {
            src: "/images/certificates/bitcoin.png",
            alt: "Project image",
            width: 12,
            height: 10,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `My personal projects`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
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

export { person, social, newsletter, home, about, blog, work, gallery };
