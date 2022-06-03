import { StyleSheet, Text, View } from "react-native";

export default function Restaurants() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Top Restuarant</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 35,
        marginVertical: 15,
        flex:1,
    },

    header: {
        fontWeight: "bold", 
        fontSize: 25,
        paddingBottom: 30,
    }
})