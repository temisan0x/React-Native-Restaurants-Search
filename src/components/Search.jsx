import {useState} from "react"
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import {elevation} from "../styles/styles"

export default function Search({setTerm}) {
    const [input, setInput] = useState("");

    const handleEndEditing = () => {
        if (!input) return;
        setTerm(input);
        setInput("");
    };

    return (
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name='search' size={25} />
            <TextInput
                placeholder="Restaurant food"
                style={styles.input}
                onChangeText={(text) => { setInput(text) }}//updates the value when there's a change.
                onEndEditing={() => handleEndEditing()}
                value={input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 10,
        marginHorizontal: 15, 
        backgroundColor: "white",
        padding: 15,
        borderRadius: 15,
    },
    elevation,
    input: {
        fontSize:20,
        marginLeft: 10,
        marginRight: 10,
        width: 300,
    }
}) 