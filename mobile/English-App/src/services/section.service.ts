import { API_URL, ACCESS_TOKEN } from "@env";

const API = process.env.API_URL;
const accessToken = process.env.ACCESS_TOKEN;

let url = API + 'section';
class sectionService {
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
export default new sectionService();