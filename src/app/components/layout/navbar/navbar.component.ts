import { Component, input, InputSignal } from "@angular/core"
import { CommonModule } from "@angular/common"
import { INavbarItems } from "./navbar"
import { NavbarButtonComponent } from "../../common/navbar-button/navbar-button.component"
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm"
import { FadeInDirective } from "../../../directives/animations/fade-in.directive"

@Component({
    selector: "app-navbar",
    imports: [NavbarButtonComponent, CommonModule, HlmButtonDirective, FadeInDirective],
    standalone: true,
    templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
    navItems: InputSignal<INavbarItems> = input.required<INavbarItems>()
}
