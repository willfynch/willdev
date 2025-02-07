import { inject, Injectable } from "@angular/core"
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser"
import { environment } from "../../environments/environment"
import { TContactFormData } from "../pages/contact/contact"
import { from, Observable, Subscription } from "rxjs"
import { ToasterService } from "./toaster.service"
import { TToast } from "../utilities/common-types/toast"
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
        return this.http.get<EmailJSResponseStatus>("https://603a6db0f1d6aa0017a109c2.mockapi.io/api/:endpoint");
        return from(emailjs.send(environment.EMAILJS_SERVICE_ID, environment.EMAILJS_TEMPLATE_ID, email))
    }
}
