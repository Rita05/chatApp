import config from "../../config"

class ChatRoomApi {

    async sendChatRoomMessage(message, sendMessageDate, chatRecipientUser) {

        const userChatRoomMessage={
            message: message,
            sendMessageDate: sendMessageDate
        }

        let response = await fetch(`http://${config.serverUrl}/chat-room-messages?recipient=${chatRecipientUser}`, {
            mode: "cors",
            credentials: 'same-origin',
            method: "post",
            headers: {
                'Content-Type': "application/json",
                'Access-Control-Allow-Origin': "*", 
                'Token': this.getCookie('login')
            },
            body: JSON.stringify(userChatRoomMessage)

        });
        
        return response.status
      
    }

    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    async getMessages(senderUser, recipientUser){

        let response = await fetch(`http://${config.serverUrl}/chat-room-messages?sender=${senderUser}&recipient=${recipientUser}`);
        return await response.json();
        
    }

}

export default new ChatRoomApi()