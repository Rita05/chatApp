import * as React from "react"
import { useEffect } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import ChatForm from "../templates/chat/sendmessage-form"
import actions from "./actions"
import ChatReducer from "./reducer"

export const ChatPage = (props) => {

    // const [isRedirectToChatRoom, setRedirectToChatRoom] = React.useState(false)

    useEffect(() => {

        props.ongetMessagesFromInterval()

        const interval = setInterval(() => {
            props.ongetMessagesFromInterval()
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
            props.onsendMessage(props.inputmessage, sendMessageDate)
        }

    }

    //редирект на страницу с chatRoom конкретного пользователя 
    const onRedirectToChatRoomClicked = (chatUserLogin, chatUserPhoto) => {
        props.onChatRoomClicked(chatUserLogin, chatUserPhoto)
    }

    console.log(props.searchUser)

    const templateProps = {
        inputmessage: props.inputmessage,
        chatUsersMessages: props.chatUsersMessages,
        onMessageChanged: props.onMessageChanged,
        onsendMessage: props.onsendMessage,
        ongetMessagesFromInterval: props.ongetMessagesFromInterval,
        searchUser: props.searchUser,
        onChatUserChanged: props.onChatUserChanged,
        onsendMessageClick,
        onRedirectToChatRoomClicked

    }

    return (
        <>
            {
                <ChatForm {...templateProps} />
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.ChatReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChanged: value => dispatch(actions.onMessageChangedAction(value)),
        onsendMessage: (message, sendMessageDate) => dispatch(actions.onMessageSendAction(message, sendMessageDate)),
        ongetMessagesFromInterval: () => dispatch(actions.ongetMessagesAction()),
        onChatRoomClicked: (chatUserLogin, chatUserPhoto) => dispatch(actions.onRedrectToChatRoomAction(chatUserLogin, chatUserPhoto)),
        onChatUserChanged:(value) => dispatch(actions.onChatUserChangedAction(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)

