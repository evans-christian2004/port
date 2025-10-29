import type { skills } from "./skills"

export type skillName = typeof skills[number]["skills"][number]["name"];

export type project = {
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
    isWinner?: boolean; //this is personal lmao, I gotta win one of these hackathons bro
    primaryColor?: string;
    secondaryColor?: string;
}

export const projects: project[] = [
    {
        name: "Alto",
        subtext: "A Financial Planner That Does More",
        description: 
            "A finanial planner that that pulls a user's transaction history and displays onto a Calendar, allowing users to use an AI assistant to gain insights and better manage the timing of their financial transaction",
        tags: [
            "Google ADK", "Google Gemini API", "TypeScript", "Next.js", "React", "Tailwind"
        ],
        bodyText: "",
        images: [
            
        ],
        repository: "https://github.com/evans-christian2004/alto-starter",
        isWinner: false,
        primaryColor: "",
        secondaryColor: "",
    },
    {
        name: "TL;DR",
        subtext: "The Ultimate Multimodal Learning Assistant",
        description: 
            "The ultimate learning assistant! TL;DR can take in multiple forms of input and format them into different mediums using the Gemini API for people who what their media in a different form",
        tags: [
             "Google Gemini API", "EllevenLabs API","TypeScript", "Next.js", "React", "Tailwind"
        ],
        bodyText: "",
        images: [

        ],
        repository: "https://github.com/evans-christian2004/the-tldr-app",
        demo: "https://the-tldr-app.vercel.app/",
        isWinner: false,
        primaryColor: "",
        secondaryColor: "",
    },
    {
        name: "FE AI",
        subtext: "Your Next Foundation Exam Prep Tool",
        description: "The University of Central Florida as of 20205 uses a foundation exam to determine which students remain in the Computer Science major and which get weeded out. This tool allows for users to practice for exam by whiteboarding answers to problems with auto grading using the Google Gemini API.",
        tags: [
            "TLDraw API", "TavaScript", "React", "Tailwind"
        ],
        bodyText: "",
        images: [

        ],
        repository: "https://github.com/sebastian-noel/FE-AI",
        isWinner: false,
        primaryColor: "",
        secondaryColor: "",
    },
    {
        name: "Sanity Blog Implimentation",
        subtext: "An Experiment With the Sanity CMS",
        description: "Sanity is a headless CMS platform that allows developers and content creators to more easily manage content. I wanted to try out this new product as a developer tool, So I made a simple project with it and learned a lot about CMS systems!",
        tags: [
            "Sanity", "TypeScript", "Next.js", "React", "Tailwind"
        ],
        bodyText: "",
        images: [

        ],
        repository: "https://github.com/evans-christian2004/sanity-blog",
        demo: "https://sanity-blog-smoky.vercel.app/posts/the-best-and-second-article-of-all-time",
        primaryColor: "",
        secondaryColor: "",
    },
    //will be added once its styled more
    // {
    //     name: "Creatorverse",
    //     subtext: "Share Your Favorite Creators",
    //     description: "Everyones got their host of creators, and this website gives people the opportunity to share them. Using React and Supabase, users can share content creators they cant get enough of for others to see.",
    //     tags: [
    //         "React", "Supabase", "HTML", "CSS"
    //     ],
    //     bodyText: "",
    //     images: [

    //     ],
    //     repository: "https://github.com/evans-christian2004/creatorverse",
    //     primaryColor: "",
    //     secondaryColor: "",
    // },
    {
        name: "Typescript Flash Cards",
        subtext: "A TypeScript Learning Flash Card Game",
        description: "Before learning TypeScript, I wanted to become more familiar with the concepts, so I made a TypeScript flashcard game with react before jumping in to using the JavaScript Alternative",
        tags: [
            "React", "JavaScript", "HTML", "CSS"
        ],
        bodyText: "",
        images: [

        ],
        repository: "https://github.com/evans-christian2004/flashcards",
        primaryColor: "",
        secondaryColor: "",
    },
    {
        name: "305 Life",
        subtext: "See What Miami Has to Offer",
        description: "Miami has a lot to offer, and I wanted to show off my bustling home. As my first React project, I use the framework to show off some of the amazing sites and activities that can be done in Miami, Florida",
        tags: [
            "React", "JavaScript", "HTML", "CSS"
        ],
        repository: "https://github.com/evans-christian2004/community-board",
        demo: "https://305-life.netlify.app/",
        bodyText: "",
        images: [

        ],
        primaryColor: "",
        secondaryColor: "",
    },
    {
        name: "BlackJack",
        subtext: "Blackjack Imoplimentation with just HTML, CSS, and JS",
        description: "In order to get a feel for web development technologies, I began to the basics. This is a simple Blackjack implientation in vanilla HTML, CSS, and JavaScript. You can hit, stand, and there's a dealer.",
        tags: [
            "JavaScript", "HTML", "CSS"
        ],
        repository: "https://github.com/evans-christian2004/Black-Jack",
        demo: "https://dapper-paprenjak-fe854b.netlify.app/",
        bodyText: "",
        images: [

        ],
        primaryColor: "",
        secondaryColor: ""
    },
]

