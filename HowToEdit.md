# Project Structure

The most important directories are:

src/
├── app/
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── projects/
│   │       ├── *.mdx
│
├── components/
│   ├── HomeContent.tsx
│   ├── LanguageContext.tsx
│   ├── LanguageToggle.tsx
│   ├── mdx.tsx
│   ├── about/
│   └── work/
│       ├── Projects.tsx
│       ├── ProjectCard.tsx
│       ├── LanguageAwareProject.tsx
│       ├── ProjectContent.tsx
│       └── RelatedProjects.tsx
│
├── resources/
│   ├── content.tsx
│   └── once-ui.config.ts
│
└── utils/
    ├── utils.ts
    ├── getProject.ts
    └── formatDate.ts


Where to Change My Portfolio Content

The main personal information is located in:

    src/resources/content.tsx

This is the most important file for changing the content of the portfolio.

It contains:

Personal information
Name
Role
Avatar
Location
Languages
Social links
Homepage content
About page content
Work experience
Education
Technical skills
Certificates
Blog information
Work page information

Bilingual System

The portfolio uses a custom language system rather than the original localization system from Magic Portfolio.

The supported languages are:

en
fr

The main language context is:

src/components/LanguageContext.tsx

The language toggle is:

src/components/LanguageToggle.tsx

The context controls the currently selected language.

Adding a New Translated UI Text

When adding text to a component that needs to change depending on the language, use:

const { language } = useLanguage();

Then:

const labels = {
  en: {
    title: "Projects",
  },
  fr: {
    title: "Projets",
  },
};

const text = labels[language];

Then use:

<Text>{text.title}</Text>

This keeps UI text synchronized with the language toggle.

Homepage

The homepage is:

src/app/page.tsx

The main homepage content is handled by:

src/components/HomeContent.tsx

The actual English and French homepage content is stored in:

src/resources/content.tsx

under:

const home = {
  en: {
    ...
  },

  fr: {
    ...
  },
};

To modify the homepage, normally edit content.tsx rather than hard-coding text directly into page.tsx.

About Page

The About page is:

src/app/about/page.tsx

The content comes from:

src/resources/content.tsx

under:

const about: About = {
  ...
};

This includes:

Introduction
Work experience
Education
Technical skills
Certificates
Languages
Profile information

When adding or modifying About page content, update both language versions if the section is bilingual.

Projects

Projects are stored as MDX files:

src/app/work/projects/

For example:

malou.mdx
splizzy.mdx
vohitsoa.mdx

Each project contains frontmatter followed by Markdown/MDX content.

Example:

---
title: "Building the official MALOU website"
publishedAt: "2025-05-03"
summary: "A modern, responsive website..."
images:
  - "/images/projects/malou/home.png"
team:
  - name: "Johann Rajosefa"
    role: ""
    avatar: "/images/avatar.png"
link: "https://..."
---

## Overview

Project description goes here.

## Key Features

- Feature 1
- Feature 2
- Feature 3
Bilingual Projects

Each project has an English and French version.

The two files should use the same project identifier, while the language is determined by the project data structure / naming convention used by the project loader.

For example:

malou.mdx
malou.fr.mdx

or the equivalent naming convention currently used by the project loader.

The important rule is:

English and French versions of the same project must be treated as one project, not as two separate projects in the project list.

The language-aware project components are:

src/components/work/LanguageAwareProject.tsx

and:

src/components/work/ProjectContent.tsx

If the project language system is modified, these files are important.

Adding a New Project
Step 1 — Create the English project

Add an MDX file to:

src/app/work/projects/

For example:

my-new-project.mdx

Add the frontmatter and project content.

Step 2 — Create the French version

Create the corresponding French MDX file using the project's established French naming convention.

Translate:

title
summary
Overview
Key Features
Technologies Used
Challenges and Learnings
Outcome
Future Enhancements

Keep the project identifier consistent between the two versions.

Step 3 — Add project images

Put images inside:

public/images/projects/

For example:

public/images/projects/my-project/
├── cover.png
├── screenshot-1.png
└── screenshot-2.png

Then reference them from the MDX frontmatter:

images:
  - "/images/projects/my-project/cover.png"
Project Components

The main project list is:

src/components/work/Projects.tsx

This component:

Loads project MDX files
Sorts projects by publication date
Filters projects
Displays project cards

The project card is:

src/components/work/ProjectCard.tsx

The individual project page is:

src/app/work/[slug]/page.tsx

The language-aware project header/content logic is handled by:

src/components/work/LanguageAwareProject.tsx
Project Data Loading

Project MDX files are loaded using:

src/utils/utils.ts

This file uses:

fs
path
gray-matter

to read the MDX files and extract:

Frontmatter
Project metadata
Project content
Slugs

Because this uses Node's filesystem APIs, it must remain on the server side.

Be careful when adding:

"use client";

to components that import getPosts() or other utilities using fs.

MDX

Project content is rendered using:

src/components/mdx.tsx

This contains the custom MDX rendering configuration.

Important

Do not turn the MDX rendering component into a Client Component unless absolutely necessary.

MDXRemote is asynchronous and should remain on the server side.

If you see an error similar to:

<MDXRemote> is an async Client Component

check whether a component importing CustomMDX accidentally contains:

"use client";
Styling

The project uses Once UI for most UI components and styling.

Examples:

<Column />
<Row />
<Heading />
<Text />
<Button />
<Tag />
<Avatar />
<Media />

Once UI components use design tokens rather than traditional CSS everywhere.

For example:

<Column
  maxWidth="m"
  gap="xl"
  paddingY="12"
>

or:

<Text
  variant="body-default-m"
  onBackground="neutral-weak"
>
Changing the Global Theme

The main Once UI configuration is located in:

src/resources/once-ui.config.ts

This is where the global design system can be customized.

Depending on the Once UI configuration, you can modify things such as:

Colors
Typography
Spacing
Borders
Radii
Light/dark appearance
Brand colors
Changing Component Styling

For individual components, styling can usually be changed directly through Once UI props.

For example:

<Heading
  variant="display-strong-xl"
  marginBottom="l"
>
  My Projects
</Heading>

You can modify:

variant
gap
padding
margin
maxWidth
radius
background
onBackground

and other Once UI properties.

Custom CSS / SCSS

Some components use CSS modules.

For example, the About page uses:

src/components/about/about.module.scss

If you need highly specific styling that cannot easily be achieved with Once UI props, use the relevant .module.scss file.

Avoid adding large amounts of global CSS unless necessary.

Page Animations

Animations and reveal effects are implemented using Once UI components such as:

<RevealFx />

For example:

<RevealFx
  translateY="16"
  delay={0.6}
>
  <Projects />
</RevealFx>

You can control the animation timing through properties such as:

delay
translateY

If you want to control the fade-in effect globally, check the layout/page structure and the components using RevealFx.

Language Toggle

The language toggle is implemented using:

src/components/LanguageToggle.tsx

and:

src/components/LanguageContext.tsx

The provider maintains:

en
fr

and exposes:

language
setLanguage()
toggleLanguage()

Components that need to react to language changes should use:

const { language } = useLanguage();
Adding a New Language

The current system supports:

English (en)
French (fr)

To add another language, the following areas may need to be updated:

LanguageContext.tsx
LanguageToggle.tsx
content.tsx
Language-aware components
Project language handling
Any hard-coded UI labels

For example, the language type currently looks like:

type Language = "en" | "fr";

A third language would require updating this type and the relevant translations.

Navigation / Routes

The main routes are:

/

Homepage

/about

About / CV

/work

Projects

/work/[slug]

Individual project

Blog and gallery routes may also exist depending on whether they are enabled in the configuration.

Social Links

Social links are defined in:

src/resources/content.tsx

inside:

const social: Social = [
  ...
];

Each social link can define:

{
  name: "GitHub",
  icon: "github",
  link: "...",
  essential: true,
}
Images

Static images belong in:

public/images/

For example:

public/images/
├── avatar.png
├── certificates/
├── projects/
├── gallery/
└── og/

When referencing an image from code or MDX, use the public path:

src="/images/avatar.png"

Do not include public in the URL.

Before Adding New Components

Before creating a completely new UI component, check whether Once UI already provides what you need.

Common components include:

Column
Row
Flex
Text
Heading
Button
Avatar
AvatarGroup
Media
Tag
Badge
SmartLink
RevealFx

Using Once UI components keeps the portfolio visually consistent.

Common Development Workflow

When making changes, the typical workflow is:

1. Run the development server
2. Edit the relevant file
3. Save
4. Check the browser
5. Check the browser console
6. Fix TypeScript/build errors
7. Test both English and French
8. Test desktop and mobile layouts
9. Run a production build before deployment

Run a production build with:

npm run build

If the build succeeds, start the production server with:

npm run start
Important Things to Remember
1. Check both languages

Whenever changing UI content, verify:

🇬🇧 English
🇫🇷 French

Do not assume that changing the English version automatically changes the French version.

2. Avoid unnecessary Client Components

Be especially careful with:

"use client";

Some components must remain Server Components because they depend on:

MDX
MDXRemote
fs
server-side project loading
3. Project files are server-side content

The project loader uses Node's:

fs
path

Therefore, project loading should not be moved into a browser Client Component.

4. Keep project translations synchronized

When adding an English project, also add its French version.

Make sure both versions contain the same:

Images
Team members
Project link
Project identifier
Main sections

Only the language-specific text should normally change.

Original Template

This portfolio was originally based on Magic Portfolio, created by Once UI.

The original project provided the foundation for:

Layout
Once UI components
MDX project system
Blog system
About page
Gallery
SEO metadata
Responsive design

The project has since been heavily customized for my personal portfolio.

Once UI Resources

Once UI:

https://once-ui.com/

Once UI documentation:

https://docs.once-ui.com/

Magic Portfolio:

https://github.com/once-ui-system/magic-portfolio

Next.js:

https://nextjs.org/

License

The original Magic Portfolio template is distributed under the CC BY-NC 4.0 License.

See:

LICENSE.txt

for the complete license information.

This repository contains significant modifications and additions made for my personal portfolio.


### One important correction from the original README

I would **not** keep the old instructions saying:

```text
src/resources/content.js

because your project now uses:

src/resources/content.tsx

And similarly, your project architecture is no longer just the original Magic Portfolio architecture. The README above documents the customized version you're actually working with.

For styling specifically

Your main places to look are:

src/resources/once-ui.config.ts

→ global theme / design system

src/components/about/about.module.scss

→ custom About-page CSS

src/components/*.tsx
src/app/**/*.tsx

→ component-level Once UI styling

And when you see something like:

<Heading
  variant="display-strong-xl"
  marginBottom="l"
/>

you can generally control its appearance through Once UI's props rather than writing CSS.

If you want to change the overall visual identity of the portfolio—font, brand color, background, borders, radius, spacing, etc.—I'd start with once-ui.config.ts.