import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { Icon } from "@rneui/themed";
import InputField from "./InputField";

const Profile = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("1234567890");
  const [email, setEmail] = React.useState("exam@gmail.com");
  const [password, setPassword] = React.useState("*******");

  const [username, setUsername] = React.useState("johndoe");
  return (
    <View className="flex  flex-col justify-center items-center">
      <Avatar
        source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        size="xlarge"
        rounded
        containerStyle={{ marginTop: 20 }}
        onPress={() => console.log("Works!")}
      />
      <View className=" mt-5 flex flex-row items-center ">
        <Text className="text-2xl text-primary font-black mr-1@ ">
          John Doe
        </Text>

        <Icon
          onPress={() => console.log("")}
          name="square-edit-outline"
          type="material-community"
          size={25}
          containerStyle={{
            borderRadius: 999,
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </View>
      <InputField
        label="Username"
        value={username}
        onChangeText={setUsername}
      />
      <InputField
        label="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <InputField label="Email" value={email} onChangeText={setEmail} />
      <InputField
        label="Password"
        value={password}
        onChangeText={setPassword}
      />

      <View
        style={{ marginTop: "auto" }}
        className="flex flex-row justify-center items-center  gap-7"
      >
        <TouchableOpacity className="flex-row justify-between items-center bg-secondary rounded-lg shadow p-3">
          <Icon
            name="checkbox-marked-outline"
            type="material-community"
            color="white"
            size={25}
          />
          <Text className="text-white text-xs  font-semibold">Update</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center bg-secondary rounded-lg shadow p-3">
          <Icon name="cog" type="material-community" color="white" size={25} />
          <Text className="text-white text-xs  font-semibold">Setting</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center bg-secondary rounded-lg shadow p-3">
          <Icon
            name="logout"
            type="material-community"
            color="white"
            size={25}
          />
          <Text className="text-white text-xs  font-semibold">Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
