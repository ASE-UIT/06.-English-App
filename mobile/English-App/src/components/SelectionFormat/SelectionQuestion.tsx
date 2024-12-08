import { View, Text } from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import DropdownComponent from "../DropdownComponent";

type SelectionFormatProps = {
  id: string;
  text: string;
  options: string[];
};

const SelectionQuestion = ({ id, question, options }: SelectionFormatProps) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <View className=" flex flex-row  items-start">
      <Text className=" text-primaryLight text-lg">{id}.</Text>
      <DropdownComponent />
      <Text className="question flex self-end text-lg flex-shrink mr-2 ">
        {question}
      </Text>
    </View>
  );
};
export default SelectionQuestion;
