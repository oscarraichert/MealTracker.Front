import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import DefaultButton from "../components/buttons/DefaultButton";

export function NewMealScreen() {
    let [style, changeStyle] = useState(styles.validInput);
    let [name, setName] = useState('');
    let [quantity, setQuantity] = useState('');

    return (
        <ScrollView>

            <View style={styles.inputColumn}>
                <View style={styles.view}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <View style={style}>
                        <TextInput
                            style={styles.inputArea}
                            placeholder="(Meal Name)"
                            onChangeText={text => setName(text)}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.body}>

                <View style={styles.inputColumn}>
                    <View style={styles.view}>
                        <Text style={styles.inputLabel}>Quantity</Text>
                        <View style={style}>
                            <TextInput
                                style={styles.inputArea}
                                placeholder="(g)"
                                onChangeText={newText => { validateInput(newText); setQuantity(newText) }}
                            />
                        </View>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.inputLabel}>Calories</Text>
                        <View style={style}>
                            <TextInput
                                style={styles.inputArea}
                                placeholder="(kcal)"
                                onChangeText={newText => validateInput(newText)}
                            />
                        </View>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.inputLabel}>Proteins</Text>
                        <View style={style}>
                            <TextInput
                                style={styles.inputArea}
                                placeholder="(g)"
                                onChangeText={newText => validateInput(newText)}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.inputColumn}>
                    <View style={styles.view}>
                        <Text style={styles.inputLabel}>Carbs</Text>
                        <View style={style}>
                            <TextInput
                                style={styles.inputArea}
                                placeholder="(g)"
                                onChangeText={newText => validateInput(newText)}
                            />
                        </View>
                    </View>
                    <View style={styles.view}>
                        <Text style={styles.inputLabel}>Fats</Text>
                        <View style={style}>
                            <TextInput
                                style={styles.inputArea}
                                placeholder="(g)"
                                onChangeText={newText => validateInput(newText)}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <DefaultButton title="Save" onPress={() => handleSave()}></DefaultButton>
                    </View>
                </View>

            </View>
        </ScrollView>
    )

    function validateInput(text: string) {
        let regex = new RegExp(/^[0-9]*$/)

        !regex.test(text) ? changeStyle(styles.invalidInput) : changeStyle(styles.validInput)
    }

    function handleSave() {
        console.log(name)
        console.log(quantity)
    }
}

const styles = StyleSheet.create({
    body: {
        flexDirection: 'column',
        marginBottom: 25
    },
    view: {
        flexDirection: 'column'
    },
    inputColumn: {
        flexDirection: "column",
        flexGrow: 1,
        marginHorizontal: 100
    },
    validInput: {
        flexDirection: "row",
        borderWidth: 1,
        height: 48,
        marginTop: 15,
        flexGrow: 1,
        borderColor: 'darkslategray',
        borderRadius: 25,
        elevation: 10,
        backgroundColor: 'lightgray'
    },
    invalidInput: {
        flexDirection: "row",
        borderWidth: 1,
        height: 48,
        marginTop: 15,
        flexGrow: 1,
        borderColor: 'red',
        borderRadius: 25,
        elevation: 10,
        backgroundColor: 'lightgray'
    },
    inputArea: {
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 15,
        flexGrow: 1
    },
    inputLabel: {
        marginTop: 20,
        marginLeft: 15,
        fontSize: 18,
        width: 70,
        color: 'darkslategray'
    },
    buttonRow: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingTop: 50
    },
    icons: {
        fontSize: 28,
        color: "darkslategray",
        alignSelf: "flex-end",
        marginVertical: 10
    }
})
