export interface IExperience {
    startDate: number;
    endDate: TEndDate;
    jobTitle: string;
    company: string;
    description: string;
    id: number;
}

type TEndDate = number | "Now";

export interface ISideProject {
    year: number;
    finished: boolean;
    name: string;
    description: string;
    stack: string[];
    link: string;
    imagePath: string;
}