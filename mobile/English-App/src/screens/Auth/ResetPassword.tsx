import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { CheckBox, Button } from "@rneui/themed";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
  AuthCongratsScreenNavigationProp,
  LoginScreenNavigationProp,
  ResetPasswordScreenNavigationProp,
  RootStackParamList,
} from "../../type";

const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required("Password is required"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});
type ResetPasswordRouteProp = RouteProp<RootStackParamList, "ResetPassword">;
const ResetPassword = () => {
  const [isSelected, setSelection] = useState(false);
  const handleCheckBox = () => {
    setSelection(!isSelected);
    console.log(isSelected);
  };
  const navigation = useNavigation<AuthCongratsScreenNavigationProp>();
  const route = useRoute<ResetPasswordRouteProp>();
  const { username, confirmationCode } = route.params;
  return (
    <ImageBackground
      source={require("../../../assets/signupbg.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View className="flex gap-5 mt-[10px] items-center">
        <Image
          source={require("../../../assets/avatar.png")}
          className="w-[100px] h-[110px]"
        />
        <Text className="text-[38px] font-semibold text-[#5D5FEF]">
          Create new password
        </Text>
        <Text className="text-[16px] text-gray-500">
          Enter your new password below
        </Text>
        <Formik
          initialValues={{
            newPassword: "",
            confirmNewPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View className="flex gap-y-3 mt-3 mx-auto">
              <TextInput
                placeholder="New password"
                className="border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4"
                onChangeText={handleChange("newPassword")}
                onBlur={handleBlur("newPassword")}
                value={values.newPassword}
                secureTextEntry
              />
              {errors.newPassword && touched.newPassword && (
                <Text style={{ color: "red" }}>{errors.newPassword}</Text>
              )}

              <TextInput
                placeholder="Retype new password"
                className="border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4"
                onChangeText={handleChange("confirmNewPassword")}
                onBlur={handleBlur("confirmNewPassword")}
                value={values.confirmNewPassword}
                secureTextEntry
              />
              {errors.confirmNewPassword && touched.confirmNewPassword && (
                <Text style={{ color: "red" }}>
                  {errors.confirmNewPassword}
                </Text>
              )}
              <View className="h-2"></View>

              <Button
                title={"Reset password"}
                containerStyle={{
                  display: "flex",
                  alignItems: "center",
                }}
                buttonStyle={{
                  backgroundColor: "#EF5DA8",
                  borderRadius: 12,
                  width: 150,
                }}
                onPress={() => {
                  console.log(values);
                  console.log(username);
                  console.log(confirmationCode);
                  navigation.navigate("AuthCongrats", {
                    isConfirmSignUp: false,
                  });
                }}
              />
            </View>
          )}
        </Formik>
        <Text>
          Back to{" "}
          <Text
            style={{ color: "#EF5DA8", textDecorationLine: "underline" }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Login
          </Text>{" "}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default ResetPassword;
