import { Component } from "@angular/core"
import { ProfileCardComponent } from "../../components/common/profile-card/profile-card.component"

@Component({
    selector: "app-home",
    imports: [ProfileCardComponent],
    templateUrl: "./home.page.html",
    styleUrl: "./home.page.scss",
})
export class HomePage {}
