import React from "react";

export type Skill = {
    name?: string;
    iconSrc?: string;
    url?: string;
};

export type SkillCategory = {
    category: string;
    skills: Skill[];
};

export const skills: SkillCategory[] = [
    {
        category: "languages",
        skills: [
            {
                name: "JavaScript",
                iconSrc: "",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
                name: "TypeScript",
                iconSrc: "",
                url: "https://www.typescriptlang.org/docs/",
            },
            {
                name: "Python",
                iconSrc: "",
                url: "https://docs.python.org/3/",
            },
            {
                name: "C",
                iconSrc: "",
                url: "https://devdocs.io/c/",
            },
        ],
    },
    {
        category: "frameworks",
        skills: [
            {
                name: "React",
                iconSrc: "",
                url: "https://react.dev/",
            },
            {
                name: "Next.js",
                iconSrc: "",
                url: "https://nextjs.org/docs",
            },
            {
                name: "Node.js",
                iconSrc: "",
                url: "https://nodejs.org/en/docs",
            },
            {
                name: "Tailwind CSS",
                iconSrc: "",
                url: "https://tailwindcss.com/docs",
            },
            {
                name: "MongoDB",
                iconSrc: "",
                url: "https://www.mongodb.com/docs/",
            },
            {
                name: "Mongoose",
                iconSrc: "",
                url: "https://mongoosejs.com/docs/",
            },
            {
                name: "HTML",
                iconSrc: "",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            {
                name: "CSS",
                iconSrc: "",
                url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            },
        ],
    },
    {
        category: "tools",
        skills: [
            {
                name: "Git",
                iconSrc: "",
                url: "https://git-scm.com/doc",
            },
            {
                name: "GitHub",
                iconSrc: "",
                url: "https://docs.github.com/en",
            },
            {
                name: "Figma",
                iconSrc: "",
                url: "https://help.figma.com/hc/en-us",
            },
            {
                name: "Adobe Illustrator",
                iconSrc: "",
                url: "https://helpx.adobe.com/illustrator/user-guide.html",
            },
            {
                name: "Microsoft Office",
                iconSrc: "",
                url: "https://support.microsoft.com/en-us/office",
            },
            {
                name: "Unity",
                iconSrc: "",
                url: "https://docs.unity3d.com/Manual/index.html",
            },
            {
                name: "Active Directory",
                iconSrc: "",
                url: "https://learn.microsoft.com/en-us/windows-server/identity/active-directory-domain-services",
            },
        ],
    },
    {
        category: "apis and integrations",
        skills: [
            {
                name: "Google Gemini API",
                iconSrc: "",
                url: "https://ai.google.dev/docs",
            },
            {
                name: "ElevenLabs TTS",
                iconSrc: "",
                url: "https://elevenlabs.io/docs",
            },
            {
                name: "pdfjs-dist",
                iconSrc: "",
                url: "https://mozilla.github.io/pdf.js/",
            },
        ],
    },
    {
        category: "certifications",
        skills: [
            {
                name: "CodePath TIP 102",
                iconSrc: "",
                url: "https://www.codepath.org/courses/tech-interview-prep",
            },
            {
                name: "CodePath WEB 102",
                iconSrc: "",
                url: "https://www.codepath.org/courses/web-development",
            },
            {
                name: "CompTIA IT Fundamentals Pro",
                iconSrc: "",
                url: "https://www.comptia.org/certifications/itf",
            },
        ],
    },
];
