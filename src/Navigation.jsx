import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import CartIcon from "./components/CartIcon";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ProductsScreens from "./screens/ProductsScreens";
import ShopingCart from "./screens/ShopingCart";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          options={{ headerRight: CartIcon }}
          name="products"
          component={ProductsScreens}
        />
        <Stack.Screen
          name="product details"
          options={{
            presentation: "modal",
            headerRight: CartIcon,
          }}
          component={ProductDetailsScreen}
        />
        <Stack.Screen
          options={{ headerRight: CartIcon }}
          name="cart"
          component={ShopingCart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
