import { Injectable, signal, WritableSignal } from "@angular/core"
import { CONTACT } from "../utilities/constants/contact.const"

@Injectable({
    providedIn: "root",
})
export class CopyEmailService {
    public copyEmailText: WritableSignal<string> = signal<string>("Email")

    public copyEmail(): void {
        this.copyEmailText.set("Copied !")
        navigator.clipboard.writeText(CONTACT.EMAIL)
        setTimeout(() => {
            this.copyEmailText.set("Email")
        }, 800)
    }
}
