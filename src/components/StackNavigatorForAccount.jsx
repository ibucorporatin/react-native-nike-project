import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductsScreens from "../screens/ProductsScreens";

// import CartIcon from "./components/CartIcon";
import LoginForm from "./LoginForm";
import Register from "./Register";

const Stack = createNativeStackNavigator();
const StackNavigatorForAccount = () => {
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: "white" } }}
    >
      <Stack.Screen
        name="login"
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          //   headerRight: CartIcon,
          statusBarStyle: "dark",
          statusBarColor: "white",
        }}
        component={LoginForm}
      />
      <Stack.Screen
        name="register"
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          //   headerRight: CartIcon,
          statusBarStyle: "dark",
          statusBarColor: "white",
        }}
        component={Register}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorForAccount;
