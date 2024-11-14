import { API_URL } from "./config";
import { accessToken } from "./config";
let url = API_URL + "user/me";

class userService {
  async getUser() {
    const response = await fetch(url, {
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return await response.json();
  }
}

export default new userService();