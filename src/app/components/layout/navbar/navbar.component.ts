import { Component, input } from "@angular/core"
import { CommonModule } from "@angular/common"
import { INavbarItems } from "./navbar"
import { NavbarButtonComponent } from "../../common/navbar-button/navbar-button.component"

@Component({
    selector: "app-navbar",
    imports: [NavbarButtonComponent, CommonModule],
    standalone: true,
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
    navItems = input<INavbarItems>()
}
