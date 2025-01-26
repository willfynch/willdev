export interface IExperience {
    startDate: number
    endDate: TEndDate
    jobTitle: string
    company: string
    description: string
    id: number
    slug: string
}

type TEndDate = number | "Now"

export interface ISideProject {
    year: number
    finished: boolean
    name: string
    description: string
    stack: TTechno[]
    link: string
    imagePath: "librairie-des-auto-edites.webp"
}

export interface IReview {
    review: string
    reviewerName: string
    reviewerTitle: string
    reviewerLinkedInProfile: string
    reviewerAvatar: string
    reviewerAvatarPlaceholder: string
}
