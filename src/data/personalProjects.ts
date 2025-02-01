import { PersonalProject } from "../app/models/personnal-project.model"

export const personalProjects: PersonalProject[] = [
    {
        title: "Miora Sophrologie",
        description: "Site vitrine",
        tasks: ["Maquettage", "Développement", "Mise en production"],
        url: "https://miorasophrologie.fr",
        technos: ["NextJS", "TailwindCSS", "TypeScript", "Netlify", "Figma"],
        image: "portfolio_miorasophrologie.webp",
    },
    {
        title: "Du Café et du Code",
        description: "Site vitrine et éditorial - en cours",
        tasks: ["Maquettage", "Développement", "Mise en production"],
        url: "https://ducafeetducode.com",
        technos: [
            "NextJS",
            "TinaCMS",
            "TailwindCSS",
            "TypeScript",
            "Vercel",
            "Figma",
            "Hook Form",
        ],
        image: "portfolio_ducafeetducode.webp",
    },
]
