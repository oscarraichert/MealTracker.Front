import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export function NewMealScreen() {
    let [style, changeStyle] = useState(styles.validInput)

    return (
        <View style={styles.view}>
            <Text style={styles.inputLabel}>Quantity</Text>
            <TextInput
                style={style}
                placeholder="(g)"
                onChangeText={newText => validateInput(newText)}
            />
        </View>
    )

    function validateInput(text: string) {
        let regex = new RegExp(/^[0-9]*$/)

        !regex.test(text) ? changeStyle(styles.invalidInput) : changeStyle(styles.validInput)
    }
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row'
    },
    validInput: {
        borderWidth: 1,
        height: 38,
        margin: 25,
        flexGrow: 1,
        padding: 10,
        borderColor: 'black'
    },
    invalidInput: {
        borderWidth: 1,
        height: 38,
        margin: 25,
        flexGrow: 1,
        padding: 10,
        borderColor: 'red'
    },
    inputLabel: {
        marginLeft: 10,
        marginTop: 30,
        fontSize: 18
    }
})

