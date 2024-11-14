require('dotenv').config()


const API_URL = process.env.API_URL;
const accessToken = process.env.ACCESS_TOKEN;
class grammarService {
    async getGrammar() {
        const url = API_URL + 'grammar';
        console.log(url);
        console.log(accessToken);
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