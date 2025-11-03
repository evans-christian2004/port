export type experience = {
    title: string,
    company: string,
    startDate: Date,
    endDate?: Date,
    description: string,
    responsibilities: string[],
    tags: string[]
}

export const experiences: experience[] = [{
    title: "IT Student Technician",
    company: "University of Crentral Florda",
    startDate: new Date(),
    description: "",
    responsibilities: [
        "Provided tier 1 technical support for over 500 students, faculty, and staff, diagnosing and resolving hardware, software, and network connectivity issues for the University of Central Florida’s largest IT zone.",
        "Administered Active Directory services, including user account creation, password resets, group policy management, and OU (Organizational Unit) maintenance to ensure secure access to network resources.",
        "Maintained accurate and detailed documentation of 10+ daily customer interactions, handling service requests and technical recommendations to improve service efficiency and tracking.",
        "Executed the end-to-end hardware lifecycle for university assets, including deployment, maintenance, and secure decommissioning of laptops, desktops (Windows and MacOS devices), and specialized equipment.",
        "Automated IT onboarding tasks using bash scripts, boosting ticket resolution times by 32%.",
    ],
    tags: [
        "TCP/IP", "Active Directory", "Windows", "MacOS", "Project Management", "Troubleshooting",
    ]
}]