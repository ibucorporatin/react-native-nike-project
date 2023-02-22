import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, Text, View } from "react-native";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen";
import ProductsScreens from "../../screens/ProductsScreens";
import ShopingCart from "../../screens/ShopingCart";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigatorForAccount from "../StackNavigatorForAccount";
import ProductStackNavigator from "../ProductStackNavigator";
import CartIcon from "../../components/CartIcon";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { selectNumberOfItem } from "../../store/cartSlise";
import EmptyCart from "../../components/EmptyCart";
import HeaderWithoutSearch from "../../components/HeaderWithoutSearch";
import { authSlice, isAuthenticated } from "../../store/authSlice";
import LoginForm from "../../components/LoginForm";
import Profile from "../../components/Profile";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const BottomTop = createBottomTabNavigator();

function BottomTabNAvigator() {
  const cartCount = useSelector(selectNumberOfItem);
  const authenticated = useSelector(isAuthenticated);
  // console.log(authenticated);
  const dispatch = useDispatch();
  // console.log(JSON.stringify(products));
  useEffect(() => {
    async function getToken() {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        const jsUser = JSON.parse(user);
        // console.log(jsUser.token);
        dispatch(authSlice.actions.restoreUser(jsUser));
      }
    }
    getToken();
  }, []);
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
            component={authenticated ? Profile : StackNavigatorForAccount}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
              title: "account",
              headerShown: false,
              // header: () => <HeaderWithoutSearch />,
            }}
          />

          <BottomTop.Screen
            name="cart"
            component={
              authenticated
                ? cartCount === 0
                  ? EmptyCart
                  : ShopingCart
                : LoginForm
            }
            options={{
              tabBarIcon: ({ color, size }) => (
                <CartIcon size={size} color={color} />
              ),
              header: () => <HeaderWithoutSearch />,
            }}
          />
        </BottomTop.Navigator>
      </NavigationContainer>
    </>
  );
}

export default BottomTabNAvigator;
