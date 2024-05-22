import { Injectable } from '@angular/core';
import { Email } from '../models/email.model';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class EmailjsService {

  constructor() {
    emailjs.init({
      publicKey: environment.EMAILJS_PUBLIC_KEY,
      blockHeadless: true,
      limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 20000,
      },
    });
   }

  sendMail(email: any){
    emailjs.send(environment.EMAILJS_SERVICE_ID, environment.EMAILJS_TEMPLATE_ID, email)
  }


}
