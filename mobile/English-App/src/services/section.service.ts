require('dotenv').config()


const API_URL = process.env.API_URL;
const accessToken = process.env.ACCESS_TOKEN;

let url = API_URL + 'section';
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
    async getSections() {
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