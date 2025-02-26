import { inject, Injectable } from "@angular/core"
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"
import { environment } from "../../environments/environment"
import { TContactFormData } from "../pages/contact/contact"
import { from, Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"


@Injectable({
    providedIn: "root",
})
export class EmailjsService {
    private http = inject(HttpClient);



    constructor() {
        emailjs.init({
            publicKey: environment.EMAILJS_PUBLIC_KEY,
            blockHeadless: true,
            limitRate: {
                // Set the limit rate for the application
                id: "app",
                // Allow 1 request per 10s
                throttle: 20000,
            },
        })
    }



    createEmail(email: TContactFormData): Observable<EmailJSResponseStatus> {
        return from(emailjs.send(environment.EMAILJS_SERVICE_ID, environment.EMAILJS_TEMPLATE_ID, email))
    }
}
