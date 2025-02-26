import { Component } from "@angular/core"
import { ProfileCardComponent } from "../../components/common/profile-card/profile-card.component"
import { HeadTitleComponent } from "../../components/common/head-title/head-title.component"

@Component({
    selector: "app-home",
    imports: [ProfileCardComponent, HeadTitleComponent],
    templateUrl: "./home.page.html",
    styleUrl: "./home.page.scss",
})
export class HomePage {}
