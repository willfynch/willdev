import { Component, input, InputSignal } from "@angular/core"
import { HlmCardDirective, HlmCardContentDirective } from "@spartan-ng/ui-card-helm"
import { FadeInDirective } from "../../../directives/animations/fade-in.directive"
import { NgOptimizedImage } from "@angular/common"
import { IRecentWork } from "../recent-works"
import { RouterLink } from "@angular/router"

@Component({
    selector: "app-recent-works",
    imports: [HlmCardDirective, HlmCardContentDirective, NgOptimizedImage, RouterLink],
    templateUrl: "./recent-works.component.html",
    styleUrl: "./recent-works.component.scss",
})
export class RecentWorksComponent {
    work: InputSignal<IRecentWork> = input.required<IRecentWork>()
}
