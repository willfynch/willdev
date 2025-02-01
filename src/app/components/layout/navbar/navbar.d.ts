import { IHomeButton } from "../../common/navbar-button/navbar-button"

export type INavbarItems = Array<IHomeButton>

export type TPath = "/home" | "/about" | "/portfolio" | "/contact"

export function isTPath(path: string): path is TPath {
    const paths = ["/about", "/portfolio", "/contact", "/home"]
    return paths.includes(path)
}
