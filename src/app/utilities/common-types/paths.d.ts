export type TPath = "/home" | "/about" | "/portfolio" | "/contact"

export function isTPath(path: string): path is TPath {
    const paths = ["/about", "/portfolio", "/contact", "/home"]
    return paths.includes(path)
}
