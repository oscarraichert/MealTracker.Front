import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export function NewMealScreen() {
    let [style, changeStyle] = useState(styles.validInput)

    return (
        <View>
            <View style={styles.view}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput
                    style={style}
                    placeholder="(Meal Name)"
                />
            </View>
            <View style={styles.view}>
                <Text style={styles.inputLabel}>Quantity</Text>
                <TextInput
                    style={style}
                    placeholder="(g)"
                    onChangeText={newText => validateInput(newText)}
                />
            </View>
            <View style={styles.view}>
                <Text style={styles.inputLabel}>Calories</Text>
                <TextInput
                    style={style}
                    placeholder="(kcal)"
                    onChangeText={newText => validateInput(newText)}
                />
            </View>
            <View style={styles.view}>
                <Text style={styles.inputLabel}>Proteins</Text>
                <TextInput
                    style={style}
                    placeholder="(g)"
                    onChangeText={newText => validateInput(newText)}
                />
            </View>
            <View style={styles.view}>
                <Text style={styles.inputLabel}>Carbs</Text>
                <TextInput
                    style={style}
                    placeholder="(g)"
                    onChangeText={newText => validateInput(newText)}
                />
            </View>
            <View style={styles.view}>
                <Text style={styles.inputLabel}>Fats</Text>
                <TextInput
                    style={style}
                    placeholder="(g)"
                    onChangeText={newText => validateInput(newText)}
                />
            </View>
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
        marginTop: 25,
        marginLeft: 25,
        marginRight: 25,
        flexGrow: 1,
        padding: 10,
        borderColor: 'black'
    },
    invalidInput: {
        borderWidth: 1,
        height: 38,
        marginTop: 25,
        marginLeft: 25,
        marginRight: 25,
        flexGrow: 1,
        padding: 10,
        borderColor: 'red'
    },
    inputLabel: {
        marginLeft: 10,
        marginTop: 30,
        fontSize: 18,
        width: 70
    }
})

