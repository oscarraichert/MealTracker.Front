import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type TabRoutes = {
    "Home": undefined,
    "Meals": undefined
}

export type TabNavigation = BottomTabNavigationProp<TabRoutes, 'Home'>

export type StackRoutes = {
    "New Meal": undefined
}

export type StackNavigation = NativeStackNavigationProp<StackRoutes, 'New Meal'>