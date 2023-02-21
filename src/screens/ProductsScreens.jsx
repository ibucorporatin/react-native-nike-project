import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { color } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import NoTFound from "../components/NotFound";
import { productsFromRedux, productsSlice } from "../store/productsSlice";


const ProductsScreens = () => {
  const navigation = useNavigation();
  const products = useSelector(productsFromRedux);
  const dispatch = useDispatch();
  return (
    <>
    {products.length==0?(<NoTFound/>):(
      <FlatList
        data={products}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
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
              <View style={styles.productDetailsContainer} >
              <Text style={styles.productText} >{item.name}</Text> 
              <Text style={[styles.productText,{fontWeight:"900",}]} >{item.price} $</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        numColumns={2}
      />)}
    </>
  );
};
const styles = StyleSheet.create({
  
  productDetailsContainer:{
  display: "flex",
  flexDirection:"row",
justifyContent:"space-between",


    
  },
  productText:{
fontWeight:"500",
paddingHorizontal:15,
paddingVertical:5,
  },
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
