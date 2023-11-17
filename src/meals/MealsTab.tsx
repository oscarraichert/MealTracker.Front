import React from "react";
import { StackRoutes } from "../navigator/Routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsScreen } from "./MealsScreen";
import { NewMealScreen } from "./NewMeal";
import { Button } from "react-native";

const Stack = createNativeStackNavigator<StackRoutes>()

export function MealsTab() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Meals' component={MealsScreen} />
            <Stack.Screen name='New Meal' component={NewMealScreen} />
        </Stack.Navigator>
    )
}

