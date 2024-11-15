
import { API_URL,ACCESS_TOKEN } from "@env";

let url = API_URL + "user/me";

class UserService {
  async getUser() {
    const url = `${API_URL}user/me`;
    const response = await fetch(url, {
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
}

export default new UserService();