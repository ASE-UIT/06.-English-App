import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";

import { Button, IconButton, ProgressBar } from "react-native-paper";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const FlashCard = () => {
  return (
    <View
      className="items-center bg-[#F5F5F5]"
      style={{ width: width, height: height }}
    >
      {/* Header */}
      <View className=" relative  w-full h-[164px] bg-primary rounded-bl-3xl rounded-br-3xl ">
        <View className="flex flex-row items-center">
          <IconButton
            icon="arrow-left"
            size={32}
            className="ml-2"
            iconColor="white"
          />

          <Text className="text-white text-3xl font-semibold font-['Work Sans']">
            Vocabulary
          </Text>
        </View>
      </View>
      {/* Body */}
      <View
        className=" h-[420px] relative bg-white rounded-b-3xl flex items-center justify-center "
        style={{ width: width - 80 }}
      >
        <Text className="text-black text-2xl font-medium font-['Work Sans']">
          luxury(n)
        </Text>
      </View>

      {/* Progress Bar */}
      <View className="mt-[50px]">
        <ProgressBar
          progress={0.5}
          color="#5D5FEF"
          style={styles.progressBar}
        />
        <Text className="text-black text-base font-medium">5/10</Text>
      </View>

      {/*Button*/}
      <Button
        mode="contained"
        buttonColor="#5D5FEF"
        style={styles.button}
        className="mt-[50px]"
        children="NEXT CARD"
        onPress={() => console.log("Next Card")}
        labelStyle={styles.label}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    width: width - 80,
    height: 30,
    backgroundColor: "Iris/blue3",
    borderRadius: 50,
  },
  label: {
    color: "#FFF",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: 24,
    width:width-80,
  },
  button:{
    width: width - 80,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default FlashCard;
