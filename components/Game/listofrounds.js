import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function ListOfRounds({guess, turn}) {

    return(
        <View style = {styles.container}>
            <Text style={styles.texts}>#{turn} </Text>
            <Text style={styles.texts}>Guessed Number: {guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        marginVertical: 5,
        marginHorizontal: 20,
        flexDirection: "row",
        padding: 20,
        borderRadius: 15,
        justifyContent: 'space-between'
    },
    texts: {
        fontWeight: 'bold',
        color: 'white'

    }

});