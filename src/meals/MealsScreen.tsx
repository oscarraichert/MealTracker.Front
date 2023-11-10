import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigator/Routes";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export function MealsScreen() {
    const navigation = useNavigation<Routes>();

    return (
        <View style={styles.body}>
            <View style={styles.iconsRow}>
                <Entypo.Button iconStyle={styles.icon} name="add-to-list" size={16} />
            </View>
        </View>
    );
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
});