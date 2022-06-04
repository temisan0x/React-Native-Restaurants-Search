import { Image, StyleSheet, Text, View } from "react-native-web";

export default function Restaurant() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/images/jollof.jpeg')} style={styles.image} />
            </View>
            <Text style={styles.text} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iure autem enim vitae, repudiandae voluptatum adipisci molestias debitis asperiores delectus laborum consectetur incidunt, dignissimos error voluptates laudantium sed reiciendis ea!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 35,
        flexDirection: "column",
        alignItems: 'center',
        
    },

    image: {
        width: 150,
        height: 150,
        borderRadius:25,
    },

    text: {
        marginTop: 20,
        fontWeight: 80,
        
    }
})