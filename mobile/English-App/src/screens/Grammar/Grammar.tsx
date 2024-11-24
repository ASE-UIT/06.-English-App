import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { GrammarScreenNavigationProp } from "../../type";
import grammarService from "../../services/grammar.service";
import sectionService from "../../services/section.service";

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

  useEffect(() => {
    grammarService.getGrammar()
      .then((response) => {
        
      })
      .catch((error) => {
        
      });

  },[]);

  const navigation = useNavigation<GrammarScreenNavigationProp>();
  return (
    <SafeAreaView className=" justify-center items-center flex ">
      <View
        style={{ marginLeft: 40, marginRight: 40 }}
        className="flex border p-5 mt-[35px] mx-10  w-full h-fit flex-col justify-center items-start"
      >
        {titles.map((title, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("GrammarDetail")}
              key={index}
              className="flex flex-row justify-start items-center p-2  gap-3"
            >
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
