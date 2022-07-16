
import config from "../../config"
class ChatApi {

    async sendMessage(message, sendMessageDate) {

        const usermsg = {
            message: message, 
            sendMessageDate: sendMessageDate    
        }
        
        let response = await fetch(`http://${config.serverUrl}/messages`, {
            mode: "cors",
            credentials: 'same-origin', 
            method: "post",
            headers: {
                'Content-Type': "application/json",
                'Access-Control-Allow-Origin': "*", 
                'Token': this.getCookie('login')
            },
            body: JSON.stringify(usermsg)
        
        });
        return await response.json();        
    }
    
    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    async getMessages(){

        let response = await fetch(`http://${config.serverUrl}/messages`);
        return await response.json();
        
    }
    

}
export default new ChatApi();


