import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button, Icon } from "@rneui/themed";
import { BottomSheet } from "@rneui/base";

const Lesson = () => {
  return (
    <View className="flex gap-1 mt-[10px]">
      <Text className="text-base font-semibold">Lesson 1</Text>
      <Text
        style={{ color: "rgba(0, 0, 0, 0.7)" }}
        className="text-sm font-medium"
      >
        Introduction
      </Text>
    </View>
  );
};

const CourseDetail = () => {
  const [isPlaylist, setIsPlaylist] = React.useState(true);
  const [isDescription, setIsDescription] = React.useState(false);

  const handlePlaylist = () => {
    setIsPlaylist(true);
    setIsDescription(false);
  };
  const handleDescription = () => {
    setIsPlaylist(false);
    setIsDescription(true);
  };
  const [isBottomSheetVisible, setIsBottomSheetVisible] = React.useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState(0);
  return (
    <View className="mt-[50px] px-[45px] h-auto relative">
      <Image
        source={require("../../../assets/Frame9.png")}
        className="rounded-3xl w-full h-64"
      />
      <Text className="text-lg font-semibold">Reading Course For Beginer</Text>
      <Text>
        Created by <Text className="text-[#5D5FEF]">Ms. Thuy</Text>
      </Text>
      <View className="flex flex-row justify-between">
        <View className="flex flex-row items-center gap-1">
          <Icon
            name="star-o"
            type="font-awesome"
            onPress={() => {
              console.log("Press");
            }}
          />
          <Text>4.5</Text>
        </View>
        <Text className="text-[#5D5FEF] text-3xl">40$</Text>
      </View>

      <View>
        <View className="flex flex-row py-3 bg-[#A5A6F6] justify-around rounded-[20px]">
          <Button
            title="Playlist"
            buttonStyle={{
              backgroundColor: isPlaylist ? "#5D5FEF" : "#A5A6F6",
              borderRadius: 20,
              width: 120,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={handlePlaylist}
          />
          <Button
            title="Description"
            buttonStyle={{
              backgroundColor: !isDescription ? "#A5A6F6" : "#5D5FEF",
              borderRadius: 20,
              width: 120,
              height: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={handleDescription}
          />
        </View>
        <FlatList
          // data={[]}
          data={[
            "Lesson 1",
            "Lesson 2",
            "Lesson 3",
            "Lesson 4",
            "Lesson 5",
            "Lesson 6",
            "Lesson 7",
            "Lesson 8",
            "Lesson 9",
            "Lesson 10",
            "Lesson 1",
            "Lesson 2",
            "Lesson 3",
            "Lesson 4",
            "Lesson 5",
            "Lesson 6",
            "Lesson 7",
            "Lesson 8",
            "Lesson 9",
            "Lesson 10",
          ]}
          renderItem={({ item }) => Lesson()}
          style={{ display: "flex", height: "40%", marginTop: 10 }}
          scrollEnabled={true}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View className="flex flex-row bg-white pl-8 pr-8 pb-3 pt-[14px] w-screen justify-around h-[80px] absolute bottom-0 right-0 left-0">
        <Button
          buttonStyle={{
            backgroundColor: "#EF5DA8",
            borderRadius: 20,
            width: 60,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon
            name="cart-outline"
            type="material-community"
            color="white"
            onPress={() => {
              console.log("Press");
            }}
          />
        </Button>
        <Button
          title="BUY NOW"
          onPress={() => {
            setIsBottomSheetVisible(true);
          }}
          buttonStyle={{
            backgroundColor: "#5D5FEF",
            borderRadius: 20,
            width: 210,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>
      <BottomSheet
        isVisible={isBottomSheetVisible}
        modalProps={{
          animationType: "slide",
        }}
      >
        <View className="flex flex-col items-center justify-between pb-4 h-[50vh] bg-white rounded-2xl">
          <View className="header flex flex-row justify-between w-full p-4">
            <Text className="text-lg text-gray-500">Choose payment method</Text>
            <Icon
              name="close"
              type="material-community"
              onPress={() => {
                setIsBottomSheetVisible(false);
              }}
            />
          </View>
          <View className="payment-method-cards flex flex-col gap-2 items-center w-3/4">
            <TouchableOpacity
              className="payment-method-card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
                width: "100%",
                padding: 15,
                borderRadius: 20,
                borderStyle: "solid",
                borderWidth: selectedPaymentMethod === 0 ? 1 : 0,
                borderColor: "#6b7280",
                backgroundColor:
                  selectedPaymentMethod !== 0
                    ? "rgba(165, 166, 246, 0.2)"
                    : "transparent",
                position: "relative",
              }}
              onPress={() => {
                setSelectedPaymentMethod(0);
              }}
            >
              <Icon
                name="credit-card"
                type="font-awesome"
                color="#5D5FEF"
                size={40}
              />
              <Text className="text-lg">Pay with card</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="payment-method-card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 16,
                width: "100%",
                padding: 15,
                borderRadius: 20,
                borderStyle: "solid",
                borderWidth: selectedPaymentMethod === 1 ? 1 : 0,
                borderColor: "#6b7280",
                backgroundColor:
                  selectedPaymentMethod !== 1
                    ? "rgba(165, 166, 246, 0.2)"
                    : "transparent",
                position: "relative",
              }}
              onPress={() => {
                setSelectedPaymentMethod(1);
              }}
            >
              <Icon name="bank" type="font-awesome" color="#5D5FEF" size={40} />
              <Text className="text-lg">Pay with bank</Text>
            </TouchableOpacity>
          </View>
          <View
            className="security-standards-info"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              gap: 8,
              backgroundColor: "#E3F7EF",
              borderRadius: 15,
              width: "85%",
              padding: 10,
            }}
          >
            <Icon name="check" type="font-awesome" color="#10B981" size={10} />
            <Text className="text-xs text-gray-500">
              We adhere entirely to the data security standards of the payment
              card industry.
            </Text>
          </View>
          <View className="button-container w-full flex items-center">
            <Button
              title="Continue"
              buttonStyle={{
                backgroundColor: "#5D5FEF",
                borderRadius: 40,
                width: 210,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default CourseDetail;