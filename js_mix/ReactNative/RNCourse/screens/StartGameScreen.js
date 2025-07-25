import { Alert, Dimensions, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

const deviceHeight = Dimensions.get("window").height;

const StartGameScreen = ({ onPickNumber }) => {
    const [enterNumber, setEnterNumber] = useState("");
    const { width, height } = useWindowDimensions();

    const onResetHandler = () => {
        setEnterNumber("");
    };

    const onConfirmHandler = () => {
        if (isNaN(enterNumber) || enterNumber <= 0 || enterNumber > 99) {
            Alert.alert("Invalid number!", "Number has to be between 1 and 99", [{ text: "OKay", style: "destructive", onPress: onResetHandler }]);
            return;
        }

        onPickNumber(enterNumber);
    };

    const marginTopDistance = height < 380 ? 30 : 50;

    return (
        <ScrollView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
                <View style={[{ marginTop: marginTopDistance }]}>
                    <View style={styles.titleContainer}>
                        <Title>Guess My Number</Title>
                    </View>

                    <Card>
                        <Text style={{ color: Colors.accent500, fontSize: 24 }}>Enter a Number</Text>
                        <TextInput value={enterNumber} onChangeText={setEnterNumber} style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
                        <View style={styles.buttonsPrimaryContainer}>
                            <View style={styles.buttonPrimaryContainer}>
                                <PrimaryButton onPress={onResetHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonPrimaryContainer}>
                                <PrimaryButton onPress={onConfirmHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default StartGameScreen; //StartGameScreen

const styles = StyleSheet.create({
    titleContainer: {
        marginHorizontal: 24,
        // marginTop: 100,
        marginBottom: deviceHeight < 380 ? 20 : 50,
        alignItems: "center",
    },

    // inputContainer: {
    //     marginTop: 100,
    //     marginHorizontal: 24,
    //     padding: 16,
    //     backgroundColor: Colors.primary800,
    //     borderRadius: 8,
    //     elevation: 4,
    //     shadowColor: 'black',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowRadius: 6,
    //     shadowOpacity: 0.25,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonsPrimaryContainer: {
        flexDirection: "row",
    },
    buttonPrimaryContainer: {
        flex: 1,
    },
});
