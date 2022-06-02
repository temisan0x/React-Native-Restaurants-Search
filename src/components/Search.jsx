import { View, TextInput, StyleSheet } from 'react-native';
import {FontAwesome} from "@expo/vector-icons"

export default function Search() {
    return (
        <View style={styles.container}>
            <FontAwesome name='search' size={25}/>
            <TextInput placeholder="Restaurant food" style={ styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 10,
        marginHorizontal: 15,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset:{width: 5, height: 5},
        elevation: 3,
        shadowOpacity: 0.1,
        padding: 15,
        borderRadius: 15,
    },

    input: {
        fontSize:20,
        marginLeft: 15 ,
    }
}) 