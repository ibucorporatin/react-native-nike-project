import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import CartIcon from "../components/CartIcon";
import FavIcon from "../components/FavIcon";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductsScreens from "../screens/ProductsScreens";
import ShopingCart from "../screens/ShopingCart";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="products"
          options={{
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerRight: FavIcon,
            statusBarStyle: "dark",
            statusBarColor: "white",
          }}
          component={ProductsScreens}
        />
        <Stack.Screen
          name="product details"
          options={{
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerRight: CartIcon,
            statusBarStyle: "dark",
            statusBarColor: "white",
          }}
          component={ProductDetailsScreen}
        />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerRight: CartIcon,
            statusBarStyle: "dark",
            statusBarColor: "white",
          }}
          name="cart"
          component={ShopingCart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
