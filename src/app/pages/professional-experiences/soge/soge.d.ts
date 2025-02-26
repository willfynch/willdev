import { TStack, TTechno } from "../../../utilities/common-types/technos"
import { IProjectDetails } from "../project-details/project-details"

export interface ISogeContent {
    company: string
    companyLogo: string
    dates: string
    companyBannerImage: string
    position: string
    description: string[]
    tasks?: string[];
    projects: IProjectDetails[]
}
