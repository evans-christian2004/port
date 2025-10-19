import React from "react";

export type Skill = {
    name: string;
    iconSrc: string;
    url: string;
};

export type SkillCategory = {
    category: string;
    skills: Skill[];
};

export const skills: SkillCategory[] = [
    {
        category: "Languages",
        skills: [
            {
                name: "JavaScript",
                iconSrc: "/icons/skill-icons/javascript.svg",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
                name: "TypeScript",
                iconSrc: "/icons/skill-icons/typescript.svg",
                url: "https://www.typescriptlang.org/",
            },
            {
                name: "HTML",
                iconSrc: "/icons/skill-icons/html.svg",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            },
            {
                name: "CSS",
                iconSrc: "/icons/skill-icons/css.svg",
                url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            },
            {
                name: "Python",
                iconSrc: "/icons/skill-icons/python.svg",
                url: "https://www.python.org/",
            },
            {
                name: "C",
                iconSrc: "/icons/skill-icons/c.svg",
                url: "https://devdcs.io/c/",
            },
        ],
    },
    {
        category: "Frameworks",
        skills: [
            {
                name: "React",
                iconSrc: "/icons/skill-icons/react.svg",
                url: "https://react.dev/",
            },
            {
                name: "Next.js",
                iconSrc: "/icons/skill-icons/nextjs.svg",
                url: "https://nextjs.org/",
            },
            {
                name: "Node.js",
                iconSrc: "/icons/skill-icons/nodejs.svg",
                url: "https://nodejs.org/en/",
            },
            {
                name: "Tailwind CSS",
                iconSrc: "/icons/skill-icons/tailwind.svg",
                url: "https://tailwindcss.com/",
            },
            {
                name: "tRPC",
                iconSrc: "/icons/skill-icons/trpc.svg",
                url: "https://trpc.io/",
            },
            {
                name: "Prisma",
                iconSrc: "/icons/skill-icons/prisma.svg",
                url: "https://www.prisma.io/"
            }
        ],
    },
    {
        category: "Tools",
        skills: [
            {
                name: "Git",
                iconSrc: "/icons/skill-icons/git.svg",
                url: "https://git-scm.com/doc",
            },
            {
                name: "GitHub",
                iconSrc: "/icons/skill-icons/github.svg",
                url: "https://docs.github.com/en",
            },
            {
                name: "Docker",
                iconSrc: "/icons/skill-icons/docker.svg",
                url: "https://www.docker.com/"
            },
            {
                name: "Figma",
                iconSrc: "/icons/skill-icons/figma.svg",
                url: "https://help.figma.com/hc/en-us",
            },
            {
                name: "Adobe Illustrator",
                iconSrc: "/icons/skill-icons/illustrator.svg",
                url: "https://helpx.adobe.com/illustrator/user-guide.html",
            },
            {
                name: "Microsoft Office",
                iconSrc: "/icons/skill-icons/office.svg",
                url: "https://support.microsoft.com/en-us/office",
            },
            {
                name: "Unity",
                iconSrc: "/icons/skill-icons/unity.svg",
                url: "https://docs.unity3d.com/Manual/index.html",
            },
        ],
    },
    {
        category: "APIs and Integrations",
        skills: [
            {
                name: "Google Gemini API",
                iconSrc: "/icons/skill-icons/gemini.svg",
                url: "https://ai.google.dev/docs",
            },
            {
                name: "GSAP",
                iconSrc: "/icons/skill-icons/gsap.svg",
                url: "https://gsap.com/"
            },
            {
                name: "Motion.",
                iconSrc: "/icons/skill-icons/motion.svg",
                url: "https://motion.dev/"

            },
            {
                name: "EllevenLabs",
                iconSrc: "/icons/skill-icons/ellevenlabs.svg",
                url: ""
            }
        ],
    },
    {
        category: "Certifications",
        skills: [
            {
                name: "CodePath TIP 102",
                iconSrc: "/icons/skill-icons/codepath.svg",
                url: "https://www.codepath.org/courses/tech-interview-prep",
            },
            {
                name: "CompTIA IT Fundamentals Pro",
                iconSrc: "/icons/skill-icons/ITFpro.svg",
                url: "https://www.comptia.org/certifications/itf",
            },
        ],
    },
];
