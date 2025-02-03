import { IExperience, ISideProject } from "./about";

export enum ABOUT_CONTENT {
    ABOUT_1 = `Hello, I'm William, a seasoned Front-End Developer, using mostly Angular,
    with more than 3 years of experience in building solid and performant web apps. 
    I believe in software craftmanship and I am building my path accordingly.`,
    ABOUT_2 = `Throughout my career, I've been driven by a passion for combining 
    aesthetics and functionality to craft user interfaces that not only look great 
    but also provide intuitive and seamless interactions. `,
}

export const EXPERIENCES: IExperience[] = [
    {
        startDate: 2021,
        endDate: 2022,
        jobTitle: "Fullstack Developer",
        company: "Capgemini - La Ruche FS Paris",
        description: `
        Worked at an internal lab for two associations : AFJ and 
        Indarra. Built forms using Angular and NodeJS, used Terraform to
        set up a staging environment and delivered a fully functional 
        website with Angular / Scully and headless CMS Strapi.`,
        id: 0
    },
    {
        startDate: 2022,
        endDate: "Now",
        jobTitle: "Angular Developer",
        company: "Société Générale, Paris",
        description: `
        Building and maintaining web portals used by hundreds 
        of network operators.`,
        id: 1
    },
]

export const SIDE_PROJECTS: ISideProject[] = [
    {
        year: 2024,
        finished: true,
        name: "Self-published authors' library",
        description: `Website for browsing self-published books and
        articles about self-publishing and creativity.`,
        stack: ["Next.js", "DaisyUI", "Tally", "Vercel"],
        link: "https://la-librairie-des-autoedites.ducafeetdesrimes.com/",
        imagePath: "librairie-des-auto-edites.webp"
    }
]
