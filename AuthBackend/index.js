const { request, response } = require('express')
const express = require('express')
var multer = require('multer')
var upload = multer({ dest: 'E:/chat-app/AuthBackend/public/uploads' }).single('image')
const bodyParser = require("body-parser")
const app = express()
const port = 8080
const cors = require('cors');

const cookieParser = require("cookie-parser");

//привязка контекста вызова через bind()

const MessagesController = require("./controller/messages")
const UsersController = require("./controller/users")
const ChatRoomController = require("./controller/chatroom")

const path = require('path')

app.use(cookieParser());

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());


app.get('/messages', MessagesController.getMessages.bind(MessagesController))
app.get('/users', UsersController.getUsers.bind(UsersController))
app.get('/photo', UsersController.getPhoto.bind(UsersController))
app.get('/chat-room-messages', ChatRoomController.getMessages.bind(ChatRoomController))


app.post('/messages', MessagesController.postMessage.bind(MessagesController))

app.post('/registration', UsersController.registerUser.bind(UsersController))

app.post('/authorization', UsersController.authorize.bind(UsersController))

app.post('/photo', upload, UsersController.sendPhoto.bind(UsersController))


app.post('/chat-room-messages', ChatRoomController.postMessage.bind(ChatRoomController))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

