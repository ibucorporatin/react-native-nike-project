import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { authSlice, userEmail } from "../store/authSlice";

function Profile() {
  const dispatch = useDispatch();
  const email = useSelector(userEmail);
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.text}>email:{email}</Text>
        <Pressable
          style={styles.button}
          onPress={() => dispatch(authSlice.actions.logout())}
        >
          <Text style={styles.buttonText}>logout</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    backgroundColor: "white",
    padding: 60,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#0093f5",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    paddingVertical: 10,
  },
  buttonText: {
    color: "white",
  },
});
