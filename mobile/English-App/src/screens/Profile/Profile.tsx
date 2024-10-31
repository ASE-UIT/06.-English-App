import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { Icon } from "@rneui/themed";

const Profile = () => {
  return (
    <View className="flex flex-col justify-center items-center">
      <Avatar
        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        size="xlarge"
        rounded
        containerStyle={{ marginTop: 20 }}
        onPress={() => console.log("Works!")}
      />
      <View className=" mt-5 flex flex-row items-center ">
        <Text className="text-2xl text-primary font-black mr-1@ ">John Doe</Text>
        <Icon name="square-edit-outline" type="material-community" size={25} />
      </View>
      <View className=" inputField flex flex-col justify-center items-center gap-5">
      



      </View>
    </View>
  );
};

export default Profile;
