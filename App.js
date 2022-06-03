import {useState} from "react"
import { View, StyleSheet, StatusBar } from "react-native";
import Categories from "./src/components/Categories";
import Header from "./src/components/Header";
import Restaurants from "./src/components/Restaurants";
import Search from "./src/components/Search.jsx";
import categories from "./src/util/categories";

export default function App() {

  const [term, setTerm] = useState("Beans and Plantain")
  
  return (
    <View styles={styles.container}>
      <Header />
      <Search setTerm={setTerm}/>
      <Categories
        setTerm={setTerm}
        term={term}
        categories={categories}
      />
      <Restaurants/>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
