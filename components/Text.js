import { StyleSheet, Text } from "react-native"
import Colors from "../Constants/colors"


export default function CustomText({children, style}) {

    return(
        <Text style = {[styles.textstyle, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    textstyle: {
        color: Colors.primary,
        fontSize: 40,
        textAlign: 'center',
        fontFamily: 'platinum-font'
    }
})