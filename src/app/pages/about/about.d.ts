export interface IExperience {
    startDate: number
    endDate: TEndDate
    jobTitle: string
    company: string
    description: string
    id: number
}

type TEndDate = number | "Now"
type TTechno = "DaisyUI" | "Next.js" | "TailwindCSS" | "Vercel" | "Tally";

export interface ISideProject {
    year: number
    finished: boolean
    name: string
    description: string
    stack: TTechno[]
    link: string
    imagePath: "librairie-des-auto-edites.webp"
}
