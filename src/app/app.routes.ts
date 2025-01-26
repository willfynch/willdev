import { AboutPage } from "./pages/about/about.page"
import { Route } from "@angular/router"
import { HomePage } from "./pages/home/home.page"
import { ContactPage } from "./pages/contact/contact.page"
import { SogePage } from "./pages/professional-experiences/soge/soge.page"
import { RuchePage } from "./pages/professional-experiences/ruche/ruche.page"

export const routes: Route[] = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomePage, title: "William FINZY | Front-End Developer" },
    { path: "about", component: AboutPage, title: "Know about my experience as a front-end developer" },
    {
        path: "about/front-end-developer-societe-generale",
        component: SogePage,
        title: "Front-End Developer at Société Générale",
    },
    {
        path: "about/fullstack-developer-ruche",
        component: RuchePage,
        title: "Fullstack Developer at La Ruche FS Paris",
    },
    { path: "contact", component: ContactPage, title: "Contact me for a front-end web project" },
    { path: "**", redirectTo: "home" },
]
