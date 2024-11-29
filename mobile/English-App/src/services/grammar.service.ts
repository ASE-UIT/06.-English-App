import { API_URL, ACCESS_TOKEN } from "@env";

const API = process.env.API_URL;
const accessToken = process.env.ACCESS_TOKEN;
class grammarService {
    //global grammer
    async getGrammar() {
        const url = API + 'grammar';
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'accept': '*/*',
                'Authorization': `Bearer ${accessToken}`
            }
        });
        
        return response.json();
    }
    
}

export default new grammarService();