import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {Contact } from '../../../models/contact.model';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { EmailjsService } from '../../../services/emailjs.service';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  ERROR = {
    REQUIRED: 'Requis',
    EMAIL_ERROR: 'Entrez une adresse email valide : exemple@exemple.fr',    
  }
  SUBMIT = 'Envoyer'


  contactForm: FormGroup

  constructor(private formBuilder: FormBuilder, private emailJs: EmailjsService){
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      body: ['', Validators.required]
    })
  }

  ngOnInit(){
   this.contactForm.reset()   
   this.contactForm.valueChanges.subscribe(value=>console.log(this.contactForm.get('email')))
  }

  submitContactForm(){
    if(this.contactForm.invalid){
      this.contactForm.markAllAsTouched();
      return;
    }
    const payload: Contact = {
      name: this.name?.value,
      email: this.email?.value,
      body: this.body?.value
    }
    console.log(payload);
    this.emailJs.sendMail(payload);
    
  }
 

  get name(){
    return this.contactForm.get('name')
  }

  get body(){
    return this.contactForm.get('body')
  }

  get email(){
    return this.contactForm.get('email')
  }

}
