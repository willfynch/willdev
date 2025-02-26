import { IExperience, IReview, ISideProject } from "./about"

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
        id: 0,
        slug: "fullstack-developer-ruche",
    },
    {
        startDate: 2022,
        endDate: "Now",
        jobTitle: "Front-End Developer",
        company: "Société Générale, Paris",
        description: `
        As a Capgemini consultant, I have been building and / or maintaining 5 web applications used by hundreds 
        of network operators.`,
        id: 1,
        slug: "front-end-developer-societe-generale",
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
        imagePath: "librairie-des-auto-edites.webp",
    },
]

export const REVIEWS: IReview[] = [
    {
        review: `William has been working as a front end 
        developer at SG for many years now. Having worked 
        with him on many projects, and he always goes the extra mile 
        to ensure the company standards and client requirements are met.`,
        reviewerName: "Abdesslem AMRI",
        reviewerTitle: "Senior Python developer at Société Générale",
        reviewerAvatar: "",
        reviewerAvatarPlaceholder: "AM",
        reviewerLinkedInProfile: "https://www.linkedin.com/in/abdesslem-amri",
    },
    {
        review: `Working with William has been a great human and professional experience.
        Driven and meticulous, he pays attention to details. I recommand working
        with him.`,
        reviewerName: "Arnaud GUETIN",
        reviewerTitle: "Senior Angular developer at Société Générale",
        reviewerAvatar: "",
        reviewerAvatarPlaceholder: "",
        reviewerLinkedInProfile: "https://www.linkedin.com/in/arnaud-guetin/",
    },
    {
        review: `William has relational and technical abilities
        that allow him to join any project team. I recommend him.`,
        reviewerName: "Ahmed CHOUAF",
        reviewerTitle: "Product Owner at Société Générale",
        reviewerLinkedInProfile: "https://www.linkedin.com/in/ahmed-chouaf-42984283",
        reviewerAvatar: "",
        reviewerAvatarPlaceholder: "",
    },
    {
        review: `I worked with William on a microservices project. 
        He was working on the Angular front-end. 
William is very curious and diligent in his work.
It was a pleasure to work with him on the same project, and 
the teamwork went very well.`,
        reviewerName: "Robin LANGLOIS",
        reviewerTitle: "Python developer at Société Générale",
        reviewerLinkedInProfile: "https://www.linkedin.com/in/robin-langlois",
        reviewerAvatar: "",
        reviewerAvatarPlaceholder: "",
    },
]
