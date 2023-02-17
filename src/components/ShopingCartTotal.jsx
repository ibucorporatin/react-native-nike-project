import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectDeleveryPrice, total } from "../store/cartSlise";
// import { subTotal } from "../store/cartSlise";

export const ShopingCartTotal = (subTotal) => {
  // const subTotal = useSelector(subTotal);
  // console.log(subTotal);
  console.log(total);
  const deliveryFees = useSelector(selectDeleveryPrice);
  const totalFee = useSelector(total);
  return (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>subtotal</Text>
        <Text style={styles.text}>{subTotal}$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFees}$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.totalText}>total</Text>
        <Text>{totalFee}$</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,

    borderTopColor: "gainsboro",
    borderTopWidth: 1,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    color: "gray",
    fontSize: 16,
  },
  totalText: {
    fontWeight: "500",
    fontSize: 16,
  },
});
