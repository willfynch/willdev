import { ComponentFixture, TestBed } from "@angular/core/testing"

import { BreadcrumbComponent } from "./breadcrumb.component"
import { ActivatedRoute } from "@angular/router"

describe("BreadcrumbComponent", () => {
    let component: BreadcrumbComponent
    let fixture: ComponentFixture<BreadcrumbComponent>

    const fakeActivatedRoute = {
        snapshot: { data: { } }
      } as ActivatedRoute;

      const mockMapLabel = (label:string):string => {
        const map: Record<string,string> = {
            'first':'First',
            'second':'Second',
            'third':'Third'
        }
        return map[label]
      }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BreadcrumbComponent],
            providers: [{provide: ActivatedRoute, useValue: fakeActivatedRoute}
            ]
        }).compileComponents()

        fixture = TestBed.createComponent(BreadcrumbComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })

    it("should create correct breadcrum data", () => {
        const path = ["first", "second", "third"]
        const breadcrumb = [
            {
                label: "First",
                path: "first",
            },
            {
                label: "Second",
                path: "first/second",
            },
            {
                label: "Third",
                path: "first/second/third",
            },
        ]
        spyOn(component, 'mapToLabel').and.callFake(mockMapLabel)
        
        expect(component.buildBreadCrumb(path)).toEqual(breadcrumb);
    })
})
