import { Component } from "@angular/core"
import { CompanyLogoComponent } from "../company-logo/company-logo.component"
import { SOGE_CONTENT } from "./soge.content"
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm"
import { HlmBadgeDirective } from "@spartan-ng/ui-badge-helm"
import { BreadcrumbComponent } from "../../../components/common/breadcrumb/breadcrumb.component";
import { ProjectDetailsComponent } from "../project-details/project-details.component";

@Component({
    selector: "app-soge",
    imports: [
    CompanyLogoComponent,
    ProjectDetailsComponent,
    ProjectDetailsComponent
],
    templateUrl: "./soge.page.html",
    styleUrl: "./soge.page.scss",
})
export class SogePage {
    public readonly content = SOGE_CONTENT
}
