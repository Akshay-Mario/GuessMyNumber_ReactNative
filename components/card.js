import { StyleSheet, View } from "react-native";


export default function Card ({children, style}) {
    return(
        <View style = {[styles.card, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        marginHorizontal: 24,
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#B8DBD9',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 175,
        marginBottom: 20,
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
}); 