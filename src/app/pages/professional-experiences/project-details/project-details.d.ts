import { TTechno } from "../../../utilities/common-types/technos"

export interface IProjectDetails {
    name: string
    type?: "build" | "run" 
    slug?: string
    description: string
    technos?: TTechno[]
    logo?: string
    tasks?: string[]
}
