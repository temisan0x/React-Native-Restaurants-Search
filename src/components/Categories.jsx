import { View, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

export default function Categories({setTerm, term, categories}) {
    return (
        <View >
            <FlatList
                data={categories}
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