import { IHomeButton } from "../../common/navbar-button/navbar-button"

export type INavbarItems = Array<IHomeButton>

import { IconType } from "@ng-icons/core"
import { TPath } from "../../layout/navbar/navbar"

export interface INavbarButton {
    iconName: IconType
    linkPath: TPath
    toolTip: string
    id: number
    active: boolean
}
