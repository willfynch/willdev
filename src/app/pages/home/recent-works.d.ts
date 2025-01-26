export interface IRecentWork {
    logo: string;
    name: string;
    description: string;
    link: {
        path: string;
        external?: boolean;
    };
    banner: string;
}