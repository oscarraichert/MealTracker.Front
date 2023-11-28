import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import DefaultButton from "../components/buttons/DefaultButton";

export function NewMealScreen() {
    let [style, changeStyle] = useState(styles.validInput)

    return (
        <ScrollView>

            <View style={styles.inputColumn}>
                <View style={styles.view}>
                    <Text style={styles.inputLabel}>Name</Text>
                    <View style={style}>
                        <TextInput
                            style={styles.inputArea}
                            placeholder="(Meal Name)"
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
                                onChangeText={newText => validateInput(newText)}
                            />
                            <MaterialCommunityIcons name="weight-gram" style={styles.icons} />
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
                        <DefaultButton title="Save" onPress={() => console.log('teste')}></DefaultButton>
                    </View>
                </View>

            </View>
        </ScrollView>
    )

    function validateInput(text: string) {
        let regex = new RegExp(/^[0-9]*$/)

        !regex.test(text) ? changeStyle(styles.invalidInput) : changeStyle(styles.validInput)
    }
}

const styles = StyleSheet.create({
    body: {
        flexDirection: "row",
        marginBottom: 25
    },
    view: {
        flexDirection: 'column'
    },
    inputColumn: {
        flexDirection: "column",
        flexGrow: 1,
        marginHorizontal: 10
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
        flexGrow: 1,
        marginVertical: 10,
        marginHorizontal: 15
    },
    inputLabel: {
        marginTop: 20,
        marginLeft: 15,
        fontSize: 18,
        width: 70,
        color: 'darkslategray'
    },
    buttonRow: {
        flexDirection: "row",
        alignSelf: 'center',
        paddingTop: 55
    },
    icons: {
        fontSize: 28,
        color: "darkslategray",
        alignSelf: "flex-end",
        marginVertical: 10
    }
})

