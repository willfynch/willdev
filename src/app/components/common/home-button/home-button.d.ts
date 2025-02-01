import { IconType } from "@ng-icons/core"
import { TPath } from "../../layout/navbar/navbar"

export interface IHomeButton {
    iconName: IconType
    buttonNavigateTo: TPath
    toolTip: string
    id: number
    active: boolean
}
