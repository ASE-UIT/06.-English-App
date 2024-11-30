import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { GrammarScreenNavigationProp } from "../../type";
import grammarService from "../../services/grammar.service";
import GrammarModel from "../../models/GrammarModel";

const Grammar = () => {
  const [grammars, setGrammars] = useState<GrammarModel[]>([]);
  const fetchGrammar = async () => {
    try {
      const res = await grammarService.getGrammar();
      setGrammars(res.data)
    } catch (error) {
      console.error("Error fetching grammar:", error);
    }
  };
  useEffect(() => {
    fetchGrammar();

  }, [grammars]);

  const navigation = useNavigation<GrammarScreenNavigationProp>();
  return (
    <SafeAreaView className=" justify-center items-center flex ">
      <View
        style={{ marginLeft: 40, marginRight: 40 }}
        className="flex border p-5 mt-[35px] mx-10  w-full h-fit flex-col justify-center items-start"
      >
        {grammars.map((grammar, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("GrammarDetail", {grammarmodel: grammar})}
              key={index}
              className="flex flex-row justify-start items-center p-2  gap-3"
            >
              <Icon name="play" type="material-community" size={20} />
              <Text className="text-black text-base">{grammar.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Grammar;
