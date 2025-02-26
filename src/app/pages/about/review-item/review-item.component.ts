import { Component, input, InputSignal } from "@angular/core"

import { HlmCardContentDirective, HlmCardDirective } from "@spartan-ng/ui-card-helm"
import { IReview } from "../about"
import { RouterLink } from "@angular/router"

@Component({
    selector: "app-review-item",
    imports: [HlmCardContentDirective, HlmCardDirective],
    templateUrl: "./review-item.component.html",
})
export class ReviewItemComponent {
    public review: InputSignal<IReview> = input.required<IReview>()
}
