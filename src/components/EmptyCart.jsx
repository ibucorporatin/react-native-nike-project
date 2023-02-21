import { Image, View } from "react-native";

function EmptyCart() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
      }}
    >
      <Image
        style={{ width: "50%", aspectRatio: 1, borderRadius: 10 }}
        source={{
          uri: "https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png",
        }}
      />
    </View>
  );
}

export default EmptyCart;
