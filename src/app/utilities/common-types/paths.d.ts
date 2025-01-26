export type TPath = "/home" | "/about" | "/blog" | "/contact"

export function isTPath(path: string): path is TPath {
    const paths: Array<TPath> = ["/about", "/blog", "/contact", "/home"]
    return paths.includes(path)
}
