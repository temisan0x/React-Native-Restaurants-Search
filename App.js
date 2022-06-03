import { View, StyleSheet, StatusBar } from "react-native";
import CategoryItem from "./src/components/CategoryItem";
import Header from "./src/components/Header";
import Search from "./src/components/Search.jsx";

export default function App() {
  return (
    <View styles={styles.container}>
      <Header />
      <Search />
      <CategoryItem
        name="Beans and Plantain"
        imageUrl={require("./src/assets/images/beans.jpeg")}
      />
      <CategoryItem
        name="Eba and Egusi"
        imageUrl={require("./src/assets/images/eba.jpeg")}
      />
      <CategoryItem
        name="Jollof Rice"
        imageUrl={require("./src/assets/images/jollof.jpeg")}
      />
      <CategoryItem
        name="Yam and Egg"
        imageUrl={require("./src/assets/images/yam.jpeg")}
      />
      <CategoryItem
        name="Curry Sauce"
        imageUrl={require("./src/assets/images/sauce.jpeg")}
      />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
