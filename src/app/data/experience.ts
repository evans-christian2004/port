export type experience = {
    title: string,
    company: string,
    startDate: Date,
    endDate?: Date,
    description: string,
    responsibilities: string[],
    tags: string[],
    imageSrc: string,
    primaryColor: string,
    secondaryColor: string,
}

export const experiences: experience[] = [
    {
        title: "Kickstart Mentee",
        company: "Knight Hacks",
        startDate: new Date("9/11/2025"),
        endDate: new Date("11/18/2025"),
        description: "I Participated in the Knight Hacks mentorship program, where I received one-on-one guidance from experienced mentors, collaborated with my mentee cohort on hackathon projects, and strengthened my technical and teamwork skills within UCF's developer community.",
        responsibilities: [
            "Collaborated with a cohort of mentees to develop full-stack projects for hackathons and campus showcases.",
            "Received individualized mentorship on programming fundamentals, software design, and industry best practices.",
            "Attended Knight Hacks workshops and technical sessions focused on career advacement and development technologies",
            "Worked closely with peers to practice agile workflows and present solutions to real-world problems during hackathons.",
            "Engaged with UCF's tech community to grow as a developer and prepare for leadership roles in future Knight Hacks events."
        ],
        tags: [
            "Mentorship",
            "Hackathons",
            "Teamwork",
            "Leadership Development",
            "Community"
        ],
        imageSrc: "icons/experience-icons/kh.svg",
        primaryColor: "#BA81F6",
        secondaryColor: "#181423",
    },
    {
        title: "IT Student Technician",
        company: "University of Central Florida",
        startDate: new Date("7/1/2025"),
        description:
            "Provided Tier 1 technical support for UCF's largest IT zone, assisting over 500 students, faculty, and staff. I also managed Active Directory operations, handled hardware lifecycle tasks, and automated IT processes to improve resolution efficiency and service quality. Work was tracked using ServiceNow as a ticketing system, where I routinely led my zone in tickets resolved and client satisfaction.",
        responsibilities: [
            "Diagnosed and resolved hardware, software, and network connectivity issues for over 500 students, faculty, and staff.",
            "Administered Active Directory services including user account creation, password resets, and group policy management.",
            "Handled full hardware lifecycle management: deployment, maintenance, and secure decommissioning of university devices.",
            "Documented 10+ daily service requests and technical recommendations to enhance support tracking and efficiency using the ServiceNow ticketing system.",
            "Automated IT onboarding workflows with Bash scripts, improving ticket resolution times by 32%."
        ],
        tags: [
            "Active Directory",
            "Windows",
            "MacOS",
            "Networking",
            "System Administration",
            "Bash",
            "Troubleshooting",
            "Technical Support",
            "Project Management"
        ],
        imageSrc: "icons/experience-icons/ucfit.svg",
        primaryColor: "#F6D164",
        secondaryColor: "#242424",
    },
    {
        title: "Lead Consultation Agent",
        company: "Geek Squad",
        startDate: new Date("8/7/2024"),
        endDate: new Date("9/21/2025"),
        description:
            "Led a team of consultation agents to deliver exceptional customer service and technical support for complex software, hardware, and network issues. I oversaw client consultations, managed escalations, and maintained service quality with a focus on clear communication and problem resolution. Clear technical communication skills and team collaboration were vital to my role as a Geeksquad Agent.",
        responsibilities: [
            "Led and trained a team of 3–5 Consultation Agents, providing mentorship on customer service best practices, troubleshooting, and product knowledge.",
            "Maintained documentation of 30+ customer interactions daily, ensuring accurate service records and follow-ups.",
            "Provided in-depth technical consultations for hardware, software, and network troubleshooting to non-technical customers.",
            "Resolved 15+ escalated cases weekly, maintaining a 94% customer satisfaction rating.",
            "Collaborated with team leads to improve support workflows and reduce case turnaround times."
        ],
        tags: [
            "Customer Service",
            "Technical Support",
            "Team Leadership",
            "Troubleshooting",
            "Hardware",
            "Networking",
            "Communication",
            "Retail IT"
        ],
        imageSrc: "icons/experience-icons/geeksquad.svg",
        primaryColor: "#F58136",
        secondaryColor: "#010101",
    },
    {
        title: "Front-End Development Intern",
        company: "The Startup Life",
        startDate: new Date("7/1/2021"),
        endDate: new Date("4/2/2022"),
        description:
            "Collaborated with a small team to design and develop responsive web interfaces for a Miami-based startup. I Enhanced UI performance, improved user engagement, and contributed to the company's brand visibility through creative front-end design and optimization. Projects undergone during this internship were mostly managed by myself under the supervision of my manager and mentor. I had a direct impact on the website design and architecture.",
        responsibilities: [
            "Led a team of four front-end developers to build a dynamic, responsive website for a digital marketing and consulting startup.",
            "Developed and deployed the company's main landing page, enabling appointment booking and contact functionality.",
            "Optimized UI and site performance, increasing user conversion rates by 27%.",
            "Created interactive UI components with HTML, CSS, JavaScript, and React using Bootstrap for styling.",
            "Collaborated closely with company leadership to align branding and functionality with business goals."
        ],
        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Bootstrap",
            "UI/UX",
            "Web Design",
            "Team Leadership",
            "Responsive Development"
        ],
        imageSrc: "icons/experience-icons/thestartuplife.svg",
        primaryColor: "#59CDFF",
        secondaryColor: "#202938",
    },

];
