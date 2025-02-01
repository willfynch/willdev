import { INavbarItems } from "../../components/layout/navbar/navbar"

export const NAV_ITEMS: INavbarItems = [
    {
        iconName: "lucideHouse",
        buttonNavigateTo: "/home",
        toolTip: "Accueil",
        id: 0,
        active: false,
    },
    {
        iconName: "lucideBriefcaseBusiness",
        buttonNavigateTo: "/portfolio",
        toolTip: "Portfolio",
        id: 1,
        active: false,
    },
    {
        iconName: "lucideUser",
        buttonNavigateTo: "/about",
        toolTip: "À propos",
        id: 2,
        active: false,
    },
    {
        iconName: "lucideMail",
        buttonNavigateTo: "/contact",
        toolTip: "Contact",
        id: 3,
        active: false,
    },
]
