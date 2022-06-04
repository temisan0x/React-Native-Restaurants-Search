import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import api from "../api/api";
import Restaurant from "./Restaurant";

export default function Restaurants() {

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Top Restuarant</Text>
                <FontAwesome name='coffee' size={25} />
            </View>
            <Restaurant />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 35,
        marginVertical: 20,
        flexDirection: "row",
        marginTop: 50,
    },

    header: {
        fontWeight: "bold",
        fontSize: 30,
        marginRight: 10,
    }
})