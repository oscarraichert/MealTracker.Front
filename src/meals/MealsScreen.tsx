import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigator/Routes";
import { Button, View } from "react-native";

export function MealsScreen() {
    const Navigation = useNavigation<Routes>();

    return (
        <View>
            <Button title="New"></Button>
        </View>
    );
}