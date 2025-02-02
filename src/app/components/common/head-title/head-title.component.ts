import { Component, computed, input, signal } from "@angular/core"
import { TPath } from "../../../utilities/common-types/paths"
import { THeadTitle } from "./head-title"
import { interval } from "rxjs"
import { NgStyle } from "@angular/common"

@Component({
    selector: "app-head-title",
    imports: [NgStyle],
    templateUrl: "./head-title.component.html",
    styleUrl: "./head-title.component.scss",
})
export class HeadTitleComponent {
    public hellos: string[] = ["Hello.", "Ciao.", "Bonjour.", "Olà."]
    translationValue = signal(0)
    translatedStyle = computed(() => {
        return {'transform': `translateY(${-this.translationValue()}px)`}
    })

    helloIntervalSubscription = interval(2000).subscribe({
        next: () => {
            if (this.translationValue() === 162) {
                this.translationValue.set(0)
            } else {
                this.translationValue.update((value) => value + 54)
            }
        },
        error: (error) => console.log(error),
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
                return "Portfolio"
        }
    }
}
