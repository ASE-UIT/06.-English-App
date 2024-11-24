import http from "./Http";

class UserService {
  async getUser() {
    try {
      const response = await http.get("user/me");
      return response;
    } catch (error: any) {
      throw new Error(`HTTP error! status: ${error.message}`);
    }
  }
}

export default new UserService();
