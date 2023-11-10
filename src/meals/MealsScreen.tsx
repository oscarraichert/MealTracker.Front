import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TabRoutes, StackNavigation, StackRoutes } from "../navigator/Routes";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NewMealScreen } from "./NewMeal";

const Stack = createNativeStackNavigator<StackRoutes>()

export function MealsScreen() {
    const navigation = useNavigation<StackNavigation>()
    return (
        <View>
            <View style={styles.body}>
                <View style={styles.iconsRow}>
                    <Entypo.Button iconStyle={styles.icon} name="add-to-list" size={20} onPress={() => navigation.navigate('New Meal')} />
                </View>
            </View>
        </View>
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