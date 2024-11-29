import { View, Text } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";

const HeaderRight = () => {
  return (
    <View className="flex flex-row p-0 justify-center items-center">
      <IconButton icon='arrow-down' onPress={()=>console.log('up')}  />
      <IconButton icon='arrow-up' onPress={()=>console.log('down')}/>
    </View>
  );
};

export default HeaderRight;
