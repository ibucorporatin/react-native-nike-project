import { Provider } from "react-redux";
import BottomTabNAvigator from "./src/navigator/parent/BottomTabNAvigator";

import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      {/* <View style={styles.container}> */}

      {/* <Navigation /> */}
      {/* <DrawerNavigatior /> */}
      <BottomTabNAvigator />
      {/* <View>
        <Text>hello</Text>
      </View> */}
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
