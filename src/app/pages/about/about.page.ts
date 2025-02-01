import { Component } from "@angular/core"
import { ProfileCardComponent } from "../../components/common/profile-card/profile-card.component"
import { HeadTitleComponent } from "../../components/common/head-title/head-title.component"
import { ABOUT_CONTENT } from "./about.content"

@Component({
    selector: "app-about",
    imports: [ProfileCardComponent, HeadTitleComponent, HeadTitleComponent],
    templateUrl: "./about.page.html",
    styleUrl: "./about.page.scss",
})
export class AboutPage {

    aboutText = ABOUT_CONTENT.ABOUT;

}
