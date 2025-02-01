import { AboutPage } from "./pages/about/about.page"
import { Route } from "@angular/router"
import { HomePage } from "./pages/home/home.page"

export const routes: Route[] = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomePage },
    { path: "about", component: AboutPage },
]
