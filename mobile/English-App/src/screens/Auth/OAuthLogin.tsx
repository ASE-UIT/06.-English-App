import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { LoginScreenNavigationProp } from "../../type";
import { Button } from "@rneui/themed";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: "",
  tokenEndpoint: "",
};

const OAuthLogin = ({ provider }: { provider: string }) => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const redirectUri = "my-android-app://callback";
  const clientId = "";
  const scope = "openid profile email";

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId,
      redirectUri,
      usePKCE: false,
      extraParams: {
        identity_provider: provider,
        response_type: "code",
      },
      scopes: [scope],
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success" && response.params.code) {
      const authorizationCode = response.params.code;

      // Exchange the authorization code for tokens
      const exchangeToken = async () => {
        try {
          const tokenResponse = await fetch(discovery.tokenEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              code: authorizationCode,
              redirect_uri: redirectUri,
              client_id: clientId,
              grant_type: "authorization_code",
            }),
          });
          const data = await tokenResponse.json();
          await SecureStore.setItemAsync("accessToken", data.access_token);
          await SecureStore.setItemAsync("refreshToken", data.refresh_token);
          navigation.navigate("BottomTabsNavigator");
        } catch (error) {
          console.error("Failed to exchange authorization code:", error);
        }
      };

      exchangeToken();
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      {request && (
        <Button
          title="Login"
          onPress={() => {
            promptAsync();
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OAuthLogin;
