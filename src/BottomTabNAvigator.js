import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ProductsScreens from "./screens/ProductsScreens";
import ShopingCart from "./screens/ShopingCart";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigatorForAccount from "./components/StackNavigatorForAccount";
import ProductStackNavigator from "./components/ProductStackNavigator";
import CartIcon from "./components/CartIcon";
import Header from "./components/Header";

const BottomTop = createBottomTabNavigator();
function BottomTabNAvigator() {
  return (
    <>
      <NavigationContainer>
        <BottomTop.Navigator>
          <BottomTop.Screen
            name="productsParent"
            component={ProductStackNavigator}
            options={{
              title: "home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
              headerShown: false,
            }}
          />
          {/* <BottomTop.Screen
            name="product details"
            component={ProductDetailsScreen}
            options={() => ({
              //   tabBarStyle: {
              //     display: "none",
              //   },
              tabBarButton: () => null,
            })}
          /> */}
          <BottomTop.Screen
            name="accountPage"
            component={StackNavigatorForAccount}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
              title: "account",
              headerShown: false,
            }}
          />

          <BottomTop.Screen
            name="cart"
            component={ShopingCart}
            options={{
              tabBarIcon: ({ color, size }) => (
                <CartIcon size={size} color={color} />
              ),
              header:()=><Header/>
            }}
            
          />
        </BottomTop.Navigator>
      </NavigationContainer>
    </>
  );
}

export default BottomTabNAvigator;
