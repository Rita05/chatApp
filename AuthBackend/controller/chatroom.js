
module.exports = new class ChatRoomController{
    constructor (){
        this.chats =[]
    }

    createNewChatRoom(sender, recipient){
        return{
            chatRoomId: `${sender}&${recipient}`,
            messages: []
        }
    }

    findOrCreateChatRoom(sender, recipient){
        const chatRoomId1=`${sender}&${recipient}`
        const chatRoomId2=`${recipient}&${sender}`

        let searchChat = this.chats.find(chat=>chat.chatRoomId===chatRoomId1 || chat.chatRoomId===chatRoomId2)

        if(!searchChat){
            const newChat=this.createNewChatRoom(sender, recipient)
            this.chats.push(newChat)
            return newChat
        }else{
            return searchChat
        }
    }

    addChatRoomMessage(sender, recipient, message, sendMessageDate) {
        this.findOrCreateChatRoom(sender, recipient).messages.push({login: sender, message, sendMessageDate});
    } 

    postMessage(req, res){
        let {message, sendMessageDate}=req.body
        let loginCookie = req.headers.token
        let recipient = req.query.recipient

        if (message === undefined) { 
            console.error(`Некорректный запрос ${JSON.stringify(req.body.message)}`)
        }
        this.addChatRoomMessage(loginCookie, recipient, message, sendMessageDate)
        res.status(200).end()
    }

    getMessages(req, res){
        let sender=req.query.sender
        let recipient = req.query.recipient

        const chatRoom = this.findOrCreateChatRoom(sender, recipient)

        res.send(JSON.stringify(chatRoom.messages))

    }

}