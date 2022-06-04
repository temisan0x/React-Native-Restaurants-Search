import { useState } from "react"
import { View, SafeAreaView, TextInput, StyleSheet, Image } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../styles/styles"

export default function Search({ setTerm }) {
    const [input, setInput] = useState("");

    const handleEndEditing = () => {
        if (!input) return;
        setTerm(input);
        setInput("");
    };

    return (
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name='search' size={25} color="gray" />
            <SafeAreaView>
                <TextInput
                    placeholder="Restaurant food"
                    style={styles.input}
                    onChangeText={(text) => { setInput(text) }}//updates the value when there's a change.
                    onEndEditing={() => handleEndEditing()}
                    value={input}
                />
            </SafeAreaView>
            <Image source={require('../assets/images/control.png')} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 40,
        backgroundColor: "#B8B9B7",
        borderRadius: 15,
        alignSelf: "center",
        width: "90%",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 10,
    },
    elevation,
    input: {
        alignSelf: "auto",
        marginVertical: 10,
        outline: "none",
    },
    image: {
        width: 20,
        height: 20,
    }
}) 