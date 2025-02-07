import { TToast } from "../common-types/toast"

export const PENDING_TOAST: TToast = {
    title: "Sending message...",
    message: "Please wait a few.",
    type: "info"
}
export const SUCCESS_TOAST: TToast = {
    title: "Success !",
    message: "Message successfully sent.",
    type: "success"
}
export const ERROR_TOAST: TToast = {
    title: "Error !",
    message: "Message could not be sent. Please retry later.",
    type: "error"
}