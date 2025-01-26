import { Component } from "@angular/core"
import { RUCHE_CONTENT } from "./ruche.content"
import { CompanyLogoComponent } from "../company-logo/company-logo.component"
import { HlmBadgeDirective } from "@spartan-ng/ui-badge-helm"
import { BrnSeparatorComponent } from "@spartan-ng/brain/separator"
import { HlmSeparatorDirective } from "@spartan-ng/ui-separator-helm"
import { BreadcrumbComponent } from "../../../components/common/breadcrumb/breadcrumb.component"
import { ProjectDetailsComponent } from "../project-details/project-details.component"

@Component({
    selector: "app-ruche",
    imports: [
        CompanyLogoComponent,
        ProjectDetailsComponent
    ],
    templateUrl: "./ruche.page.html",
})
export class RuchePage {
    public readonly content = RUCHE_CONTENT
}
