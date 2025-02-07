import { CommonModule } from "@angular/common"
import { Component, inject, signal, WritableSignal } from "@angular/core"
import { NavigationEnd, Router, RouterOutlet } from "@angular/router"
import { provideIcons } from "@ng-icons/core"
import { lucideArrowUpRight, lucideBriefcaseBusiness, lucideCopy, lucideDownload, lucideGithub, lucideHouse, lucideLinkedin, lucideMail, lucideUser } from "@ng-icons/lucide"
import { NavbarComponent } from "./components/layout/navbar/navbar.component"
import { NAV_ITEMS } from "./utilities/constants/navitems.const"
import { Subscription } from "rxjs"
import { INavbarButton, INavbarItems } from "./components/layout/navbar/navbar"
import { TPath } from "./utilities/common-types/paths"
import { FooterComponent } from "./components/layout/footer/footer.component"

@Component({
    selector: "app-root",
    imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
    standalone: true,
    providers: [
        provideIcons({
            lucideUser,
            lucideBriefcaseBusiness,
            lucideMail,
            lucideHouse,
            lucideArrowUpRight,
            lucideDownload,
            lucideLinkedin,
            lucideGithub,
            lucideCopy
        }),
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    protected navItems: WritableSignal<INavbarItems> = signal<INavbarItems>(NAV_ITEMS)
    

    router = inject(Router)

    changeActiveButtonOnNavigationEnd: Subscription = this.router.events.subscribe({
        next: (event) => {
            if (event instanceof NavigationEnd) {
                this.activateButtonCorrespondingToCurrentRoute(event.url as TPath)
            }
        },
    })

    ngOnDestroy() {
        this.changeActiveButtonOnNavigationEnd.unsubscribe()
    }

    activateButtonCorrespondingToCurrentRoute(path: TPath) {
        const updatedNavItems = this.navItems().map((navbarItem: INavbarButton) => {
            if (path === navbarItem.linkPath) {
                navbarItem.active = true
            } else {
                navbarItem.active = false
            }
            return navbarItem
        })
        this.navItems.set(updatedNavItems)
    }


}
