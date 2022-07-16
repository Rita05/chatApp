import React from 'react'
import { Route, BrowserRouter, Switch } from "react-router-dom"
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Authorization from "./widgets/authorization/authorization"
import ChatPage from "./widgets/chat/sendmessage"
import Registration from "./widgets/registration/registration"
import ChatRoom from "./widgets/chatroom/chatroom"


const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Authorization />} />
      <Route path="/chat" render={() => <ChatPage />} />
      <Route path="/registration" render={() => <Registration />} />
      <Route path="/home" render={() => <Authorization />} />
      <Route path="/chatroom" render={() => <ChatRoom />} />
    </BrowserRouter>
  );
}

export default App
