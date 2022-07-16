import { Card } from 'react-bootstrap';
import Styles from "./chat-room-form.module.css";
import { Button, Form, Image } from 'react-bootstrap';
import MessageForm from "../chat/message-list-form";

const ChatRoomForm = (props) => {

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    var loginCookie = getCookie('login')

    return (
        <Card className={Styles.ChatRoomContainer}>
            <div className={Styles.Toolbar}>
                <div className={Styles.AboutUserGroup}>
                    <Image className={Styles.Image} src={`http://localhost:8080/uploads/${props.chatUserPhoto}`}></Image>
                    <h1 className={Styles.ToolbarTitle}>{props.chatUserLogin}</h1>
                </div>
                <Button className={Styles.ButtonRedirect} onClick={props.onRedirectToChatUsersList}>На главную</Button>
            </div>
            <MessageForm chatUsersMessages={props.chatUsersMessages} loginCookie={loginCookie} />
            <Form>
                <Form.Group className={Styles.MessageSendForm}>
                    <Form.Control className={Styles.MessageInput} defaultValue={props.inputmessage.value}
                        onChange={(event) => props.onMessageChanged(event.target.value)} type="text" placeholder="Введите соообщение" />
                    <Button className={Styles.SendButton} onClick={props.onsendMessageClick}>
                        Отправить
                    </Button>
                </Form.Group>
            </Form>
        </Card>
    )
}

export default ChatRoomForm