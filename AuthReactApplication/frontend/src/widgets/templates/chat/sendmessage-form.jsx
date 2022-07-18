import * as React from "react";
import { Card, Row, Col} from 'react-bootstrap';
import MessageForm from "./message-list-form";
import SendMessageInputForm from "./sendmessage-input-form";
import ChatUsersList from "./chat-users-list";
import ConversationSearch from './search-form';
import Styles from "./sendmessage-form.module.css";

const ChatForm = (props) => {

    const getCookie = (name) => {
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${name}=`)
        if (parts.length === 2) return parts.pop().split(';').shift()
    }
    var loginCookie = getCookie('login')

    return (
        <Card className={Styles.MessageWindow}>
            <Card.Body>
                <Row className="px-lg-2 px-2">
                    <Col md="6" xl="4" className="px-0 mb-4 mb-md-0">
                        <ConversationSearch searchUser={props.searchUser} onChatUserChanged={props.onChatUserChanged}/>
                        <ChatUsersList searchUser={props.searchUser} chatUsersMessages={props.chatUsersMessages} onRedirectToChatRoomClicked={props.onRedirectToChatRoomClicked} />
                    </Col>
                    <Col md="6" xl="8" className="pl-md-3 mt-4 mt-md-0 px-lg-auto">
                        <MessageForm chatUsersMessages={props.chatUsersMessages} loginCookie={loginCookie} />
                        <SendMessageInputForm inputmessage={props.inputmessage} onsendMessageClick={props.onsendMessageClick}
                            onMessageChanged={props.onMessageChanged} />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
export default ChatForm

