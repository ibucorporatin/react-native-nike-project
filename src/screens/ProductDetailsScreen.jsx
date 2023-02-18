import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../store/cartSlise";
// import products from "../data/products";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.seleectedPrducts);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  //   const product = products[0];
  const { width } = useWindowDimensions();

  const addToCart = () => {
    // console.warn("added in cart");
    dispatch(cartSlice.actions.addToCart({ product }));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: product.name,
    });
  }, [navigation, product.name]);

  //   console.log(product);

  return (
    <>
      <View>
        <ScrollView>
          {/* Image Carousel */}

          <FlatList
            data={product.images}
            renderItem={({ item }) => {
              return (
                <Image
                  style={[styles.image, { width: width }]}
                  source={{ uri: item }}
                />
              );
            }}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.productDetailContainer}>
            {/* Title */}
            <Text style={styles.title}>{product.name}</Text>
            {/* Price */}
            <Text style={styles.price}>{product.price}</Text>
            {/* Description */}
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </ScrollView>
        {/* Add to cart button */}
        <Pressable
          style={styles.button}
          onPress={addToCart}
          android_ripple={{
            color: "white",
          }}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Pressable>
        {/* Navigation icon */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    // width: width,
    aspectRatio: 1,
  },
  productDetailContainer: {
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
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

export default ProductDetailsScreen;
