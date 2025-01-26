import { Component } from "@angular/core"
import { ProfileCardComponent } from "../../components/common/profile-card/profile-card.component"
import { HeadTitleComponent } from "../../components/common/head-title/head-title.component"
import { ABOUT_CONTENT, EXPERIENCES, REVIEWS, SIDE_PROJECTS } from "./about.content"
import { ExperienceItemComponent } from "./experience-item/experience-item.component"
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm"
import { SideProjectItemComponent } from "./side-project-item/side-project-item.component"
import { ReviewItemComponent } from "./review-item/review-item.component"
import { FadeInDirective } from "../../directives/animations/fade-in.directive"

@Component({
    selector: "app-about",
    imports: [
        ProfileCardComponent,
        ExperienceItemComponent,
        HeadTitleComponent,
        HlmButtonDirective,
        SideProjectItemComponent,
        ReviewItemComponent
    ],
    templateUrl: "./about.page.html",
    styleUrl: "./about.page.scss",
})
export class AboutPage {
    aboutText1 = ABOUT_CONTENT.ABOUT_1
    aboutText2 = ABOUT_CONTENT.ABOUT_2

    experiences = EXPERIENCES.sort((a, b) => b.id - a.id)
    sideProjects = SIDE_PROJECTS

    reviews = REVIEWS
}
