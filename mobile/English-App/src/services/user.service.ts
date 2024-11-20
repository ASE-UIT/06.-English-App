import { ACCESS_TOKEN, API_URL } from "@env";
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