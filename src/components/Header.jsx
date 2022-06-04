import { Text, View, StyleSheet, TouchableHighlight } from "react-native"

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.lightHeader}>YahwehGram</Text>
            <TouchableHighlight style={styles.backgroundText}>
                <Text style={styles.lightText}>
                    Christ 💖
                </Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flexDirection:"row",
        marginTop: 40,
        marginHorizontal: 30
    },

    lightHeader: {
        fontSize: 25,
        marginHorizontal: 5
    },

    backgroundText: {
        borderRadius: 12,
        padding: 6,
        borderColor: "black",
        backgroundColor: "black",
        borderWidth:1,
    }, 

    lightText: {
        fontSize: 20,
        color: "white",
        textAlign:"center"
    },
})