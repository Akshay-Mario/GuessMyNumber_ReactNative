import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import PrimaryButton from "../components/PrimaryButton";
import CustomText from "../components/Text";


export default function GameOverScreen({confirmedNumber, ongamerestart, numberofrounds}) {
    return (
        <View>
            <View style = {styles.imagecontainer}>
            <CustomText style = {styles.textstyle}>Game Over</CustomText>

                <Image style={styles.imagecontain} resizeMode='center' source={require('../assets/Images/GameOver.png')} />

            </View>
            <Text style= {styles.predictc}>Your Phone took <Text style = {styles.highlight}>{numberofrounds}</Text> turns to predict the number <Text style = {styles.highlight}>{confirmedNumber}</Text></Text>
            <PrimaryButton textstyle = {styles.textstyle12} onpress={ongamerestart}>Start Over</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    imagecontain: {
        width: 350,
        height: 350,

    },
    imagecontainer: {
        height: '68%',
        borderRadius: 10,
        backgroundColor: '#52d99cf3',
        margin: 20,
        overflow: 'hidden'
    },
    textstyle: {
        color: 'black',
        paddingTop: 10,
    },
    predictc: {
        color:'white',
        fontSize: 25,
        padding: 20,
        alignItems:'center',
        textAlign: 'center',
        fontFamily: 'second'
    },
    highlight: {
        color: '#00ffee'
    },
    textstyle12: {
        fontWeight: 'bold',
        padding: 5,
        fontSize: 15,
    },
});