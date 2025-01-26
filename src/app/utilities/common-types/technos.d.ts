export type TTechno =
    | TFrontEndFramework
    | TStylingTool
    | TDevOps
    | TQualityTooling
    | TTestingTooling
    | TLib
    | TLanguage
    | TBackendTechno
    | TDatabase
    | TCloudProvider

export type TFrontEndFramework = "Angular" | "React" | "Next.js" | "Scully"
export type TBackendTechno = "Node.js" | "Express" | "NestJS" | "Strapi"
export type TDatabase = "MongoDB" | "PostgreSQL" | "MySQL" | "SQLite"
export type TLanguage = "JavaScript" | "TypeScript"
export type TStylingTool =
    | "DaisyUI"
    | "TailwindCSS"
    | "Bootstrap"
    | "Reactstrap"
    | "Internal design system"
    | "Material UI"
    | "Angular Material"
    | "PrimeNG"
    | "Sass"
export type TDevOps = "Vercel" | "Jenkins" | TAWSResources | "Terraform"
export type TCloudProvider = "AWS" | "GCP" | "Azure"
export type TAWSResources =
    | "S3"
    | "CloudFront"
    | "Lambda"
    | "API Gateway"
    | "CodePipeline"
    | "CodeBuild"
    | "Cloudformation"
    | "EC2"
    | "DynamoDB"
    | "RDS"
export type TQualityTooling = "SonarQube" | "Husky" | "Prettier" | "ESLint"
export type TTestingTooling = "Jest" | "Vitest" | "React Testing Library" | "Karma" | "Jasmine" | "Cypress"
export type TLib = "RxJS" | "ngx-toaster" | "ngx-translate"
