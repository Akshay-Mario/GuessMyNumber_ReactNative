import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Platform, TextInput, View, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton";



export default function StartGameScreen(props) {

    const [enteredNumber, setnumber] = useState('');

    function onpressreset() {
        setnumber('');
    }

    function onpressconfirm() {
        
        const choosennumber = parseInt(enteredNumber);
        if (choosennumber > 99 || isNaN(choosennumber) ||choosennumber <=0) {
            Alert.alert('Invalid Number!',
                'Number Has to be within 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: onpressreset }]);
            return;
        }
        props.onConfim(choosennumber);
    }

    return (
        <View style={styles.container}>
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
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#B8DBD9',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 175,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 2 },
                shadowColor: '#99b8b6',
                shadowOpacity: 1,
                shadowRadius: 6,
            },
            android: {
                elevation: 5
            }
        })
    },
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
    }
});
