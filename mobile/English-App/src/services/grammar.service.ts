import http from "./Http";
class GrammarService {
    //global grammer
    async getGrammar() {
        const response = await http.get('grammar');
        return response;
    }
}
const grammarService = new GrammarService()
export default grammarService;