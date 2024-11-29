import { API_URL, ACCESS_TOKEN } from "@env";
import http from "./Http";

class SectionService {
  async getSection(id: string) {
    const response = await http.get("section/get-all-section-by-lesson/" + id);
    return response;
  }
}
const sectionService = new SectionService();
export default sectionService;
