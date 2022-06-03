import { View, StyleSheet, StatusBar, FlatList } from "react-native";
import Categories from "./src/components/Categories";
import Header from "./src/components/Header";
import Search from "./src/components/Search.jsx";

export default function App() {

  return (
    <View styles={styles.container}>
      <Header />
      <Search />
      <Categories/>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
