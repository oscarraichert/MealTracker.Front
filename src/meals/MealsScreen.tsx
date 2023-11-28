import { Entypo } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigation } from "../navigator/Routes";
import { useNavigation } from "@react-navigation/native";

export function MealsScreen() {
    const navigation = useNavigation<StackNavigation>()
    return (
        <View>
            <View style={styles.body}>
                <View style={styles.iconsRow}>
                    <Entypo.Button iconStyle={styles.icon} style={styles.button} name="add-to-list" size={26} onPress={() => navigation.navigate('New Meal')} />
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
    button: {
        backgroundColor: 'darkslategray'
    },
    icon: {
        marginRight: 0
    }
})