import { Component, computed, input, InputSignal, Signal, signal, WritableSignal } from "@angular/core"
import { TPath } from "../../../utilities/common-types/paths"
import { THeadTitle } from "./head-title"
import { interval, Subscription } from "rxjs"
import { NgStyle } from "@angular/common"

@Component({
    selector: "app-head-title",
    imports: [NgStyle],
    templateUrl: "./head-title.component.html",
    styleUrl: "./head-title.component.scss",
})
export class HeadTitleComponent {
    
    public hellos: string[] = ["Hello.", "Ciao.", "Bonjour.", "Olà."];
    public page: InputSignal<TPath> = input.required<TPath>()
    public translatedStyle: Signal<Record<string, string>> = computed(() => {
        return {'transform': `translateY(${-this.translationValue()}px)`}
    })

    protected isHelloArrayUsed: Signal<boolean> = computed<boolean>(() => this.checkIfHelloArrayUsed())
    protected title: Signal<THeadTitle> = computed<THeadTitle>(() => this.setTitle())
    
    private translationValue: WritableSignal<number> = signal(0)
    private helloIntervalSubscription: Subscription = interval(2000).subscribe({
        next: () => {
            if (this.translationValue() === 162) {
                this.translationValue.set(0)
            } else {
                this.translationValue.update((value) => value + 54)
            }
        },
        error: (error) => console.log(error),
    })

    ngOnDestroy(): void {
        this.helloIntervalSubscription.unsubscribe()
    }

    private checkIfHelloArrayUsed(): boolean {
        return (["/home", "/about"] as Array<TPath>).includes(this.page()) 
    }

    private setTitle(): THeadTitle {
        switch (this.page()) {
            case "/portfolio":
                return "Portfolio."
            case "/contact":
                return "Get in touch."
            default:
                return "Portfolio."
        }
    }
}
