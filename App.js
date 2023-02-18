import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import BottomTabNAvigator from "./src/BottomTabNAvigator";
import products from "./src/data/products";
import DrawerNavigatior from "./src/DrawerNavigator";
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

      {/* <Navigation /> */}
      {/* <DrawerNavigatior /> */}
      <BottomTabNAvigator />
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
