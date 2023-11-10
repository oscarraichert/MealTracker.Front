import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Navigation } from "../../navigator/Routes";

function HomeScreen() {
    const navigation = useNavigation<Navigation>();
    return (
        <View>
            <Text style={styles.text}>Home test</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        margin: "3%"
    }
});

export default HomeScreen;