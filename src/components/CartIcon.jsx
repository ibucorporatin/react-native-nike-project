import { Pressable, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectNumberOfItem } from "../store/cartSlise";

const CartIcon = () => {
  const navigation = useNavigation();
  const cartItem = useSelector(selectNumberOfItem);
  return (
    <Pressable
      style={styles.cartContainer}
      onPress={() => {
        navigation.navigate("cart");
      }}
    >
      <FontAwesome5 name="shopping-cart" size={30} color="gray" />
      <Text style={styles.cartCount}>{cartItem}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  cartContainer: {
    position: "relative",
    // backgroundColor: "red",
    // width: 100,
    // height: 100,
  },
  cartCount: {
    position: "absolute",
    left: 12,
    top: 0,
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 5,
    paddingVertical: 1,
    borderRadius: 20,
    fontSize: 13,
  },
});
export default CartIcon;
