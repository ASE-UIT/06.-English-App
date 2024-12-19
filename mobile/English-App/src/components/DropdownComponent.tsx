import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "A", value: "A" },
  { label: "B", value: "B" },
  { label: "C", value: "C" },
  { label: "D", value: "D" },
];
type DropdownComponentProps = {
  options: string[];
};

const DropdownComponent = ({ options }: DropdownComponentProps) => {
  const data = options.map((option) => {
    return { label: option, value: option };
  });
  return (
    <View className=" w-[80px] pl-3 flex justify-center px-2  ">
      <Dropdown
        data={data}
        maxHeight={1000}
        labelField={"label"}
        valueField={"value"}
        placeholder={""}
        onChange={(item) => console.log(item)}
        search={false}
        containerStyle={styles.container}
        placeholderStyle={styles.placeholder}
        renderRightIcon={() => <Text></Text>}
        selectedTextStyle={styles.selectedText}
        itemContainerStyle={styles.itemContainer}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: "solid",
    borderColor: "#F178B6",
    backgroundColor: "white",
    width: 100,
    alignSelf: "stretch",
  },
  placeholder: {
    width: "auto",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#F178B6",
    backgroundColor: "white",

    flex: 1,
  },
  selectedText: {
    width: "auto",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#5D5FEF",
    backgroundColor: "#FCDDEC",
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 1,
    backgroundColor: "transparent",
    width: 80,
  },
});
