import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {Contact } from '../../../models/contact.model';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { EmailjsService } from '../../../services/emailjs.service';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule,MatInputModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  ERROR = {
    REQUIRED: 'Requis',
    EMAIL_ERROR: 'Entrez une adresse email valide : exemple@exemple.fr',    
  }
  SUBMIT = 'Envoyer'
  resultEmailLoading = false;

  contactForm: FormGroup

  constructor(private formBuilder: FormBuilder, private emailJs: EmailjsService, private _snackBar: MatSnackBar){
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      body: ['', Validators.required]
    })
  }

  ngOnInit(){
   this.contactForm.reset()   
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
    this.resultEmailLoading = true;
    this.emailJs.sendMail(payload)
      .then(() => this.openSnackBar('Le mail a bien été envoyé !', 'Fermer',  ['success-snack']))
      .catch((error)=>this.openSnackBar('Une erreur est survenue : ' + error, 'Fermer', ['error-snack']))
      .finally(()=>this.resultEmailLoading = false)
  }
 
  openSnackBar(message: string, action: string, classes?: string | string[]) {
    const config: MatSnackBarConfig = {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: classes,
    }
    this._snackBar.open(message, action, config);
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
