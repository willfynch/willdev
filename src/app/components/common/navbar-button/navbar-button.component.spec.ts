import { ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingHarness } from "@angular/router/testing"
import { NavbarButtonComponent } from "./navbar-button.component"
import { ComponentRef } from "@angular/core"

describe("NavbarButtonComponent", () => {
    let component: NavbarButtonComponent
    let componentRef: ComponentRef<NavbarButtonComponent>
    let fixture: ComponentFixture<NavbarButtonComponent>
    const harness = RouterTestingHarness.create()

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavbarButtonComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(NavbarButtonComponent)
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
