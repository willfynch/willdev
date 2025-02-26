import { Component, computed, input, InputSignal } from "@angular/core"
import { NgIcon } from "@ng-icons/core"
import { HlmAlertDescriptionDirective, HlmAlertDirective, HlmAlertIconDirective } from "@spartan-ng/ui-alert-helm"
import { HlmSpinnerComponent } from "../../../../libs/ui/ui-spinner-helm/src/lib/hlm-spinner.component"
import { TEmailAlertStatus } from "../contact"

@Component({
    selector: "app-form-alert",
    imports: [NgIcon, HlmAlertDirective, HlmAlertDescriptionDirective, HlmAlertIconDirective, HlmSpinnerComponent],
    templateUrl: "./form-alert.component.html",
    styleUrl: "./form-alert.component.scss",
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
                return ""
        }
    })
}
