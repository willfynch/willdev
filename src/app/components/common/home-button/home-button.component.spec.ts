import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingHarness } from "@angular/router/testing"
import { HomeButtonComponent } from "./home-button.component"
import { ComponentRef } from "@angular/core"

describe("HomeButtonComponent", () => {
    let component: HomeButtonComponent
    let componentRef: ComponentRef<HomeButtonComponent>
    let fixture: ComponentFixture<HomeButtonComponent>
    const harness = RouterTestingHarness.create()

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeButtonComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(HomeButtonComponent)
        component = fixture.componentInstance
        componentRef = fixture.componentRef
        componentRef.setInput("buttonNavigateTo", "projects")
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })

    it('should navigate to path "projects"', () => {})
})
