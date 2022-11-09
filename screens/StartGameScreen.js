import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Platform, TextInput, View, Alert, Text } from "react-native"
import Card from "../components/card";
import Instructioncon from "../components/Game/InstructionText";
import PrimaryButton from "../components/PrimaryButton";
import CustomText from "../components/Text";



export default function StartGameScreen(props) {

    const [enteredNumber, setnumber] = useState('');

    function onpressreset() {
        setnumber('');
    }

    function onpressconfirm() {

        const choosennumber = parseInt(enteredNumber);
        if (choosennumber > 99 || isNaN(choosennumber) || choosennumber <= 0) {
            Alert.alert('Invalid Number!',
                'Number Has to be within 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: onpressreset }]);
            return;
        }
        props.onConfim(choosennumber);
    }

    return (
        <View>
            <CustomText >Guess My Number</CustomText>
            <Card>
                <Instructioncon style={styles.numberheader}>Enter Number</Instructioncon>
                <View style={styles.text}>
                    <TextInput
                        style={styles.numberinput}
                        onChangeText={setnumber}
                        keyboardType='number-pad' maxLength={2}
                        value={enteredNumber} />
                </View>
                <View style={styles.buttonalign}>
                    <View style={styles.flexbutton}>
                        <PrimaryButton onpress={onpressreset}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.flexbutton}>
                        <PrimaryButton onpress={onpressconfirm}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card >
        </View >
    );


}

const styles = StyleSheet.create({

    text: {
        //backgroundColor: '#adcecc',
        width: 100,
        padding: 15,
        borderRadius: 5,


    },
    buttonalign: {
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
    },
    numberinput: {
        fontWeight: "bold",
        fontSize: 34,
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        //backgroundColor: 'red'
    },
    flexbutton: {
        flex: 1
    },
    numberheader: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: 'platinum-font'
    }
});
