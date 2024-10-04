import { View, Text } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";
import { ListItemAccordion } from "@rneui/base/dist/ListItem/ListItem.Accordion";

type SelectionFormatProps = {
  id: number;
  question: string;
  options: string[];
};

const SelectionQuestion = ({ id, question, options }: SelectionFormatProps) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <View>
      <Text className="text-lg">{id}.</Text>
      <ListItemAccordion
        isExpanded={expanded}
        onPress={() => setExpanded(!expanded)}
        noIcon
        noRotation
        bottomDivider
        className=" flex-shrink"
      >
        {options.map((option, i) => (
          <ListItem key={i}>
            <ListItem.Content>
              <ListItem.Title>{option}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ListItemAccordion>

      <Text className="text-lg">{question}</Text>
    </View>
  );
};
export default SelectionQuestion;
