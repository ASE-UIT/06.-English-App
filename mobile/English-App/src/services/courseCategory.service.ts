import { API_URL, ACCESS_TOKEN } from "./config";
class courseCategoryService {
  async getCourseCategories() {
    const url = `${API_URL}course-category`;

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

export default new courseCategoryService();
