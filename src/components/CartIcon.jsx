import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectNumberOfItem } from "../store/cartSlise";

const CartIcon = ({ size, color }) => {
  const navigation = useNavigation();
  const cartItem = useSelector(selectNumberOfItem);
  return (
    <Pressable
      style={[styles.cartContainer]}
      onPress={() => {
        navigation.navigate("cart");
      }}
    >
      <FontAwesome5 name="shopping-cart" size={size} color={color} />
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
    left: 9,
    top: 0,
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 4,
    paddingVertical: 0.5,
    borderRadius: 20,
    fontSize: 12,
  },
  pressed: {
    opacity: 0.7,
  },
});
export default CartIcon;
