import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, TouchableOpacity, View } from "react-native";
import { color } from "react-native-reanimated";

function FavIcon() {
  const navigateor  = useNavigation()
    return ( 
      
       <Pressable style={{marginLeft:20}} onPress={()=>{ navigateor.navigate("products") }} android_ripple={{
        color: "#fff",
      }} >
         <Image style={{width:70,height:50}} source={require("../data/images/newOne.png")}  />
       </Pressable>
   
     );
}

export default FavIcon;