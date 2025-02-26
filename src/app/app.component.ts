import { CommonModule } from "@angular/common"
import { Component, inject, signal, WritableSignal } from "@angular/core"
import { NavigationEnd, Router, RouterOutlet } from "@angular/router"
import { provideIcons } from "@ng-icons/core"
import {
    lucideArrowUpRight,
    lucideBriefcaseBusiness,
    lucideCopy,
    lucideDownload,
    lucideFeather,
    lucideGithub,
    lucideHouse,
    lucideLinkedin,
    lucideMail,
    lucideMailCheck,
    lucideMailX,
    lucideUser,
} from "@ng-icons/lucide"
import { NavbarComponent } from "./components/layout/navbar/navbar.component"
import { NAV_ITEMS } from "./utilities/constants/navitems.const"
import { INavbarItems } from "./components/layout/navbar/navbar"
import { FooterComponent } from "./components/layout/footer/footer.component"
import { FadeInDirective } from "./directives/animations/fade-in.directive"
import { BreadcrumbComponent } from "./components/common/breadcrumb/breadcrumb.component"

@Component({
    selector: "app-root",
    imports: [
        FadeInDirective,
        CommonModule,
        RouterOutlet,
        NavbarComponent,
        FooterComponent,
        BreadcrumbComponent,
    ],
    standalone: true,
    providers: [
        provideIcons({
            lucideUser,
            lucideFeather,
            lucideMail,
            lucideHouse,
            lucideArrowUpRight,
            lucideDownload,
            lucideLinkedin,
            lucideGithub,
            lucideCopy,
            lucideMailX,
            lucideMailCheck,
        }),
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    protected navItems: WritableSignal<INavbarItems> = signal<INavbarItems>(NAV_ITEMS)
}
