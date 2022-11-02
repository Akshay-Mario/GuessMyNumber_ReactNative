import { StyleSheet, Text, View } from "react-native";
import CustomText from "../components/Text";


export default function GameScreen(props) {
    return (
        <View style = {styles.paddingt}>
            <CustomText>Opponent's Guess</CustomText>
            <Text style={styles.text}>
                ConfirmedNumber: {props.confirmedNumber}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
    paddingt: {
        paddingTop: 20,
    },
})