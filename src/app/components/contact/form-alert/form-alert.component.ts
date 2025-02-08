import { Component, computed, input, InputSignal, signal } from "@angular/core"
import { NgIcon } from "@ng-icons/core"
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from "@spartan-ng/ui-alert-helm"
import { HlmSpinnerComponent } from "../../../../../libs/ui/ui-spinner-helm/src/lib/hlm-spinner.component"
import { TEmailAlertStatus } from "../../../pages/contact/contact"
import { trigger, transition, style, animate } from "@angular/animations"

@Component({
    selector: "app-form-alert",
    imports: [NgIcon, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective, HlmSpinnerComponent],
    templateUrl: "./form-alert.component.html",
    styleUrl: "./form-alert.component.scss",
    animations: [
      trigger('fadeSlideInOut', [
          transition(':enter', [
              style({ opacity: 0, transform: 'translateY(-10px)' }),
              animate('200ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
          ]),
          transition(':leave', [
              animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' }))
          ])
      ])
  ]
})
export class FormAlertComponent {
    public emailAlertStatus: InputSignal<TEmailAlertStatus> = input.required<TEmailAlertStatus>()

    alertClass = computed(() => {
        switch (this.emailAlertStatus()) {
            case "success":
                return "border-[1] border-green-600"
            case "error":
                return "border-[1] border-red-600 text-red-600"
            case "pending":
                return "border-[1] border-blue-600"
            case "hidden":
              return "";
        }
    })
}
