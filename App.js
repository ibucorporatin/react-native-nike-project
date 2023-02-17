import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Provider } from "react-redux";
import products from "./src/data/products";
import Navigation from "./src/Navigation";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";
import ProductsScreens from "./src/screens/ProductsScreens";
import ShopingCart from "./src/screens/ShopingCart";
import { store } from "./src/store";

export default function App() {
  // console.log(JSON.stringify(products));
  return (
    <Provider store={store}>
      {/* <View style={styles.container}> */}
      <Navigation />
      <StatusBar style="auto" />
      {/* </View> */}
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
