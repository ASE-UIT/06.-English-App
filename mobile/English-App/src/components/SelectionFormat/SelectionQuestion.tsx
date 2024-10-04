import { View, Text } from "react-native";
import React from "react";
import { List } from "react-native-paper";
type SelectionFormatProps = {
  number: number;
  items: string[];
};

const SelectionQuestion = ({ number, items }: SelectionFormatProps) => {
  return (
    <View>
      <Text className=" text-lg">{number}.</Text>
      <List.Section>
        {items.map((item, index) => (
          <List.Item 
          key={index} 
          title={item} 
            />
        ))}
      </List.Section>
    </View>
  );
};

export default SelectionQuestion;
