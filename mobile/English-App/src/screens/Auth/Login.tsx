import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Button, CheckBox } from "@rneui/themed";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../../type";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <ImageBackground
      source={require("../../../assets/signupbg.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View className="flex gap-5 mt-[40px] items-center">
        <Image
          source={require("../../../assets/avatar.png")}
          className="w-[100px] h-[110px]"
        />
        <Text className="text-[38px] font-semibold text-[#5D5FEF]">
          Welcome Back
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
            password: "",
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

              <View className="flex flex-row justify-between items-center w-[280px]">
                <CheckBox
                  title="Remember me"
                  checked={rememberMe}
                  onPress={() => setRememberMe(!rememberMe)}
                  containerStyle={{
                    backgroundColor: "transparent",
                    borderWidth: 0,
                  }}
                  textStyle={{
                    color: "#000",
                  }}
                  checkedColor="#EF5DA8"
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate("ForgotPassword")}
                >
                  <Text
                    style={{
                      color: "#EF5DA8",
                      textDecorationLine: "underline",
                    }}
                  >
                    Forgot password?
                  </Text>
                </TouchableOpacity>
              </View>

              <Button
                title={"Login"}
                containerStyle={{
                  display: "flex",
                  alignItems: "center",
                }}
                buttonStyle={{
                  backgroundColor: "#EF5DA8",
                  borderRadius: 12,
                  width: 150,
                }}
                // onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
        <Text>
          Don't have an account?{" "}
          <Text
            style={{ color: "#EF5DA8", textDecorationLine: "underline" }}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign Up
          </Text>{" "}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Login;
