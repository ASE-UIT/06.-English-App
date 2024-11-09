import React from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import { Dropdown } from "react-native-element-dropdown";
export default function PayWithCard() {
  return (
    <View className="w-full h-full">
      <View className="h-full mt-[50px] mx-[16px] flex flex-col justify-around items-center">
        <Text className="text-[64px] text-blue1">$40</Text>
        <View className="form w-full flex gap-4">
          <View className="flex flex-col flex-wrap gap-1">
            <Text className="text-lg font-semibold">Card Information</Text>
            <TextInput
              placeholder="Card Number"
              style={{
                width: "100%",
                borderWidth: 1,
                borderColor: "#5D5FEF",
                borderRadius: 5,
                padding: 5,
                fontSize: 20,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                placeholder="MM/YY"
                style={{
                  width: "30%",
                  borderWidth: 1,
                  borderColor: "#5D5FEF",
                  borderRadius: 5,
                  padding: 5,
                  fontSize: 20,
                }}
              />
              <TextInput
                placeholder="CVC"
                style={{
                  width: "68%",
                  borderWidth: 1,
                  borderColor: "#5D5FEF",
                  borderRadius: 5,
                  padding: 5,
                  fontSize: 20,
                }}
              />
            </View>
          </View>
          <View className="flex flex-col flex-wrap gap-1">
            <Text className="text-lg font-semibold">Country or region</Text>
            <Dropdown
              data={[
                {
                  label: "Vietnam",
                  value: "Vietnam",
                },
                {
                  label: "USA",

                  value: "USA",
                },
              ]}
              labelField={"label"}
              valueField={"value"}
              onChange={(value) => console.log(value)}
              style={{
                width: "100%",
                borderWidth: 1,
                borderColor: "#5D5FEF",
                borderRadius: 5,
                padding: 5,
              }}
              selectedTextStyle={{
                fontSize: 20,
              }}
              value={"Vietnam"}
            />
          </View>
          <View className="flex flex-col flex-wrap gap-1">
            <Text className="text-lg font-semibold">Zip code</Text>
            <TextInput
              placeholder="Zip code"
              style={{
                width: "100%",
                borderWidth: 1,
                borderColor: "#5D5FEF",
                borderRadius: 5,
                padding: 5,
                fontSize: 20,
              }}
            />
          </View>
        </View>
        <Button
          title="Pay"
          buttonStyle={{
            borderRadius: 30,
            width: 120,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#5D5FEF",
          }}
          titleProps={{
            style: {
              fontSize: 24,
              color: "white",
            },
          }}
        />
      </View>
    </View>
  );
}
