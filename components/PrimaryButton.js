import { Pressable, StyleSheet, Text, View } from "react-native";



export default function PrimaryButton({ children,onpress }) {

    return (
        <View style={styles.buttonouter}>
            <Pressable style={({pressed}) => pressed ? [styles.button, styles.buttonpressed] : styles.button} android_ripple={{color:'#97deeb'}} onPress={onpress}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonouter: {
        overflow: "hidden",
        borderRadius: 20,
        margin: 5,
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',

    },
    text: {
        color: 'white',
    },
    buttonpressed: {
        opacity: 0.5
    },
});