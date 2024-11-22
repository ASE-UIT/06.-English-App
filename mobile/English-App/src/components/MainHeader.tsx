import { useNavigation } from "@react-navigation/native";
import { Header, Icon } from "@rneui/themed";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderNavigationProp } from "../type";

export default function MainHeader({ title }: { title: string }) {
  const nav = useNavigation<HeaderNavigationProp>();
  return (

    <View
      className="bg-white flex flex-row justify-between items-center px-4 pt-10 pb-4 w-full"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
      }}
    >
      <View className="flex flex-row items-center gap-2">
        <Image
          source={require("../../assets/header-icon.png")}
          className="w-6 h-6"
        />
        <Text className="text-lg font-semibold text-[#5D5FEF]">{title}</Text>
      </View>
      <View className="buttons-container flex flex-row items-center gap-4 mr-2">
        <TouchableOpacity className="button">
          <Icon name="search" color="#5D5FEF" size={24} />
        </TouchableOpacity>
        <TouchableOpacity className="button">
          <Icon name="shopping-cart" type="feather" color="#5D5FEF" size={20} />
        </TouchableOpacity>
        <TouchableOpacity className="button">
          <Icon
            name="notifications-none"
            type="material"
            color="#5D5FEF"
            size={24}
            onPress={()=>{nav.navigate('Notification')}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
