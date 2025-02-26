import { ComponentFixture, TestBed } from "@angular/core/testing"

import { SideProjectItemComponent } from "./side-project-item.component"

describe("SideProjectItemComponent", () => {
    let component: SideProjectItemComponent
    let fixture: ComponentFixture<SideProjectItemComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SideProjectItemComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(SideProjectItemComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
