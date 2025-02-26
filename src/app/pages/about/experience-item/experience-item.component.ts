import { Component, input, InputSignal } from "@angular/core"
import { IExperience } from "../about"
import { RouterLink } from "@angular/router"
import { NgIcon } from "@ng-icons/core"

@Component({
    selector: "app-experience-item",
    imports: [RouterLink, NgIcon],
    templateUrl: "./experience-item.component.html",
})
export class ExperienceItemComponent {
    public experienceItem: InputSignal<IExperience> = input.required<IExperience>()
}
