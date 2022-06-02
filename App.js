import { View, StyleSheet, StatusBar} from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search.jsx';


export default function App() {
  return (
    <View styles={styles.container}>
      <Header />
      <Search />
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  }
})
