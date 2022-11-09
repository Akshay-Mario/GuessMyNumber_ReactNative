import { StyleSheet, Text } from "react-native";


export default function Instructioncon({children,style}) {
    return(
        <Text style = {[styles.container, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            fontSize: 40,// this font size will overridden by the style in props style
            fontFamily: 'platinum-font'
        }
    }
)