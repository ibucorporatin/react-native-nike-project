import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FavIcon from "./FavIcon";
import { useEffect, useState } from "react";
import { productsSlice } from "../store/productsSlice";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const [Focus, setFocus] = useState(false);
  const [search, setsearch] = useState("");

  useEffect(() => {
    if (search === "") {
      dispatch(productsSlice.actions.searchQueryBackToEmpty());
    } else {
      dispatch(productsSlice.actions.searchQuery(search));
    }
  }, [search]);

  const onFocusFunction = () => {
    setFocus(true);
  };
  const onBlureFunction = () => {
    setFocus(false);
  };
  return (
    <View style={styles.headerContainer}>
      <FavIcon />
      <View style={styles.searchContainer}>
        <TextInput
          onChangeText={(text) => setsearch(text)}
          value={search}
          onFocus={onFocusFunction}
          onBlur={onBlureFunction}
          placeholderTextColor={"white"}
          style={[styles.input, { borderColor: Focus ? "white" : "black" }]}
          placeholder={"search"}
          autoCapitalize={"none"}
        />
        <Ionicons name="search" color={"white"} size={25} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    // borderRadius: 10,
    paddingRight: 10,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 35,
    // marginBottom: 10,
    // marginRight:20,
    // backgroundColor: "#fff",
    borderWidth: 1,
    // borderColor: "black"
    borderBottomColor: "white",
    padding: 10,
    // borderRadius: 10,
    width: 200,
    color: "white",
    // paddingVertical: 20,
    marginRight: 10,
  },
});
export default Header;
