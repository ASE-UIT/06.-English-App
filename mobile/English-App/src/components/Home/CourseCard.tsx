import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { Rating } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

import { CourseScreenNavigationProp } from "../../type";

export default function CourseCard() {
  const courseName = "Reading Essentials";
  const creator = "Mrs. Thuy";
  const rating = 4.5;
  const votes = 100;
  const currentPrice = 100000;
  const originalPrice = 200000;
  const nav = useNavigation<CourseScreenNavigationProp>();
  return (
    <TouchableOpacity className="flex flex-col justify-between w-40" onPress={()=>{
      nav.navigate("CourseDetail")
    }}>
      <Image
        source={require("../../../assets/courseCard.jpg")}
        className="w-full h-32"
      />
      <Text
        className="text-sm font-semibold text-black"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {courseName}
      </Text>
      <Text
        className="text-xs text-blue2"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {creator}
      </Text>
      <View className="flex flex-row items-center gap-1">
        <Text className="text-xs text-black">{rating}</Text>
        <Rating readonly startingValue={rating} imageSize={10} />
        <Text className="text-xs text-black">({votes})</Text>
      </View>
      <View className="flex flex-row gap-1 items-start">
        <Text className="text-xs text-black">đ{currentPrice}</Text>
        <Text className="text-[10px] text-gray-500 line-through">
          đ{originalPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
