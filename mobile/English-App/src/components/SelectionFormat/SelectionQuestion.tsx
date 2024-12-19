import { View, Text } from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import DropdownComponent from "../DropdownComponent";

type SelectionFormatProps = {
  text: string;
  options: string[];
  order: number;
};



const SelectionQuestion = ({ text, options, order }: SelectionFormatProps) => {
  const [expanded, setExpanded] = React.useState(false);
  
  
  return (
    <View className=" flex flex-row  items-start">
      <Text className=" text-primaryLight text-lg">{order}.</Text>
      <DropdownComponent options={options} />
      <Text className="question flex self-end text-lg flex-shrink mr-2 ">
        {text}
      </Text>
    </View>
  );
};
export default SelectionQuestion;
