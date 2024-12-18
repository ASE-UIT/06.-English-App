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
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import authService from "../../services/auth.service";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../../type";
import * as SecureStore from "expo-secure-store";
import { User } from "../../models";
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';
const Profile = () => {
  const [profile, setProfile] = useState({
    id: "",
    createDate: "",
    updateDate: "",
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    avatarURL: "",
    awsCognitoId: "",
    additionalInfo: {
      schoolName: "",
    },
  });
  const handleInputChange = (field: string, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };
  const [show, setShow] = useState(false);
  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) {
      setProfile((prev) => ({ ...prev, birthDate: selectedDate.toISOString() }));
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

  const handleUpdateProfile = async (profile: User) => {
    try {
      const result = await userService.updateUser(profile);
      if (result.statusCode === 200) {
        console.log("Profile updated successfully");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  const [image, setImage] = useState<string | null>(null);
  const [imageType, setImageType] = useState<string | null>(null);
  // Handle Camera
  const handleCamera = () => {
    launchCamera(
      { mediaType: 'photo', cameraType: 'back', quality: 1 },
      (response: ImagePickerResponse) => {
        if (response.didCancel) {
          console.log('User canceled camera picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          const uri = response.assets?.[0]?.uri;
          const type = response.assets?.[0]?.type; // MIME type of the image
          setImage(uri || null);
          setImageType(type || null);
        }
      }
    );
  };

  // Handle Image Picker
  const handleImagePicker = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1 },
      (response: ImagePickerResponse) => {
        if (response.didCancel) {
          console.log('User canceled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          const uri = response.assets?.[0]?.uri;
          const type = response.assets?.[0]?.type; // MIME type of the image
          setImage(uri || null);
          setImageType(type || null);
        }
      }
    );
  };
  return (
    <SafeAreaView>
      <MainHeader />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex flex-col justify-center items-center">
          <Avatar
            source={
              profile?.avatarURL
                ? { uri: profile.avatarURL }
                : require("../../../assets/avatar.jpg")
            }
            size="xlarge"
            rounded
            containerStyle={{ marginTop: 20 }}
            onPress={() => console.log("Works!")}
          />
          <TouchableOpacity onPress={handleImagePicker}><Text>Change Image</Text></TouchableOpacity>
          <View className="w-[90%] justify-center items-center ">
            <Text className="text-black ml-5 self-start text-base font-semibold leading-none">
              BirthDate
            </Text>
            <TouchableOpacity onPress={() => setShow(true)} className="flex ">
              <View className="bg-white rounded-[15px] shadow p-3">
                <Text className="text-black ml-[2px] text-base font-semibold leading-none">
                  {new Date(profile.birthDate).toLocaleDateString("vi-VN", {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Text>
              </View>
              {show && (
                <DateTimePicker
                  value={new Date(profile.birthDate)}
                  mode="date" // Use "time" for time picker or "datetime" for both
                  display="default" // "default", "spinner", or "calendar" (iOS-specific options)
                  onChange={onChange} // Callback when the date is changed
                />
              )}
            </TouchableOpacity>
          </View>
          <InputField
            label="First Name"
            value={profile.firstName}
            onChangeText={(value) => handleInputChange("firstname", value)}
          />
          <InputField
            label="Last Name"
            value={profile.lastName}
            onChangeText={(value) => handleInputChange("lastname", value)}
          />
          <InputField label="Email" value={profile.email} onChangeText={(value) => handleInputChange("email", value)} />
          <InputField
            label="Phone Number"
            value={profile.phone}
            onChangeText={(value) => handleInputChange("phone", value)}
          />
          <View
            style={{ marginTop: 100 }}
            className="flex flex-row justify-center items-center  gap-7"
          >
            <TouchableOpacity
              className="flex-row justify-between items-center bg-secondary rounded-lg shadow p-3"
              onPress={() => {
                //handleUpdateProfile({ ...profile, birthDate: new Date(profile.birthDate) });
                console.log(profile);
              }}
            >
              <Icon
                name="checkbox-marked-outline"
                type="material-community"
                color="white"
                size={25}
              />
              <Text className="text-white text-xs  font-semibold">
                Update
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row justify-between items-center bg-secondary rounded-lg shadow p-3"
              onPress={async () => {
                try {
                  // because currently the signOut api is not working (timeout, return HTML instead of JSON), i will just remove the token from the storage and navigate to login screen
                  await SecureStore.deleteItemAsync("accessToken");
                  await SecureStore.deleteItemAsync("refreshToken");
                  loginNav.navigate("Login");
                  const res = await authService.signOut();
                  if (res.statusCode === 201) {
                    console.log("Logged out");
                    await SecureStore.deleteItemAsync("accessToken");
                    await SecureStore.deleteItemAsync("refreshToken");
                    loginNav.navigate("Login");
                  } else {
                    console.error("Failed to log out: ", res.message);
                  }
                } catch (err) {
                  console.error("Failed to log out: ", err);
                }
              }}
            >
              <Icon
                name="logout"
                type="material-community"
                color="white"
                size={25}
              />
              <Text className="text-white text-xs  font-semibold">
                Log out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );

};

export default Profile;
