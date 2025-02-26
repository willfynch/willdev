import { ISogeContent } from "./soge"

export const SOGE_CONTENT: ISogeContent = {
    company: `Société Générale`,
    companyLogo: "../../../../assets/images/logos/logo_sg.webp",
    companyBannerImage: "../../../assets/images/portfolio_sg.webp",
    position: `Front-End Developer`,
    dates: "2022 - Now",
    description: [
        `I have joined the Global Technology Services (GTS) division of Société Générale 
    in august 2022 first as an Angular developer and then both as a React and Angular developer. 
    I worked on projects used by internal technical teams.`,
        `10 developers (8 back, 2 front), 2 PPOs and 2 DevOps engineers.`,
        `Some of front-end projects were attributed to one developer and for some others 
    we both worked on it.`,
    ],
    tasks: [
        `Built new features to existing projects : network operations request offers, 
        display components...`,
        `Participated to workshops with the business and challenge when needed`,
        `Migrated Angular from v12 to v16-18 depending on the project`,
        `Built new projects from scratch with quality tooling`,
        `Built a React and Angular App Starter repo`,
        `Documented projects using MkDocs`,
    ],
    projects: [
        {
            name: "🆘 Red Button project",
            slug: "red-button-project",
            type: "build",
            description: `Following the Digital Operational Resilience Act (DORA),
            this project aims at providing a portal to both protect internal network
            from malicious intents and assure resilience of the network.`,
            technos: [
                "React",
                "TypeScript",
                "Reactstrap",
                "Material UI",
                "Jenkins",
                "Husky",
                "ESLint",
                "Prettier",
                "SonarQube",
                "Vitest",
                "React Testing Library",
            ],
            tasks: [
                "Setup quality and testing tooling",
                "Developed a MVP",
                "Refactored to hexagonal architecture",
            ]
        },
        {
            name: "🛜 Portal for network automation",
            slug: "portal-for-network-automation",
            type: "run",
            description: `This project consist of 2 codebases. The aim is to provide
            an interface to create and handle network operations requests : route 
            openings, instance provisionning, VPN configurations, etc.`,
            technos: [
                "Angular",
                "TypeScript",
                "Angular Material",
                "Bootstrap",
                "Karma",
                "Jasmine",
                "Jenkins",
                "RxJS",
                "ngx-toaster",
                "ngx-translate",
            ],
            tasks: [
                "Added features to handle new kind of requests",
                "Progressively migrated from v12 to v19",
                "Extracted duplicated code into components",
                "Simplified the folder structure to reduce cognitive load"
            ]
        },
        {
            name: "🖥️ Portal for ACI interfaces management",
            slug: "portal-for-aci-interfaces-management",
            type: "build",
            description: `This portal is used by network engineers to 
            trigger Ansible jos that create or modify ACI interfaces.
            Keyboard shortcuts are available to speed up the process and
            notifications are displayed to keep track of previous operations.`,
            technos: [
                "Angular",
                "TypeScript",
                "Angular Material",
                "Bootstrap",
                "Karma",
                "Jasmine",
                "Jenkins",
                "RxJS",
                "ngx-toaster",
            ],
            tasks: [
                "Developed all portal almost from scratch",
                "Setup keyboard shortcuts to improve usability",
                "Migrated Angular from v12 to v18",
            ]
        },
        {
            name: "🖥️ Portal for Proxy exceptions management",
            slug: "portal-for-proxy-exceptions-management",
            type: "run",
            description: `This portal is used by network engineers to 
            monitor lists of exceptions on different proxies.`,
            technos: [
                "Angular",
                "TypeScript",
                "PrimeNG",
                "Bootstrap",
                "Karma",
                "Jasmine",
                "Jenkins",
                "RxJS",
                "ngx-toaster",
            ],
            tasks: [
                "Added new features to manage more resources",
                "Simplified folder structure",
                "Migrated Angular from v12 to v18"
            ]
        },
    ],
}
