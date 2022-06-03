import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet, Image } from "react-native";
import { elevation } from "../styles/styles";

export default function CategoryItem({ name, imageUrl, index }) {
    //props are immutable(only-read)
    //props are properties, passed as function arguments to a component.
    return (
        <View style={[styles.container, styles.elevation, index === 0 ? { marginLeft: 25 } : { marginLeft: 15 }]}>
            <View>
                <Image source={imageUrl} style={styles.image} />
            </View>
            <LinearGradient
                colors={['#ada996', '#f2f2f2', '#dbdbdb', '#eaeaea']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 1 }}
                style={styles.textWrapper}
            >
                <Text style={styles.text}>{name}</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginHorizontal: 15,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 30
    },
    elevation,
    image: {
        width: 150,
        height: 150,
    },
    textWrapper: {
        padding: 4,
        position: "absolute",
        bottom: 35,
        left: 30
    },
    text: {
        color: "black",
        fontWeight: "bold",
    },
})