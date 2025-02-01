import { Component, inject, input } from "@angular/core"
import { navItem } from "../../../models/navItem.model"
import { AddClassOnScrollDirective } from "../../../directives/add-class-on-scroll.directive"
import { CommonModule } from "@angular/common"
import { HomeButtonComponent } from "../../common/home-button/home-button.component"
import { INavbarItems } from "./navbar"
import { Router } from "@angular/router"

@Component({
    selector: "app-navbar",
    imports: [HomeButtonComponent, CommonModule],
    standalone: true,
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
    navItems = input<INavbarItems>()
}
