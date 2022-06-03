import {useState} from "react"
import { View, StyleSheet, StatusBar, FlatList } from "react-native";
import Categories from "./src/components/Categories";
import Header from "./src/components/Header";
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
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
