import { httpClient } from "@/services";
import { SignInPayload } from "@/type/auth";
class AuthApi {
    constructor(){}
    async signIn(data: SignInPayload){
        try {
            const res = await httpClient.post("/auth/sign-in", data);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
    async signUp() {
        try {
            const res = await httpClient.post("/auth/logout");
            return res;
        } catch (error) {
            console.log(error);
        }
    }
    async confirmSignUp(){ 

    }
    async forgotPassword(){

    }
    async confirmForgotPassword(){

    }
    async refreshToken(){

    }
    async OAuthCallBack(){
    }
}
const authApi = new AuthApi();
export default authApi;