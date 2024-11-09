import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

const Grammar = () => {
  const titles = [
    "Present perfect tense",
    "Past perfect tense",
    "Future perfect tense",
    "Present perfect continuous tense",
    "Past perfect continuous tense",
    "Future perfect continuous tense",
    "Present simple tense",
    "Past simple tense",
  ];
  return (
    <SafeAreaView className=" justify-center items-center flex ">
      <View
        style={{ marginLeft: 40, marginRight: 40 }}
        className="flex border p-5 mt-[35px] mx-10  w-full h-fit flex-col justify-center items-start"
      >
        {titles.map((title, index) => {
          return (
            <TouchableOpacity key={index} className="flex flex-row justify-start items-center p-2  gap-3">
              <Icon name="play" type="material-community" size={20} />
              <Text className="text-black text-base">{title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Grammar;
