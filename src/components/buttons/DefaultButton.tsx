import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonProps = {
    title: string,
    onPress: () => void
}

export default function DefaultButton(props: ButtonProps) {
    return (
        <Pressable style={styles.button} onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'darkslategray',
        paddingHorizontal: 20,
        paddingVertical: 5,
        margin: 10,
        borderRadius: 5,
        elevation: 15
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        letterSpacing: .5
    }
})