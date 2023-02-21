import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductsScreens from "../screens/ProductsScreens";
import CartIcon from "./CartIcon";
import FavIcon from "./FavIcon";
import Header from "./Header";

// import CartIcon from "./components/CartIcon";
import LoginForm from "./LoginForm";
import Register from "./Register";

const Stack = createNativeStackNavigator();
const ProductStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: "white" } }}
    >
      <Stack.Screen
        name="products"
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
            headerLeft: FavIcon,
          statusBarStyle: "dark",
          statusBarColor: "white",
        //  headerRight:()=>(<Text>shelloS</Text>)
          // title:<Text>w</Text>
          header:()=><Header/>
          
        }}
        component={ProductsScreens}
      />
      <Stack.Screen
        name="product details"
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          //   headerRight: CartIcon,
          statusBarStyle: "dark",
          statusBarColor: "white",
        }}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default ProductStackNavigator;
