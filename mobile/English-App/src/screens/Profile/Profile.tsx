import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import InputField from "./InputField"; // Adjust the import path as needed
import userService from "../../services/user.service";
import MainHeader from "../../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import authService from "../../services/auth.service";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../../type";
import * as SecureStore from "expo-secure-store";
const Profile = () => {
  const [user, setUser] = useState<User>();
  const [isEditingName, setIsEditingName] = useState(false);
  const nameInputRef = useRef<TextInput>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [avatar, setAvatar] = useState();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const nameInputRef = useRef<TextInput>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [avatar, setAvatar] = useState();
  const loginNav = useNavigation<LoginScreenNavigationProp>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await userService.getUser();

        if (result.statusCode === 200) {
          setUser(result.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const handleEditName = () => {
    setIsEditingName(!isEditingName);
    if (!isEditingName) {
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100); // Delay to ensure state update
    }
  };

  if (!isLoaded) {
    <SafeAreaView>
      <MainHeader />
      <Text>Loading...</Text>
    </SafeAreaView>;
  }

  return (
    <SafeAreaView>
      <MainHeader />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex flex-col justify-center items-center">
          <Avatar
            source={{ uri: user?.avatarURL }}
            size="xlarge"
            rounded
            containerStyle={{ marginTop: 20 }}
            onPress={() => console.log("Works!")}
          />
          <View className="mt-5 flex flex-row items-center">
            {isEditingName ? (
              <TextInput
                ref={nameInputRef}
                value={name}
                onChangeText={setName}
                onBlur={handleEditName}
                autoFocus
                style={{ fontSize: 24, color: "#5d5fef", fontWeight: "bold" }}
              />
            ) : (
              <Text className="text-2xl text-primary font-black mr-1">
                {user?.firstName} {user?.lastName}
              </Text>
            )}
            <Icon
              onPress={handleEditName}
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
            style={{ marginTop: 100 }}
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
              <Icon
                name="cog"
                type="material-community"
                color="white"
                size={25}
              />
              <Text className="text-white text-xs  font-semibold">Setting</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row justify-between items-center bg-secondary rounded-lg shadow p-3"
              onPress={async () => {
                try {
                  const res = await authService.signOut();
                  if (res.statusCode === 201) {
                    console.log("Logged out");
                    await SecureStore.deleteItemAsync("accessToken");
                    await SecureStore.deleteItemAsync("refreshToken");
                    loginNav.navigate("Login");
                  } else {
                    console.error(res.message);
                  }
                } catch (err) {
                  console.error(err);
                }
              }}
            >
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
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Profile;
