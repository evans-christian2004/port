import type { skills } from "./skills"

export type skillName = typeof skills[number]["skills"][number]["name"];

type project = {
    name: string;
    //project page will be headed by "name: subtext" when viewed
    subtext: string;
    description: string;
    //tags fpr each project, tags must me from the skills section (add to skills when you use stuff)
    tags: skillName[];
    //body text for the page of the project
    bodyText: string;
    //images sources
    images: string[];
    repository: string;
    devPost?: string;
    demo?: string;
    isWinner: boolean;
    PrimaryColor?: string;
    secondaryColor?: string;
}

const projects: project[] = [
    {
        name: "Alto",
        subtext: "A Financial Planner That Does More",
        description: "",
        tags: [
            "Google ADK", "Google Gemini API", "TypeScript", "Next.js", "React", "Tailwind"
        ],
        bodyText: "",
        images: [

        ],
        repository: "https://github.com/evans-christian2004/alto-starter",
        isWinner: false,
        PrimaryColor: "",
        secondaryColor: "",
    },
    {
        name: "TL;DR",
        subtext: "The Ultimate Multimodal Learning Assistant",
        description: "",
        tags: [
             "Google Gemini API", "EllevenLabs API","TypeScript", "Next.js", "React", "Tailwind",
        ],
        bodyText: "",
        images: [

        ],
        repository: "",
        isWinner: false,
        PrimaryColor: "",
        secondaryColor: "",
    },
    {
        name: "FE AI",
        subtext: "Your Next Foundation Exam Prep Tool",
        description: "",
        tags: [
            "TLDraw API", "TavaScript", "React", "Tailwind",
        ],
        bodyText: "",
        images: [

        ],
        repository: "",
        isWinner: false,
    },
    {
        name: "Sanity Blog Implimentation",
        subtext: "An Experiment With the Sanity CMS",
        description: "",
        tags: [
            "Sanity", "TypeScript", "Next.js", "React", "Tailwind",
        ],
        bodyText: "",
        images: [

        ],
        repository: "https://github.com/evans-christian2004/sanity-blog",
        isWinner: false,
        PrimaryColor: "",
        secondaryColor: "",
    },
    {
        name: "Creatorverse",
        subtext: "Share Your Favorite Creators",
        description: "",
        tags: [
            "React", "Supabase", "HTML", "CSS"
        ],
        bodyText: "",
        images: [

        ],
        repository: "https://github.com/evans-christian2004/creatorverse",
        isWinner: false,
        PrimaryColor: "",
        secondaryColor: "",
    },
    {
        name: "Typescript Flash Cards",
        subtext: "A TypeScript Learning Flash Card Game",
        description: "",
        tags: [
            "React", "JavaScript", "HTML", "CSS",
        ],
        bodyText: "",
        images: [

        ],
        repository: "https://github.com/evans-christian2004/flashcards",
        isWinner: false,
        PrimaryColor: "",
        secondaryColor: "",
    },
    {
        name: "305 Life",
        subtext: "See What Miami Has to Offer",
        description: "",
        tags: [
            "React", "JavaScript", "HTML", "CSS",
        ],
        repository: "https://github.com/evans-christian2004/community-board",
        bodyText: "",
        images: [

        ],
        isWinner: false,
        PrimaryColor: "",
        secondaryColor: "",
    },
]

