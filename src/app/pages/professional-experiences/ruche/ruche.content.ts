import { IRucheContent } from "./ruche";

export const RUCHE_CONTENT: IRucheContent = {
    company: `La Ruche FS at Capgemini`,
    companyLogo: "../../../../assets/images/logos/logo_capgemini.webp",
    companyBannerImage: "../../../assets/images/la-ruche-capgemini.webp",
    position: `Full Stack Developer`,
    description: `During my first year at Capgemini, I held multiple roles at
    La Ruche FS, an internal lab that deploys projects for associative actors
    for skill-based sponsorship.`,
    dates: "2021 - 2022",
    activities: [
        {
            name: "📈 Lab manager",
            description: `I was in charge of the lab's management, including
            welcoming the new arrivants, monitoring projects, reporting to
            the Core Team and some administrative tasks.`,
        },
        {
            name: "Management app for Association Foyer Jorbalan",
            logo: "../../../../assets/images/logos/logo_afj.webp",
            description: `The association aims at helping women to escape
            people trafficking and to reintegrate into society. The app is 
            used by the association's employees to manage the beneficiaries 
            entrance and follow their journey in the association.`,
            technos: ["Angular","TypeScript", "Bootstrap", "Node.js", "Express", "MongoDB", "AWS", "Terraform"],
            tasks: [
                "Enhanced existing forms with new fields",
                "Implemented a password reset feature",
                "Worked on a statistics page",
                "Used Terraform to setup staging environment",
                "Held multiple workshops with the association",
                "Configured and beta-tested an internal automated testing project"
            ]
        }, 
        {
            name: "An editorial website for Indarra",
            description: `Indarra is an endowment fund that supports 
            projects in the Basque Country. The website is used to 
            present the projects and the fund.`,
            logo: "../../../../assets/images/logos/logo_indarra.webp",
            technos: ["Angular", "Scully","TypeScript", "Strapi", "PostgreSQL", "Express", "AWS", "Cloudformation"],
            tasks: [
                "Created a custom webhook to trigger a rebuild of the website",
                "Templatized the whole website infrastructure using Cloudformation",
                "Monitored beta version deployment",
                "Gathered feedback and managed a 3 developers team for the production version"
            ]
        }
    ]
}
