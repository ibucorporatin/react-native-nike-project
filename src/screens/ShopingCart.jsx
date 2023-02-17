import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartListItem from "../components/CartListItem";
import { ShopingCartTotal } from "../components/ShopingCartTotal";
import { subTotal } from "../store/cartSlise";
// import cart from "../data/cart";

const ShopingCart = () => {
  const cart = useSelector((state) => state.cart.item);
  const subtotal = useSelector(subTotal);
  // console.log(subTotal, "this is subtotal");
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => {
          return <CartListItem cartItem={item} />;
        }}
        ListFooterComponent={ShopingCartTotal(subtotal)}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ckeckout</Text>
      </Pressable>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    padding: 20,
    width: "90%",
    alignSelf: "center",
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
export default ShopingCart;
