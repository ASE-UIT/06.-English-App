import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import grammarService from "../../services/grammar.service";
import { GrammarModel } from "../../models";
import RenderHTML from "react-native-render-html";
import {
  HTMLElementModel,
  defaultHTMLElementModels,
} from "react-native-render-html";
import { RootStackParamList } from "../../type";

type DetailGrammarRouteProp = RouteProp<RootStackParamList, "GrammarDetail">;

export default function DetailGrammar() {
  const route = useRoute<DetailGrammarRouteProp>();
  const { id } = route.params;
  const [grammar, setGrammar] = useState<GrammarModel | null>(null);

  useEffect(() => {
    const fetchGrammarDetail = async () => {
      try {
        const res = await grammarService.getGrammarById(id);
        if (res.data) {
          setGrammar(res.data);
        }
      } catch (error) {
        console.error("Error fetching grammar:", error);
      }
    };
    fetchGrammarDetail();
  }, [id]);
  console.log(grammar?.content);
  

  const { width } = Dimensions.get("window");

  const customHTMLElementModels = {
    ...defaultHTMLElementModels,
    iframe: HTMLElementModel.fromCustomModel({
      tagName: 'iframe',
      mixedUAStyles: {
        width: '100%',
        height: 200,
      },
      contentModel: 'mixed',
      isOpaque: true,
    }),
    video: HTMLElementModel.fromCustomModel({
      tagName: 'video',
      mixedUAStyles: {
        width: '100%',
        height: 200,
      },
      contentModel: 'block',
      isOpaque: true,
    }),
   
  };

  return (
    <ScrollView>
      {grammar ? (
        <RenderHTML
          contentWidth={width}
          source={{ html: grammar.content || "" }}
          customHTMLElementModels={customHTMLElementModels}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
}
