import { useEffect, useState } from "react";
import { Alert, FlatList, Platform, StyleSheet, Text, View } from "react-native";
import Card from "../components/card";
import NumberText from "../components/Game/NumberText";
import PrimaryButton from "../components/PrimaryButton";
import CustomText from "../components/Text";
import { Ionicons } from '@expo/vector-icons';
import Instructioncon from "../components/Game/InstructionText";
import ListOfRounds from "../components/Game/listofrounds";


function generateRandomNumber(min, max) {
    const guess = (Math.floor(Math.random() * (max - min) + min));
    console.log('wtf', guess, min, max);

    return guess;
}

let minNumber = 1;
let maxNumber = 100;

export default function GameScreen({ confirmedNumber, gameisover }) {

    const initialNumber = generateRandomNumber(1, 100);
    const [guessedNumber, setguessed] = useState(initialNumber);
    const [numberofturns, setnumberofturns] = useState([initialNumber]);

    useEffect(() => {
        if (guessedNumber === confirmedNumber) {
            gameisover(numberofturns.length);
        }
    }, [guessedNumber, confirmedNumber, gameisover]);

    useEffect(() => {
        minNumber = 1;
        maxNumber = 100;
    },[])


    function checkHigherLower(logic) {

        if ((logic === 'Lower' && guessedNumber > confirmedNumber) || (logic === 'Higher' && guessedNumber < confirmedNumber)) {
            Alert.alert('enter valid logic bitch', 'yeah', [{ text: 'Sorry!', style: 'cancel' },]);
            console.log('hey')
            return;
        }
        else {
            
            if (logic === 'Lower') {
                console.log('hey1')
                minNumber = guessedNumber + 1;
            }
            else {
                console.log('hey2')
                maxNumber = guessedNumber - 1;
            }
            const newRand = generateRandomNumber(minNumber, maxNumber);
            setguessed(newRand);
            setnumberofturns(prevarray => [newRand,...prevarray]);
        }
    }

    return (
        <View style={styles.paddingt}>
            <CustomText>Opponent's Guess</CustomText>
            <Card style = {styles.containcard}>
                <Instructioncon style={styles.numberheader}>Higher or Lower?</Instructioncon>
                <NumberText>{guessedNumber}</NumberText>
                <View style={styles.container1}>
                    <View style={styles.container2}>
                        <PrimaryButton onpress={checkHigherLower.bind(this, 'Higher')}><Ionicons name="md-add" size={20} /></PrimaryButton>
                    </View>
                    <View style={styles.container2}>
                        <PrimaryButton onpress={checkHigherLower.bind(this, 'Lower')}><Ionicons name="md-remove" size={20} /></PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style = {styles.flatlist}>
                {/* {numberofturns.map(guessedNumber => <Text key={guessedNumber}>{guessedNumber}</Text>)} */}
                <FlatList data={numberofturns} renderItem = {
                    (ItemData) => <ListOfRounds guess = {ItemData.item} turn = {numberofturns.length - ItemData.index}/>}
                    keyExtractor = {(item) => item}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    numberheader: {
        fontSize: 20,
        fontWeight: "bold"
    },
    container1: {
        flexDirection: 'row'
    },
    container2: {
        flex: 1
    },
    flatlist:{
    flex: 1        
    },
    containcard: {
        
    },
    paddingt: {
        flex: 1
    }
})