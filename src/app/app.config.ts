import { ApplicationConfig } from "@angular/core"
import { provideRouter, withInMemoryScrolling } from "@angular/router"
import { routes } from "./app.routes"
import { provideClientHydration } from "@angular/platform-browser"
import { provideHttpClient } from "@angular/common/http"
import { provideAnimations } from "@angular/platform-browser/animations"

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'top'})), provideClientHydration(), provideHttpClient(), provideAnimations()],
}
