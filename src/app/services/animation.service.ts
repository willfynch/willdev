import { Injectable } from "@angular/core"
import gsap from "gsap"

@Injectable({
    providedIn: "root",
})
export class AnimationService {
    fadeInUp(element: HTMLElement, delay: number) {
        gsap.set(element, {
            y: -50,
            opacity: 0,
        })
        gsap.to(element, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: delay,
            ease: "power2.out",
        })
    }
}
