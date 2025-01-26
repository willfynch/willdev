import { IRecentWork } from "./recent-works"

export const RECENT_WORKS: IRecentWork[] = [
    {
        name: "👨‍💻 Front-End Developer at Société Générale",
        description: "Used Angular and React to build GUIs for network automation apps.",
        link: { path: "about/front-end-developer-societe-generale" },
        logo: "../../assets/images/logos/logo_sg.webp",
        banner: "../../assets/images/portfolio_sg.webp",
    },
    {
        name: "📚 Self-published authors' library",
        description: `Website for browsing self-published 
        books and articles about self-publishing and creativity.`,
        link: {
            path: "https://la-librairie-des-autoedites.ducafeetdesrimes.com/",
            external: true,
        },
        logo: "../../assets/images/side-projects/librairie-des-auto-edites.webp",
        banner: "../../assets/images/side-projects/librairie-des-auto-edites.webp"
    },
]
