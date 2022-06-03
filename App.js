import { View, StyleSheet, StatusBar} from 'react-native';
import CategoryItem from './src/components/CategoryItem';
import Header from './src/components/Header';
import Search from './src/components/Search.jsx';


export default function App() {
  return (
    <View styles={styles.container}>
      <Header />
      <Search />
      <CategoryItem
        name="Beans and Plantain"

      />
      <CategoryItem
        name="Rice and Stew"
        
      />
      <CategoryItem
        name="Beans and Plantain"
        
      />
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  }
})
