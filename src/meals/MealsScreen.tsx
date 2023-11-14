import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { TabRoutes, StackNavigation, StackRoutes } from "../navigator/Routes";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewMealScreen } from "./NewMeal";

const Stack = createNativeStackNavigator<StackRoutes>()

export function MealsScreen() {
    const navigation = useNavigation<StackNavigation>()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='New Meal' component={NewMealScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    body: {
        margin: "5%"
    },
    iconsRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    icon: {
        marginRight: 0
    }
})