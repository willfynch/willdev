import { Directive, ElementRef, HostListener } from "@angular/core"

@Directive({
    selector: "[appScrolltop]",
    standalone: true,
})
export class ScrolltopDirective {
    constructor(private el: ElementRef) {}

    @HostListener("click")
    onClick() {
        document.documentElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }
}
