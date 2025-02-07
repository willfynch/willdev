import { Component, input, InputSignal, output } from "@angular/core"
import { FormGroup, ReactiveFormsModule } from "@angular/forms"
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm";
import { HlmCardContentDirective, HlmCardDirective } from "@spartan-ng/ui-card-helm"
import { HlmFormFieldComponent, HlmFormFieldModule, HlmHintDirective } from "@spartan-ng/ui-formfield-helm"
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { toast } from "ngx-sonner";

@Component({
    selector: "app-contact-form",
    imports: [HlmInputDirective, HlmButtonDirective, HlmFormFieldModule, ReactiveFormsModule, HlmCardDirective, HlmCardContentDirective, HlmFormFieldComponent],
    templateUrl: "./contact-form.component.html",
    styleUrl: "./contact-form.component.scss",
})
export class ContactFormComponent {


  public contactForm: InputSignal<FormGroup> = input.required<FormGroup>()

  public onSendMessage = output<void>()

  addtoast(){
    console.log('toast')
    toast("toast")
  }


}
