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
        paddingHorizontal: 70,
        paddingVertical: 15,
        borderRadius: 8,
        elevation: 10
    },
    text: {
        color: 'white',
        fontSize: 32,
        fontWeight: '500',
        letterSpacing: .5
    }
})