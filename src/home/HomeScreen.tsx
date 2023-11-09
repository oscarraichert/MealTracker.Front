import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";
import { Navigation } from "../../navigator/Routes";

function HomeScreen() {
    const navigation = useNavigation<Navigation>()
    return (<View>
        <Text>Home test</Text>
        <Button title="Details" onPress={() => navigation.navigate('Details')} />
    </View>)
};

export default HomeScreen;