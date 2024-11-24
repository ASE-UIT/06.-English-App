import { API_URL, ACCESS_TOKEN } from "@env";

const API = process.env.API_URL;
const accessToken = process.env.ACCESS_TOKEN;
class grammarService {
    async getGrammar() {
        const url = API + 'grammar';
        const response = await fetch(url, {
            headers: {
                'accept': '*/*',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        return response.json();
    }
}

export default new grammarService();