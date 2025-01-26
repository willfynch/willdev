import { INavbarItems } from "../../components/layout/navbar/navbar"

export const NAV_ITEMS: INavbarItems = [
    {
        iconName: "lucideHouse",
        buttonNavigateTo: "/home",
        toolTip: "Home",
        id: 0,
        active: false,
    },
    {
        iconName: "lucideUser",
        buttonNavigateTo: "/about",
        toolTip: "About",
        id: 1,
        active: false,
    },
    {
        iconName: "lucideMail",
        buttonNavigateTo: "/contact",
        toolTip: "Contact",
        id: 2,
        active: false,
    },
    {
        iconName: "lucideFeather",
        buttonNavigateTo: "/blog",
        toolTip: "Blog",
        id: 3,
        active: false,
    },
]
