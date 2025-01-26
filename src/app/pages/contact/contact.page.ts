import { Component, inject, signal, WritableSignal } from "@angular/core"
import { HeadTitleComponent } from "../../components/common/head-title/head-title.component"
import { ContactFormComponent } from "./contact-form/contact-form.component"
import { ContactButtonsComponent } from "./contact-buttons/contact-buttons.component"
import { SOCIALS } from "./contact.content"
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"
import { EmailjsService } from "../../services/emailjs.service"
import { Subscription } from "rxjs"
import { TContactFormData, TEmailAlertStatus } from "./contact"

@Component({
    selector: "app-contact",
    imports: [HeadTitleComponent, ContactFormComponent, ContactButtonsComponent, ReactiveFormsModule],
    templateUrl: "./contact.page.html",
    styleUrl: "./contact.page.scss",
})
export class ContactPage {
    public socialLinks = SOCIALS
    private subscription = new Subscription()

    private fb: NonNullableFormBuilder = inject(NonNullableFormBuilder)
    private emailJsService: EmailjsService = inject(EmailjsService)

    public emailAlertStatus: WritableSignal<TEmailAlertStatus> = signal<TEmailAlertStatus>("hidden")

    public contactForm: FormGroup = this.fb.group({
        email: ["", Validators.compose([Validators.email, Validators.required])],
        name: ["", Validators.required],
        message: ["", Validators.required],
    })

    protected sendMessage() {
        const email: TContactFormData = this.contactForm.getRawValue()
        this.emailAlertStatus.set("pending")
        this.subscription = this.emailJsService.createEmail(email).subscribe({
            next: () => {
                this.emailAlertStatus.set("success")
            },
            error: () => {
                this.emailAlertStatus.set("error")
                this.subscription.unsubscribe()
                setTimeout(() => {
                    this.emailAlertStatus.set("hidden")
                }, 5000)
            },
            complete: () => {
                this.subscription.unsubscribe()
                setTimeout(() => {
                    this.emailAlertStatus.set("hidden")
                }, 5000)
            },
        })
    }
}
