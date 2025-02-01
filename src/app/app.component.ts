import { CommonModule } from "@angular/common"
import { Component, inject, signal } from "@angular/core"
import { NavigationEnd, Router, RouterOutlet } from "@angular/router"
import { provideIcons } from "@ng-icons/core"
import {
    lucideBriefcaseBusiness,
    lucideContact,
    lucideHouse,
    lucideMail,
    lucideUser,
} from "@ng-icons/lucide"

import { NavbarComponent } from "./components/layout/navbar/navbar.component"
import { NAV_ITEMS } from "./utilities/constants/navitems.const"
import { Subscription } from "rxjs"
import { INavbarItems, TPath } from "./components/layout/navbar/navbar"
import { IHomeButton } from "./components/common/home-button/home-button"

@Component({
    selector: "app-root",
    imports: [CommonModule, RouterOutlet, NavbarComponent],
    standalone: true,
    providers: [
        provideIcons({
            lucideUser,
            lucideBriefcaseBusiness,
            lucideMail,
            lucideHouse,
        }),
    ],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    navItems = signal<INavbarItems>(NAV_ITEMS)
    routerSubscription: Subscription = new Subscription()
    router = inject(Router)
    ngOnInit() {
        this.routerSubscription = this.router.events.subscribe({
            next: (event) => {
                if (event instanceof NavigationEnd) {
                    this.activateButtonCorrespondingToCurrentRoute(
                        event.url as TPath
                    )
                }
            },
        })
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe()
    }

    activateButtonCorrespondingToCurrentRoute(path: TPath) {
        const updatedNavItems = this.navItems().map(
            (navbarItem: IHomeButton) => {
                if (path === navbarItem.buttonNavigateTo) {
                    navbarItem.active = true
                } else {
                    navbarItem.active = false
                }
                return navbarItem
            }
        )
        this.navItems.set(updatedNavItems)
    }
}
