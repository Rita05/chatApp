
module.exports = new class MessagesController{

    constructor() {
        this.ChatUsersMessages=[]
    }

    getMessages(req, res) {
        console.log(`Messages get request`)
        res.send(JSON.stringify(this.ChatUsersMessages))
    }

    postMessage(req, res) {
        console.log(`Messages post request`)
        let {message, sendMessageDate}=req.body
        let loginCookie = req.headers.token
        if (message === undefined) { 
          console.error(`Некорректный запрос ${JSON.stringify(req.body)}`)
        }
        this.ChatUsersMessages.push({login: loginCookie, message: message, sendMessageDate: sendMessageDate})
        res.send(this.ChatUsersMessages)
    }
}

