import { Component, input, InputSignal } from "@angular/core"
import { ISideProject } from "../about"
import { NgIcon } from "@ng-icons/core"

@Component({
    selector: "app-side-project-item",
    imports: [NgIcon],
    templateUrl: "./side-project-item.component.html",
})
export class SideProjectItemComponent {
    public sideProjectItem: InputSignal<ISideProject> = input.required<ISideProject>()
}
