import { Component, inject } from "@angular/core"
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm";
import { HlmCardContentDirective, HlmCardDirective } from "@spartan-ng/ui-card-helm"
import { HlmFormFieldComponent, HlmFormFieldModule, HlmHintDirective } from "@spartan-ng/ui-formfield-helm"
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
    selector: "app-contact-form",
    imports: [HlmInputDirective,HlmButtonDirective, HlmFormFieldModule, HlmHintDirective, ReactiveFormsModule,HlmCardDirective, HlmCardContentDirective, HlmFormFieldComponent],
    templateUrl: "./contact-form.component.html",
    styleUrl: "./contact-form.component.scss",
})
export class ContactFormComponent {

  private fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);

  protected contactForm: FormGroup = this.fb.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    name: ['', Validators.required],
    message: ['', Validators.required]
  })

}
