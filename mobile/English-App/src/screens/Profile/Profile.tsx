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
import InputField from "./InputField";
import userService from "../../services/user.service";
import MainHeader from "../../components/MainHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import authService from "../../services/auth.service";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../../type";
import * as SecureStore from "expo-secure-store";
import { User } from "../../models";
const Profile = () => {
  const [profile, setProfile] = useState<User>();
  const [isEditingName, setIsEditingName] = useState(false);
  const nameInputRef = useRef<TextInput>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [avatar, setAvatar] = useState();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(false);

    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const loginNav = useNavigation<LoginScreenNavigationProp>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await userService.getUser();
        if (result.statusCode === 200) {
          setProfile(result.data);
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
      }, 100);
    };
  }

  const handleUpdateProfile = async (profile: User) => {
    try {
      const result = await userService.updateUser(profile);
      if (result.statusCode === 200) {
        console.log("Profile updated successfully");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  }

  if (!isLoaded) {
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
              source={{ uri: profile?.avatarURL }}
              size="xlarge"
              rounded
              containerStyle={{ marginTop: 20 }}
              onPress={() => console.log("Works!")}
            />
            <View className="w-[90%] justify-center items-center ">
              <Text className="text-black ml-5 self-start text-base font-semibold leading-none">
                BirthDate
              </Text>
              <TouchableOpacity
                onPress={() => setShow(true)}
                className="flex ">
                <View className="bg-white rounded-[15px] shadow p-3">
                  <Text className="text-black ml-[2px] text-base font-semibold leading-none">
                    {date.toDateString()}
                  </Text>
                </View>
                {show && (
                  <DateTimePicker
                    value={date} // Pass the current date value
                    mode="date" // Use "time" for time picker or "datetime" for both
                    display="default" // "default", "spinner", or "calendar" (iOS-specific options)
                    onChange={onChange} // Callback when the date is changed
                  />
                )}
              </TouchableOpacity>
            </View>
            <InputField
              label="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <InputField label="Email" value={email} onChangeText={setEmail} />
            <InputField label="First Name" value={firstName} onChangeText={setFirstName} />
            <InputField label="Last Name" value={lastName} onChangeText={setLastName} />
            <View
              style={{ marginTop: 100 }}
              className="flex flex-row justify-center items-center  gap-7"
            >
              <TouchableOpacity className="flex-row justify-between items-center bg-secondary rounded-lg shadow p-3" onPress={() => {
                if (profile) {
                  if (phoneNumber !== profile.phone && phoneNumber !== "") {
                    profile.phone = phoneNumber;
                  }
                  if (email !== profile.email && email !== "") {
                    profile.email = email;
                  }

                  if (date !== profile.birthDate && date !== new Date()) {
                    profile.birthDate = date;
                  }

                  if (firstName !== profile.firstName && firstName !== "") {
                    profile.firstName = firstName;
                  }

                  if (lastName !== profile.lastName && lastName !== "") {
                    profile.lastName = lastName;
                  }

                  handleUpdateProfile(profile);
                }
              }}>
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
  }
};

export default Profile;