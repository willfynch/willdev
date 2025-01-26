import { Component, input, InputSignal } from "@angular/core"
import { BrnSeparatorComponent } from "@spartan-ng/brain/separator"
import { HlmSeparatorDirective } from "@spartan-ng/ui-separator-helm"
import { IProjectDetails } from "./project-details"
import { HlmBadgeDirective } from "@spartan-ng/ui-badge-helm";

@Component({
    selector: "app-project-details",
    imports: [HlmSeparatorDirective, BrnSeparatorComponent, HlmBadgeDirective],
    templateUrl: "./project-details.component.html",
    styleUrl: "./project-details.component.scss",
})
export class ProjectDetailsComponent {

  project: InputSignal<IProjectDetails> = input.required<IProjectDetails>();

}
