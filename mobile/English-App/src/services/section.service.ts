import { API_URL, ACCESS_TOKEN } from "@env";

const API = process.env.API_URL;
const accessToken = process.env.ACCESS_TOKEN;

let url = API + 'section/get-all-section-by-lesson';
class SectionService {
    async getSection(id:string) {
        url = url + '/' + id;
        const response = await fetch(url, {
            headers: {
                'accept': '*/*',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.json();
    }
}
const sectionService = new SectionService();
export default sectionService;