import { CommonModule } from "@angular/common"
import { Component, computed, inject, Signal, signal, WritableSignal } from "@angular/core"
import { Router, RouterLink } from "@angular/router"
import { filter, Subscription } from "rxjs"

@Component({
    selector: "app-breadcrumb",
    imports: [CommonModule, RouterLink],
    templateUrl: "./breadcrumb.component.html",
})
export class BreadcrumbComponent {
    router = inject(Router)
    url: WritableSignal<string> = signal<string>("")
    path: Signal<{ label: string; path: string }[]> = computed(() => {
        return this.buildBreadCrumb(this.url().split("/"))
    })

    subscription = new Subscription()

    ngOnInit() {
        this.subscription = this.router.events.pipe(filter((event) => event.type === 1)).subscribe({
            next: (event) => {
                this.url.set(event.urlAfterRedirects)
            },
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe()
    }

    mapToLabel(label: string): string {
        const labels: Record<string, string> = {
            about: "About",
            contact: "Contact",
            "front-end-developer-societe-generale": "Front-end developer at Société Générale",
            "fullstack-developer-ruche": "Full-Stack developer at La Ruche FS Paris",
        }
        return labels[label]
    }

    buildBreadCrumb(paths: string[]): { label: string; path: string }[] {
        let previous: string[] = []
        let breadcrumb: { label: string; path: string }[] = []
        paths.forEach((currPath: string) => {
            let futurePath: string = ""
            if (previous.length > 0) {
                futurePath = previous.join("/") + "/" + currPath
            } else {
                futurePath = currPath
            }
            breadcrumb.push({ label: this.mapToLabel(currPath), path: futurePath })
            previous.push(currPath)
        })
        return breadcrumb
    }
}
