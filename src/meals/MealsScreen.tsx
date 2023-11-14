import React from "react";
import { StackRoutes } from "../navigator/Routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewMealScreen } from "./NewMeal";

const Stack = createNativeStackNavigator<StackRoutes>()

export function MealsScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name='New Meal' component={NewMealScreen} />
        </Stack.Navigator>
    )
}

