import React from "react";
import { StackRoutes } from "../navigator/Routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsScreen } from "./MealsScreen";
import { NewMealScreen } from "./NewMealScreen";
import { Button, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator<StackRoutes>()

export function MealsTab() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Meals' component={MealsScreen} options={{ headerStyle: styles.header, headerTitleStyle: styles.title }} />
            <Stack.Screen name='New Meal' component={NewMealScreen} options={{ headerStyle: styles.header, headerTitleStyle: styles.title }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'darkslategray'
    },
    title: {
        color: 'white'
    }
})