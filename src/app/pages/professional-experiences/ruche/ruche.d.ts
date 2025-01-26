import { TTechno } from "../../../utilities/common-types/technos"
import { IProjectDetails } from "../project-details/project-details"

export interface IRucheContent {
    description: string
    company: string
    companyLogo: string
    position: string
    companyBannerImage: string
    dates: string
    activities: IProjectDetails[]
}
