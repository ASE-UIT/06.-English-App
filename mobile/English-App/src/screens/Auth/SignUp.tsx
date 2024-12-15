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
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import {
  LoginScreenNavigationProp,
  OTPVerificationScreenNavigationProp,
} from "../../type";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  birthDate: Yup.date().required("Birth date is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});

const SignUp = () => {
  const [isSelected, setSelection] = useState(false);
  const handleCheckBox = () => {
    setSelection(!isSelected);
    console.log(isSelected);
  };
  const loginNav = useNavigation<LoginScreenNavigationProp>();
  const otpVerifyNav = useNavigation<OTPVerificationScreenNavigationProp>();

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
          Create an account
        </Text>
        <View className="flex flex-row">
          <TouchableOpacity>
            <Image
              source={require("../../../assets/google.png")}
              className="w-[40px] h-[40px] mr-12"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/facebook.png")}
              className="w-[40px] h-[40px]"
            />
          </TouchableOpacity>
        </View>

        <Formik
          initialValues={{
            username: "",
            firstName: "",
            lastName: "",
            birthDate: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log("Form submitted", values);
            // Call signUp API
            // if successful navigate to OTPVerification screen
            otpVerifyNav.navigate("OTPVerification", {
              username: values.username,
              isConfirmSignUp: true,
            });
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
                placeholder="First name"
                className="border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4"
                onChangeText={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName && (
                <Text style={{ color: "red" }}>{errors.firstName}</Text>
              )}
              <TextInput
                placeholder="Last name"
                className="border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4"
                onChangeText={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName && (
                <Text style={{ color: "red" }}>{errors.lastName}</Text>
              )}
              <TextInput
                placeholder="Username"
                className="border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              {errors.username && touched.username && (
                <Text style={{ color: "red" }}>{errors.username}</Text>
              )}
              <TextInput
                placeholder="Email"
                className="border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={{ color: "red" }}>{errors.email}</Text>
              )}
              <TextInput
                placeholder="Phone number"
                className="border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
              />
              {errors.phone && touched.phone && (
                <Text style={{ color: "red" }}>{errors.phone}</Text>
              )}

              <TextInput
                placeholder="Password"
                className="border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={{ color: "red" }}>{errors.password}</Text>
              )}

              <TextInput
                placeholder="Confirm password"
                className="border-2 border-[#EF5DA8] w-[280] h-10 rounded-[10px] items-center px-4"
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={{ color: "red" }}>{errors.confirmPassword}</Text>
              )}

              <CheckBox
                center
                title={
                  <Text style={{ color: "black" }}>
                    I agree to the{" "}
                    <Text
                      style={{
                        color: "#EF5DA8",
                        textDecorationLine: "underline",
                      }}
                      onPress={() => console.log("Terms & Conditions pressed")}
                    >
                      Terms & Conditions
                    </Text>
                  </Text>
                }
                checked={isSelected}
                onPress={handleCheckBox}
              />
              <Button
                title={"Sign Up"}
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
                  otpVerifyNav.navigate("OTPVerification", {
                    username: values.username,
                    isConfirmSignUp: true,
                  });
                }} // Wrap handleSubmit in an arrow function
              />
            </View>
          )}
        </Formik>
        <Text>
          Already have an account?{" "}
          <Text
            style={{ color: "#EF5DA8", textDecorationLine: "underline" }}
            onPress={() => {
              loginNav.navigate("Login");
            }}
          >
            Login
          </Text>{" "}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default SignUp;
