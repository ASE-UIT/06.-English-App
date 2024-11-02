import React from "react";
import { Text, View } from "react-native";

export default function CategoryCard() {
  const category = "IELTS Acedemic";
  return (
    <View className="p-2 border border-pink1 rounded-full self-start">
      <Text className="text-sm text-black">{category}</Text>
    </View>
  );
}
