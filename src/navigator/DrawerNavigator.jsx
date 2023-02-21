import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductsScreens from "../screens/ProductsScreens";
import ShopingCart from "../screens/ShopingCart";
import { Ionicons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();
function DrawerNavigatior() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="products"
          screenOptions={{
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "black",
          }}
        >
          <Drawer.Screen
            name="products"
            component={ProductsScreens}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="product details"
            component={ProductDetailsScreen}
          />
          <Drawer.Screen
            name="cart"
            component={ShopingCart}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="cart" color={color} size={size} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

export default DrawerNavigatior;
