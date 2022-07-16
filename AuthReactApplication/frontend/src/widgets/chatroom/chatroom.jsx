import { useEffect } from "react";
import ChatRoomReducer from './reducer'
import * as React from "react";
import { connect } from "react-redux"
import ChatRoomForm from '../templates/chatroom/chat-room-form'
import actions from './actions'
import { Redirect } from "react-router-dom"


export const ChatRoom = (props) => {
     
    const [isRedirectToChatUsersList, setRedirectToChatUsersList] = React.useState(false)

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    var loginCookie = getCookie('login')
    
    useEffect(() => {

        props.loadMessages(loginCookie, props.chatUserLogin)

        const interval = setInterval(() => {
            props.loadMessages(loginCookie, props.chatUserLogin)
            console.debug("Messages loading")
        }, 5000)
        return () => clearInterval(interval)

    }, [])

    const onsendMessageClick = () => {
        console.log(props.inputmessage)
        if (props.inputmessage !== "") {
            let dateMessage = new Date()
            let options = {
                hour: 'numeric',
                minute: 'numeric'
            }
            let sendMessageDate = dateMessage.toLocaleString('ru', options)
            props.onsendMessage(props.inputmessage, sendMessageDate, props.chatUserLogin)
        }
    }


    const onRedirectToChatUsersList =()=>{
        setRedirectToChatUsersList(true)
    }


    if (isRedirectToChatUsersList) {
        return <Redirect to='/chat' />
    }

    const templateProps = {
        chatUserLogin: props.chatUserLogin,
        chatUserPhoto: props.chatUserPhoto,
        onMessageChanged: props.onMessageChanged,
        inputmessage: props.inputmessage,
        chatUsersMessages: props.chatUsersMessages,
        onsendMessageClick,
        onRedirectToChatUsersList
        
    }

    return (
        <>
            {
                <ChatRoomForm {...templateProps} />
            }
        </>
    )


}

const mapStateToProps = (state) => {
    return {
        ...state.ChatRoomReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChanged: (value) => dispatch(actions.onMessageChangedAction(value)),
        onsendMessage: (message, sendMessageDate, chatRecipientUser) => dispatch(actions.onMessageSendAction(message, sendMessageDate, chatRecipientUser)),
        loadMessages: (senderUser, recipientUser) => dispatch(actions.loadChatRoomMessagesAction(senderUser, recipientUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)