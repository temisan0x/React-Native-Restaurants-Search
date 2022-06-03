import { View, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";
import categoriesData from "../util/categories"

export default function Categories({setTerm, term}) {
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