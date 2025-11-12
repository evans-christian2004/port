import path from "path";
import fs from "fs";


export type project = {
    name: string;
    // project page will be headed by "name: subtext" when viewed
    subtext: string;
    description: string;
    // tags for each project, tags must be from the skills section (add to skills when you use stuff)
    tags: string[];
    // body text for the page of the project
    bodyText: string;
    // folder name for images
    folder: string;
    // images sources
    images: string[];
    repository: string;
    devPost?: string;
    demo?: string;
    isWinner?: boolean; // this is personal lmao, I gotta win one of these hackathons bro
    primaryColor?: string;
    secondaryColor?: string;
}

// helper function that determines the number of images in each folder and creates an array of strings for them
export function getProjectImages(folderName: string): string[] {
  const dir = path.join(process.cwd(), "public/images/projects", folderName);

  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => /\.(jpg|jpeg)$/i.test(file))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] ?? "0");
      const numB = parseInt(b.match(/\d+/)?.[0] ?? "0");
      return numA - numB;
    })
    .map((file) => `/images/projects/${folderName}/${file}`);
}

export const projectsData = [
  {
    name: "Alto",
    subtext: "A Financial Planner That Does More",
    description: "A financial planner that pulls a user's transaction history and displays it onto a Calendar, allowing them to use an AI assistant to gain insights and better manage the timing of their financial transactions.",
    bodyText: `
<p>
  A lot of financial budgeting apps monitor <strong>what</strong> you spend, but not <strong>when</strong> you spend it, so we built Alto: A smart financial planner that visualizes spending and income timing to help users avoid overdrafts. Instead of static charts, Alto turns Plaid-formatted transaction data into an interactive calendar that shows when bills, subscriptions, and paychecks actually hit—making financial timing clear and actionable.
</p>

<h2>Contributions</h2>
<ul>
  <li>Architected the full-stack integration between a Next.js + Tailwind front end and a multi-agent system powered by Google ADK.</li>
  <li>Designed and implemented session management using local storage so users could come back and pick up where they left off.</li>
  <li>Built the calendar interface that dynamically updates when users move payments or paychecks, storing changes locally for continuity.</li>
  <li>Developed an AI workflow where a root coordinator routes tasks between two agents: a Q&A agent that explains financial insights and a calendar agent that modifies events in real time.</li>
  <li>Overcame major integration challenges due to limited ADK documentation and created a working model bridging AI agents and modern web frameworks.</li>
</ul>

<h2>Technical Highlights</h2>
<ul>
  <li>Next.js + React frontend styled with Tailwind.</li>
  <li>Multi-agent system built with Google ADK coordinating between Q&A and calendar tasks.</li>
  <li>Session persistence via local storage keyed by username.</li>
  <li>Calendar UI with move functionality to change payment dates and reflect timing shifts.</li>
</ul>

<h2>Challenges and Wins</h2>
<p>
  The biggest challenge was getting the ADK agents to reliably integrate with our front end and manage context across sessions. I'm proud this was the first time I got a project running with Google ADK after earlier attempts didn't work out.
</p>

<h2>What I Learned</h2>
<p>
  I learned how to coordinate multiple AI agents within a product workflow, manage session state over time, and connect emerging AI infrastructure with user-friendly interfaces. This project helped me level up from “just a front end” to “full end-to-end application.”
</p>
    `,
    tags: ["Google ADK", "Google Gemini API", "TypeScript", "Next.js", "React", "Tailwind"],
    folder: "alto",
    images: ["/images/projects/alto/1.jpg"],
    repository: "https://github.com/evans-christian2004/alto-starter",
    devPost: "https://devpost.com/software/alto-m96ytw",
    isWinner: false,
    primaryColor: "#151A29",
    secondaryColor: "#B0C3D2",
  },
  {
    name: "TL;DR",
    subtext: "The Ultimate Multimodal Learning Assistant",
    description: "The ultimate learning assistant! TL;DR can take in multiple forms of input and format them into different mediums using the Gemini API for people who want their media in a different form.",
    bodyText: `
<p>
  I built <strong>TL;DR</strong> so one file in can turn into many formats out. Students and creators can upload a PDF or paste text and get back a summary, plain text, exportable PDF, and even optional audio—without being locked into cloud tools.
</p>

<h2>Contributions</h2>
<ul>
  <li>Set up the modular pipeline in Next.js API Routes and TypeScript to handle ingest → extract → summarize → export.</li>
  <li>Implemented mock and real AI summarization layers so the app works locally without API keys and scales up when real APIs are connected.</li>
  <li>Developed the React UI with Tailwind CSS including tabs for Upload/Paste modes, progress states, and error feedback.</li>
  <li>Created exporters for JSON, plain text, and print-ready PDF summaries.</li>
  <li>Built local session handling and structured error logging so the UI remained stable under different workflows and failures.</li>
</ul>

<h2>Technical Highlights</h2>
<ul>
  <li>Next.js + React front end styled with Tailwind CSS.</li>
  <li>AI summarization via Google Gemini (and mock provider for dev mode).</li>
  <li>Text extraction using <code>pdf-parse</code>.</li>
  <li>Pipeline architecture with modular stage interfaces enabling future outputs (TTS, image generation).</li>
</ul>

<h2>Challenges and Wins</h2>
<p>
  A key challenge was handling large PDF files and making sure the UI stayed simple while the workflow got complex. I'm proud of achieving mock-first reliability and plug-and-play extensibility so new output formats can drop in without rewiring core logic.
</p>

<h2>What I Learned</h2>
<p>
  I learned the value of prompt-schema design and clear separation of concerns. Building TL;DR reinforced that developer experience matters just as much as user experience—especially when you're creating a tool for others to build on.
</p>
    `,
    tags: ["Google Gemini API", "EllevenLabs API", "TypeScript", "Next.js", "React", "Tailwind"],
    folder: "tldr",
    images: [],
    repository: "https://github.com/evans-christian2004/the-tldr-app",
    devPost: "https://devpost.com/software/multi-part-input-distribution",
    demo: "https://the-tldr-app.vercel.app/",
    isWinner: false,
    primaryColor: "#352735",
    secondaryColor: "#E2DCE3",
  },
  {
    name: "FE AI",
    subtext: "Your Next Foundation Exam Prep Tool",
    description: "The University of Central Florida uses a foundation exam to determine which students remain in the Computer Science major. This tool allows users to practice for the exam by whiteboarding answers and getting auto grading using the Google Gemini API.",
    bodyText: `
<p>
  I helped build <strong>FE AI</strong>, a tool for the CS Foundation Exam where students can whiteboard answers and get AI-powered feedback. Instead of grading manually, we used Google Gemini to evaluate submissions and tell students how to get full credit.
</p>

<h2>Contributions</h2>
<ul>
  <li>Built the front-end interface with Vite, React, HTML, and CSS using a familiar split-screen layout for questions and the whiteboard.</li>
  <li>Integrated <code>TLDraw</code> as the answering canvas so users could draw responses like writing on paper.</li>
  <li>Engineered the submission pipeline: captured screenshots, encoded them in Base64, sent to Google Gemini API, and displayed structured feedback.</li>
  <li>Collaborated on UI/UX design in Figma and implemented responsive, exam-style views including landing page, header, footer.</li>
  <li>Debugged and optimized the Gemini grading flow to ensure image parsing and feedback were consistent and usable.</li>
</ul>

<h2>Technical Highlights</h2>
<ul>
  <li>Vite + React frontend built with modular components.</li>
  <li>Canvas-based whiteboard interface via TLDraw.</li>
  <li>Google Gemini API integration for grading images.</li>
  <li>Automated feedback system for partial credit, clarity, and full-credit modelling.</li>
</ul>

<h2>Challenges and Wins</h2>
<p>
  We started off trying Excalidraw but ran into styling and integration issues with Vite, so switching to TLDraw made things smoother. The hardest part was reliably sending and grading whiteboard images, but we made it work and got real grading feedback in the app.
</p>

<h2>What I Learned</h2>
<p>
  I gained experience with AI-assisted grading workflows, canvas interactivity, and building image-to-text evaluation pipelines. This project showed me how to turn study friction into instant feedback and how these ideas scale into larger tools.
</p>
    `,
    tags: ["TLDraw API", "JavaScript", "React", "Tailwind"],
    folder: "feai",
    images: [],
    repository: "https://github.com/sebastian-noel/FE-AI",
    devPost: "https://devpost.com/software/untitled-project-g6fl50ordx7m",
    isWinner: false,
    primaryColor: "#242424",
    secondaryColor: "#F6D164",
  },
  {
    name: "Sanity Blog",
    subtext: "An Experiment With the Sanity CMS",
    description: "Using Sanity, a headless CMS platform that allows developers and content creators to manage content separately from the frontend. I wanted to try it out as a developer tool, make a simple project, and learn a lot about how CMS systems work!",
    bodyText: `
<p>
  I built a small project using <strong>Sanity</strong>, a headless CMS platform that lets developers and content creators manage structured content separately from the frontend. My goal was to see how CMS systems work and how they help you manage dynamic content in modern web apps.
</p>
<h2>Accomplishments</h2>
<ul>
  <li>Set up a Sanity Studio with custom schemas for pages, projects, and reusable blocks of content.</li>
  <li>Integrated Sanity with a Next.js frontend using <code>@sanity/client</code> and GROQ queries to fetch content dynamically.</li>
  <li>Configured live content previews and incremental updates so editors could see changes instantly.</li>
  <li>Explored CMS workflows like content versioning, custom roles, and team collaboration features.</li>
</ul>

<h2>Technical Highlights</h2>
<ul>
  <li>Headless CMS with Sanity Studio for schema-based content modelling.</li>
  <li>Next.js frontend with GROQ data fetching and live preview integration.</li>
  <li>Dynamic updates and live preview support via Sanity's cloud tools.</li>
  <li>Deployed the CMS and frontend via Sanity's cloud and Vercel.</li>
</ul>

<h2>Challenges and Wins</h2>
<p>
  The challenge was moving away from the typical CMS mindset (like WordPress) into content-as-data and learning how to flow that into a frontend. I'm proud I ended up with a working demo where content could be added without editing code—it just worked.
</p>

<h2>What I Learned</h2>
<p>
  I learned how headless CMS platforms differ from traditional systems by offering structured APIs instead of templates. I found how to decouple content from presentation, making it easier to scale and maintain websites. This project gave me confidence that modern CMS workflows are both flexible and dev-friendly.
</p>
    `,
    tags: ["Sanity", "TypeScript", "Next.js", "React", "Tailwind"],
    folder: "sanityblog",
    images: [],
    repository: "https://github.com/evans-christian2004/sanity-blog",
    demo: "https://sanity-blog-smoky.vercel.app",
    primaryColor: "#0B1309",
    secondaryColor: "#EBF7E8",
  },
  {
    name: "Typescript Flash Cards",
    subtext: "A TypeScript Learning Flash Card Game",
    description: "Before learning TypeScript, I wanted to become more familiar with the concepts, so I made a TypeScript flashcard game with React before jumping into the JavaScript alternative.",
    bodyText: `
<p>
  I built a flash-card app using React to help me learn TypeScript. It lets users flip cards with questions and answers, randomly pick cards, and reinforce learning in a fun way.
</p>

<h2>Accomplishments</h2>
<ul>
  <li>Built the flip-card mechanism: one side shows the question, click flips it, then “next” picks a new random card.</li>
  <li>Defined the data structure for card sets (arrays of question/answer pairs) and dynamically displayed the title, description, and card count.</li>
  <li>Developed the UI with Vite + JavaScript + HTML + CSS ensuring animations are smooth and it works across devices.</li>
  <li>Focused on usability and learning flow: designed the layout so the question side is clean and flipping reveals the answer without distraction.</li>
  <li>Managed state and randomness logic so each new card is chosen fairly and animations stay in sync with card updates.</li>
</ul>

<h2>Technical Highlights</h2>
<ul>
  <li>Vite toolchain for fast development and bundling.</li>
  <li>JavaScript for the card reveal and randomness logic.</li>
  <li>CSS animations for the flip effect and clean UI transitions.</li>
  <li>Modular data representation: card sets, metadata (title, count), dynamic rendering.</li>
</ul>

<h2>Challenges and Wins</h2>
<p>
  The main challenge was aligning the flip-card animation with the state changes of question/answer ensuring flips don't glitch and logic stays in sync. I'm proud I ended up with a study tool that's fun and helps with memory recall instead of just passive reading.
</p>

<h2>What I Learned</h2>
<p>
  This project improved my skills in interactive UI design, state management with React, and building focused learning tools. It showed me that even small, well-designed apps can deliver real value when the user experience is tight and workflow-driven.
</p>
    `,
    tags: ["React", "JavaScript", "HTML", "CSS"],
    folder: "flashcards",
    images: [],
    repository: "https://github.com/evans-christian2004/flashcards",
    primaryColor: "#427DB9",
    secondaryColor: "#E0E8EA",
  },
  {
    name: "305 Life",
    subtext: "See What Miami Has to Offer",
    description: "Miami has a lot to offer and I wanted to show off my bustling home. As my first React project I used the framework to highlight some amazing sites and activities in Miami, Florida.",
    bodyText: `
<p>
  I built <strong>305 Life</strong>, a React-based community board showcasing local Miami events and spots. The idea was to practice React fundamentals while making something personal and useful.
</p>

<h2>Accomplishments</h2>
<ul>
  <li>Developed a responsive grid layout that displays over ten unique Miami events using reusable React components.</li>
  <li>Designed and implemented a landing page with header and footer for better navigation and presentation.</li>
  <li>Created event cards featuring titles, descriptions, and external links to resources for each spot.</li>
  <li>Styled the interface with a cohesive color theme and made it mobile-friendly so anyone can check it out on their phone.</li>
  <li>Focused on code organization and component reuse to practice scalable React patterns even in a simpler app.</li>
</ul>

<h2>Technical Highlights</h2>
<ul>
  <li>Frontend built with React + Vite for fast iteration and deployment.</li>
  <li>Responsive grid and mobile-first design to ensure the app works on phones and desktops alike.</li>
  <li>Themed header, footer, and card layout to give the app a polished look and feel.</li>
  <li>Deployed as a static site using Vite's build tools so it loads quickly and reliably.</li>
</ul>

<h2>Challenges and Wins</h2>
<p>
  It was a challenge making sure the grid layout stayed consistent across different screen sizes and making event cards reusable. I'm glad I ended up with something that feels like a real app and not just a tutorial—and it means something to me since it's about my hometown.
</p>

<h2>What I Learned</h2>
<p>
  I learned how to structure a small React app with reusable components, responsive layouts, and a personal theme. It also gave me hands-on experience turning a simple idea into a polished UI that showcases community value.
</p>
    `,
    tags: ["React", "JavaScript", "HTML", "CSS"],
    repository: "https://github.com/evans-christian2004/community-board",
    demo: "https://305-life.netlify.app/",
    folder: "305life",
    images: [],
    primaryColor: "#12A6C0",
    secondaryColor: "#ffebdc",
  },
  {
    name: "BlackJack",
    subtext: "Blackjack Implementation with just HTML, CSS, and JS",
    description: "To get a feel for web development technologies I started with basics. This is a simple Blackjack implementation in vanilla HTML, CSS, and JavaScript. You can hit, stand, and there's a dealer.",
    bodyText: `
<p>
  I built a simple but fully playable Blackjack game using vanilla <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. The app lets a player draw cards, decide to hit or stand against a dealer, and see win/lose/tie outcomes—all in the browser with no frameworks.
</p>

<h2>Accomplishments</h2>
<ul>
  <li>Designed and implemented the core game loop: deal two initial cards, calculate the hand total, then allow player decisions (Hit or Stand).</li>
  <li>Built logic for drawing new cards (random 1 to 11), handling aces (value 11 or 1 when helpful), updating the player's hand dynamically, and evaluating outcomes (win, lose, tie).</li>
  <li>Constructed the dealer's behavior: deal two cards, then draw until the dealer's hand is at least 15, and compare it against the player's hand to decide the result.</li>
  <li>Developed the UI: displayed card values, hand totals, status messages like “You win”, “Hit or Stand?”, “You lose”, and toggled visible buttons to control flow.</li>
  <li>Styled the game interface using CSS for layout and readability, making sure the UI was clean and intuitive.</li>
  <li>Managed JavaScript state: variables for firstCard, secondCard, hand totals, dealerHand, game-state flags (hasBlackJack, isAlive), and functions for startGame(), newCard(), stand(), dealer().</li>
</ul>

<h2>Technical Highlights</h2>
<ul>
  <li>Vanilla JavaScript with DOM manipulation to update the UI based on game state.</li>
  <li>Random number generation for card draws, and conditional logic to handle special cases like an ace busting you.</li>
  <li>CSS layout and styling for the game interface: card display, hand totals, control buttons (Start, Hit, Stand, New Game).</li>
  <li>Simple but effective game-flow management: enabling or disabling UI controls based on game progression and state flags.</li>
</ul>

<h2>Challenges and Wins</h2>
<p>
  A big challenge was managing the ace logic (when to count an 11 as 1) and making sure the dealer drew correctly and stopped at the right point. I'm proud the final version handles all major paths (player win, dealer win, tie) and gives a smooth browser-based game experience without external libraries.
</p>

<h2>What I Learned</h2>
<p>
  This project reinforced my fundamentals in JavaScript state management, DOM manipulation, and UI control logic. It also reminded me that even small, focused projects have big value—this one strengthened my understanding of flow control, randomness, user interaction, and game logic, all of which apply to larger apps.
</p>
    `,
    tags: ["JavaScript", "HTML", "CSS"],
    repository: "https://github.com/evans-christian2004/Black-Jack",
    demo: "https://dapper-paprenjak-fe854b.netlify.app/",
    folder: "blackjack",
    images: [],
    primaryColor: "#02002A",
    secondaryColor: "#E6F7FA",
  }
]

// dynamically populates images array in the project data with images in /images/projects/project.folder/<image index>
export const projects: project[] = projectsData.map((p) => ({
  ...p,
  images: getProjectImages(p.folder),
}));
