import { Platform, StyleSheet, Text, View } from "react-native";
import Colors from "../../Constants/colors";


export default function NumberText({children}) {
    return(
        <View style = {styles.container}>
            <Text style = {styles.textStyle}>
                {children}
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        marginBottom: 20,
        width: 100,
        borderRadius: 5,
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 43,
        textAlign: 'center',
        position: 'relative',
        top: 3
        //backgroundColor: 'red'
    }
})