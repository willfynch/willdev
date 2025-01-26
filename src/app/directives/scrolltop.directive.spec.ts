import { ElementRef } from "@angular/core"
import { ScrolltopDirective } from "./scrolltop.directive"

describe("ScrolltopDirective", () => {
    it("should create an instance", () => {
        const el: ElementRef = new ElementRef<any>("")
        const directive = new ScrolltopDirective(el)
        expect(directive).toBeTruthy()
    })
})
