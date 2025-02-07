import { inject, Injectable } from "@angular/core"
import { TToast } from "../utilities/common-types/toast"
import { ToastrService } from "ngx-toastr"

@Injectable({
    providedIn: "root",
})
export class ToasterService {

    private toastr = inject(ToastrService)

    public addToast(toast: TToast): void {
      console.log(toast)
      switch(toast.type){
        case "success":
          this.addSuccessToast(toast);
          break;
        case "info":
          this.addInfoToast(toast);
          break;
        case "error":
          this.addErrorToast(toast);
          break;
      }
    }

    private addSuccessToast(toast:TToast){
      this.toastr.success(toast.title, toast.message)
    }

    private addErrorToast(toast:TToast){
      console.log('error')
      this.toastr.error(toast.title, toast.message)

    }

    private addInfoToast(toast:TToast){
      this.toastr.info(toast.title, toast.message)

    }
    
}
