import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { Button } from "@rneui/themed";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import {
  AuthCongratsScreenNavigationProp,
  LoginScreenNavigationProp,
  ResetPasswordScreenNavigationProp,
  RootStackParamList,
} from "../../type";
import authService from "../../services/auth.service";

type OTPVerificationRouteProp = RouteProp<
  RootStackParamList,
  "OTPVerification"
>;

const OTPVerification = () => {
  const resetPassNav = useNavigation<ResetPasswordScreenNavigationProp>();
  const loginNav = useNavigation<LoginScreenNavigationProp>();
  const authCongratsNav = useNavigation<AuthCongratsScreenNavigationProp>();
  const route = useRoute<OTPVerificationRouteProp>();
  const { username, isConfirmSignUp } = route.params;
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleVerify = async () => {
    const enteredCode = code.join("");
    console.log(enteredCode);
    if (isConfirmSignUp) {
      try {
        const res = await authService.confirmSignUp({
          username,
          code: enteredCode,
        });
        console.log(res);
        if (res.statusCode === 201) {
          authCongratsNav.navigate("AuthCongrats", { isConfirmSignUp: true });
        } else {
          console.error("Invalid code");
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      resetPassNav.navigate("ResetPassword", {
        username,
        confirmationCode: enteredCode,
      });
    }
  };
  const handleResendCode = async () => {
    // Call resendConfirmationCode API
  };

  return (
    <ImageBackground
      source={require("../../../assets/signupbg.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View className="flex gap-3 mt-[40px] items-center">
        <Image
          source={require("../../../assets/avatar.png")}
          className="w-[100px] h-[110px]"
        />
        <Text className="text-[38px] font-semibold text-[#5D5FEF]">
          6-digit code
        </Text>
        <Text className="text-[16px] text-gray-500">
          Enter the code that is sent to your email
        </Text>
        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleCodeChange(index, value)}
            />
          ))}
        </View>
        <Text
          style={{
            marginBottom: 20,
          }}
        >
          Haven’t received the code yet?{" "}
          <Text
            style={{
              color: "#EF5DA8",
              textDecorationLine: "underline",
            }}
            onPress={handleResendCode}
          >
            Resend
          </Text>
        </Text>
        <Button
          title="Verify"
          onPress={handleVerify}
          buttonStyle={styles.verifyButton}
        />
        <Text>
          Back to{" "}
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

const styles = StyleSheet.create({
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 280,
  },
  codeInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#EF5DA8",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
  },
  verifyButton: {
    backgroundColor: "#EF5DA8",
    borderRadius: 12,
    width: 150,
  },
});

export default OTPVerification;
