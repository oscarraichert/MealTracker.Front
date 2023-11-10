import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TabNavigation } from "../navigator/Routes";

export function HomeScreen() {
    const navigation = useNavigation<TabNavigation>()
    return (
        <View>
            <Text style={styles.text}>Home test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        margin: "3%"
    }
})