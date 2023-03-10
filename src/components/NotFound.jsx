import { Image, View } from "react-native";

function NoTFound() {
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
          uri: "https://cdn.dribbble.com/userupload/2905353/file/original-2022966da1fc3718d3feddfdc471ae47.png?compress=1&resize=400x300&vertical=top",
        }}
      />
    </View>
  );
}

export default NoTFound;
