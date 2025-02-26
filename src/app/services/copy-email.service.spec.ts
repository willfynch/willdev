import { TestBed } from "@angular/core/testing"

import { CopyEmailService } from "./copy-email.service"

describe("CopyEmailService", () => {
    let service: CopyEmailService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(CopyEmailService)
    })

    it("should be created", () => {
        expect(service).toBeTruthy()
    })
})
