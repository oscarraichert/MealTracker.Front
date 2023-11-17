import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type TabRoutes = {
    "Home": undefined,
    "Meals Tab": undefined
}

export type TabNavigation = BottomTabNavigationProp<TabRoutes, 'Home'>

export type StackRoutes = {
    "Meals": undefined,
    "New Meal": undefined
}

export type StackNavigation = NativeStackNavigationProp<StackRoutes, 'Meals'>