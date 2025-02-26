import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"

@Component({
    selector: "app-footer",
    imports: [CommonModule],
    standalone: true,
    templateUrl: "./footer.component.html",
})
export class FooterComponent {
    currentRoute: string | undefined = ""
    currentDate = new Date().getFullYear()
}
