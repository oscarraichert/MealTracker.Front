import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"

export type Routes = {
    "Home": undefined,
    "Meals": undefined
}

export type Navigation = BottomTabNavigationProp<Routes, 'Home'>