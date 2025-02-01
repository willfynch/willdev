import { Component, computed, input, signal } from "@angular/core"
import { TPath } from "../../../utilities/common-types/paths"
import { THeadTitle } from "./head-title"
import { interval } from "rxjs"

@Component({
    selector: "app-head-title",
    imports: [],
    templateUrl: "./head-title.component.html",
    styleUrl: "./head-title.component.scss",
})
export class HeadTitleComponent {
    public hellos: string[] = ["Hello.", "Ciao.", "Bonjour."]
    value: number = 0

    private helloIntervalSubscription = interval(2000).subscribe({
        next: () => {
            if (this.value === 162) {
                this.value = 0
            } else {
                this.value += 54
            }
        },
    })

    page = input<TPath>()
    isHelloArrayUsed = computed<boolean>(() => this.checkIfHelloArrayUsed())
    title = computed<THeadTitle>(() => this.setTitle())

    ngOnDestroy() {
        this.helloIntervalSubscription.unsubscribe()
    }

    checkIfHelloArrayUsed() {
        if (this.page() === "/about" || this.page() === "/home") {
            return true
        } else {
            return false
        }
    }

    setTitle(): THeadTitle {
        switch (this.page()) {
            case "/portfolio":
                return "Portfolio"
            case "/contact":
                return "Get in touch"
            default:
                return "This page does not exist"
        }
    }
}
