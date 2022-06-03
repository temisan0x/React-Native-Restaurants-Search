import {useState} from "react"
import { View, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

export default function Categories() {
    const [term, setTerm]= useState("Beans and Plantain")
    //FlatList 
    categoriesData = [
        {
            name: "Beans and Plantain",
            imageUrl: require("../assets/images/beans.jpeg"),
        },
        {
            name: "Eba and Egusi",
            imageUrl: require("../assets/images/eba.jpeg"),
        },
        {
            name: "Chapman drink",
            imageUrl: require("../assets/images/chapman.jpeg"),
        },
        {
            name: "Jollof Rice",
            imageUrl: require("../assets/images/jollof.jpeg"),
        },
        {
            name: "Curry Sauce",
            imageUrl: require("../assets/images/sauce.jpeg"),
        },
        {
            name: "Zobo Drink",
            imageUrl: require("../assets/images/zobo.jpeg"),
        },
        {
            name: "Yam and Egg",
            imageUrl: require("../assets/images/yam.jpeg"),
        }
    ];

    //setTimeout a function to run a callback after a set pertiod of time.
    //setTerm updates the state value
    // setTimeout(() => {
    //     setTerm(term)
    // }, 3000)

    return (
        <View >
            <FlatList
                data={categoriesData}
                renderItem={({ item, index }) => {
                    console.log(item);
                    return <CategoryItem
                        name={item.name}
                        imageUrl={item.imageUrl}
                        index={index}
                        active={item.name === term}
                        handlePress={() => setTerm(item.name)}
                    />
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                show
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}