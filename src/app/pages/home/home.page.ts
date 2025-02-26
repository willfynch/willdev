import { Component, ElementRef, OnInit, ViewChild } from "@angular/core"
import { ProfileCardComponent } from "../../components/common/profile-card/profile-card.component"
import { HeadTitleComponent } from "../../components/common/head-title/head-title.component"
import gsap from "gsap"
import { RECENT_WORKS } from "./recent-works.content"
import { RecentWorksComponent } from "./recent-works/recent-works.component"
import { FadeInDirective } from "../../directives/animations/fade-in.directive"
@Component({
    selector: "app-home",
    imports: [ProfileCardComponent, HeadTitleComponent, RecentWorksComponent, FadeInDirective],
    templateUrl: "./home.page.html",
    styleUrl: "./home.page.scss",
})
export class HomePage {
    recentWorks = RECENT_WORKS
}
