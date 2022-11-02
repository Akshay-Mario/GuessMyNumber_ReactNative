import { StyleSheet, Text } from "react-native"
import Colors from "../Constants/colors"


export default function CustomText({children}) {

    return(
        <Text style = {styles.textstyle}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    textstyle: {
        color: Colors.primary,
        fontSize: 40,
        textAlign: 'center',

    }
})