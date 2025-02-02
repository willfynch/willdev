import { Component } from "@angular/core"
import { ProfileCardComponent } from "../../components/common/profile-card/profile-card.component"
import { HeadTitleComponent } from "../../components/common/head-title/head-title.component"
import { ABOUT_CONTENT, EXPERIENCES } from "./about.content"
import { ExperienceItemComponent } from "../../components/about/experience-item/experience-item.component"
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm"

@Component({
    selector: "app-about",
    imports: [
        ProfileCardComponent,
        ExperienceItemComponent,
        HeadTitleComponent,
        HlmButtonDirective
    ],
    templateUrl: "./about.page.html",
    styleUrl: "./about.page.scss",
})
export class AboutPage {
    aboutText1 = ABOUT_CONTENT.ABOUT_1
    aboutText2 = ABOUT_CONTENT.ABOUT_2

    experiences = EXPERIENCES.sort((a,b)=>b.id-a.id);
}
