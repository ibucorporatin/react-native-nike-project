import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../store/productsSlice";

// import products from "../data/products";
const ProductsScreens = () => {
  const navigation = useNavigation();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => {
        return (
          <Pressable
            style={styles.itemContainer}
            onPress={() => {
              dispatch(productsSlice.actions.setSelectedProducts(item.id));
              navigation.navigate("product details");
            }}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          </Pressable>
        );
      }}
      numColumns={2}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
export default ProductsScreens;
