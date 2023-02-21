import { StyleSheet, Text, TextInput, View } from "react-native";
import FavIcon from "./FavIcon";

// import FavIcon from "./FavIcon";

function HeaderWithoutSearch() {
  return (
    <View style={styles.headerContainer}>
      <FavIcon />
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
});
export default HeaderWithoutSearch;
