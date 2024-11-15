
import { API_URL,ACCESS_TOKEN } from "@env";

let url = API_URL + "user/me";

class userService {
  async getUser() {
    const response = await fetch(url, {
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return await response.json();
  }
}

export default new userService();