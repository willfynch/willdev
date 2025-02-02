import { IExperience, ISideProject } from "./about";

export enum ABOUT_CONTENT {
    ABOUT_1 = `Hello, I'm Mark, a seasoned UI/UX Designer with 
    over a decade of experience in shaping exceptional digital 
    experiences. My dedication to my craft has led me to create
    meticulously detailed user interfaces for a diverse range of devices.`,
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
        company: "Société Générale",
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
        name: "Web library for self-published authors",
        description: `Website for browsing self-published books and
        articles about self-publishing and creativity. Users can submit books 
        or articles using Tally forms. Website is built only once, using
        NextJS static generation.`,
        stack: ["NextJS", "DaisyUI", "Tally", "Vercel"],
        link: "https://la-librairie-des-autoedites.ducafeetdesrimes.com/",
        imagePath: ""
    }
]
