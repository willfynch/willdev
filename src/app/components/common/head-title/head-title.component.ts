import { Component, computed, inject, input, InputSignal, Signal, signal, WritableSignal } from "@angular/core"
import { TPath } from "../../../utilities/common-types/paths"
import { THeadTitle } from "./head-title"
import { filter, interval, map, Subscription } from "rxjs"
import { NgStyle } from "@angular/common"
import { toSignal } from "@angular/core/rxjs-interop"
import { NavigationEnd, Router } from "@angular/router"

@Component({
    selector: "app-head-title",
    imports: [NgStyle],
    templateUrl: "./head-title.component.html",
    styleUrl: "./head-title.component.scss",
})
export class HeadTitleComponent {
    
    private router = inject(Router);
    
    public hellos: string[] = ["Hello.", "Ciao.", "Bonjour.", "Olà."]
    public translatedStyle: Signal<Record<string, string>> = computed(() => {
        return { transform: `translateY(${-this.translationValue()}px)` }
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

    private currentUrl: Signal<string> = toSignal(
        this.router.events.pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd),
            map((event) => event.urlAfterRedirects)
        ),
        { initialValue: this.router.url }
    )

    private checkIfHelloArrayUsed(): boolean {
        return this.currentUrl() === "/home"
    }

    private setTitle(): THeadTitle {
        switch (this.currentUrl()) {
            case "/blog":
                return "Blog."
            case "/contact":
                return "Get in touch."
            case "/about":
                return "About me."
            default:
                return "About me."
        }
    }
}
