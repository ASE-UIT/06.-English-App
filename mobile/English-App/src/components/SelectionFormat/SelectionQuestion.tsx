import { View, Text } from "react-native";
import React from "react";
import {Dropdown} from 'react-native-element-dropdown';
import DropdownComponent from "../DropdownComponent";

type SelectionFormatProps = {
  id: number;
  question: string;
  options: string[];
};

const SelectionQuestion = ({ id, question, options }: SelectionFormatProps) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <View className=" flex flex-row">
      <Text className="text-lg">{id}.</Text>
      <DropdownComponent />
      <Text className="text-lg">{question}</Text>
    </View>
  );
};
export default SelectionQuestion;
