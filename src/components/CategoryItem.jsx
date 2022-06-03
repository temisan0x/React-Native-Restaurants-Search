import { LinearGradient } from "expo-linear-gradient";
import { Text, View, StyleSheet, Image } from "react-native";
import { elevation } from "../styles/styles";

export default function CategoryItem() {
    return (
        <View style={[styles.container, styles.elevation]}>
            <View>
                <Image source={require("../assets/images/beans.jpeg")} style={styles.image} />
            </View>
            <LinearGradient
                colors={['#ada996', '#f2f2f2', '#dbdbdb', '#eaeaea']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 1 }}
                style={styles.textWrapper}
            >
                <Text style={styles.text}>Beans and Plantain</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 170,
        borderRadius: 10,
        marginHorizontal: 25,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: 'center',
    },
    elevation,
    image: {
        width: 150,
        height: 150,
    },
    textWrapper: {
        padding: 4,
        position: "absolute",
        bottom: 20,
        left: 15
    },
    text: {
        color: "black",
        fontWeight: "bold",
    },
})