import { View, StyleSheet, StatusBar, FlatList } from "react-native";
import CategoryItem from "./src/components/CategoryItem";
import Header from "./src/components/Header";
import Search from "./src/components/Search.jsx";

export default function App() {

  //FlatList 
  categoriesData = [
    {
      name: "Beans and Plantain",
      imageUrl: require("./src/assets/images/beans.jpeg"),
    },
    {
      name: "Eba and Egusi",
      imageUrl: require("./src/assets/images/eba.jpeg"),
    },
    {
      name: "Chapman drink",
      imageUrl: require("./src/assets/images/chapman.jpeg"),
    },
    {
      name: "Jollof Rice",
      imageUrl: require("./src/assets/images/jollof.jpeg"),
    },
    {
      name: "Curry Sauce",
      imageUrl: require("./src/assets/images/sauce.jpeg"),
    },
    {
      name: "Zobo Drink",
      imageUrl: require("./src/assets/images/zobo.jpeg"),
    },
    {
      name: "Yam and Egg",
      imageUrl: require("./src/assets/images/yam.jpeg"),
    }
  ];


  return (
    <View styles={styles.container}>
      <Header />
      <Search />
      <View >
        <FlatList
          data={categoriesData}
          renderItem={({ item, index }) => {
            return <CategoryItem name={item.name} imageUrl={item.imageUrl} index={index}/>
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          show
          keyExtractor={(item) => item.name}
        />
      </View>
      {/* <CategoryItem
        name="Beans and Plantain"
        imageUrl={require("./src/assets/images/beans.jpeg")}
      /> */}
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
