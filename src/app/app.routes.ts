import { AboutPage } from "./pages/about/about.page"
import { Route } from "@angular/router"
import { HomePage } from "./pages/home/home.page"
import { ContactPage } from "./pages/contact/contact.page"

export const routes: Route[] = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomePage },
    { path: "about", component: AboutPage },
    {path: "contact", component: ContactPage},
    {path: "**", redirectTo: "home"}
]
