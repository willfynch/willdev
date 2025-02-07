import { Component, inject } from "@angular/core"
import { HeadTitleComponent } from "../../components/common/head-title/head-title.component"
import { ContactFormComponent } from "../../components/contact/contact-form/contact-form.component"
import { ContactButtonsComponent } from "../../components/contact/contact-buttons/contact-buttons.component"
import { SOCIALS } from "./contact.content"
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"
import { EmailjsService } from "../../services/emailjs.service"
import { ToasterService } from "../../services/toaster.service"
import { Subscription } from "rxjs"
import { TContactFormData } from "./contact"
import { ERROR_TOAST, PENDING_TOAST, SUCCESS_TOAST } from "../../utilities/constants/toasts.const"
import { TToast } from "../../utilities/common-types/toast"
import { toast } from "ngx-sonner"

@Component({
    selector: "app-contact",
    imports: [
        HeadTitleComponent,
        ContactFormComponent,
        ContactButtonsComponent,
        ReactiveFormsModule,
    ],
    templateUrl: "./contact.page.html",
    styleUrl: "./contact.page.scss",
})
export class ContactPage {
    public socialLinks = SOCIALS
    private subscription = new Subscription()

    private fb: NonNullableFormBuilder = inject(NonNullableFormBuilder)
    private emailJsService: EmailjsService = inject(EmailjsService)
    private toasterService = inject(ToasterService)

    public contactForm: FormGroup = this.fb.group({
        email: ["", Validators.compose([Validators.email, Validators.required])],
        name: ["", Validators.required],
        message: ["", Validators.required],
    })

    protected sendMessage() {
        const email: TContactFormData = this.contactForm.getRawValue()
        this.toasterService.addToast(PENDING_TOAST);
        this.subscription = this.emailJsService.createEmail(email).subscribe({
            next: () => this.toasterService.addToast(SUCCESS_TOAST),
            error: () => this.toasterService.addToast(ERROR_TOAST),
            complete: () => this.subscription.unsubscribe(),
        })
    }
}
