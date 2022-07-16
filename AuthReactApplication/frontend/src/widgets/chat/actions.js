
import ChatApi from "./api"

export const TYPES = {

    TYPE_ONCHANGE_MESSAGE: "change-input-message",
    TYPE_ONGET_MESSAGES: "get-array-messages",
    TYPE_ONREDIRECT_TOCHATROOM: "redirect-to-chatroom",
    TYPE_ONCHANGE_USER: "change-chat-user"
}

export const onMessageChangedAction = (value) => {
    return {
        type: TYPES.TYPE_ONCHANGE_MESSAGE,
        inputmessage: value
    }

}
const ongetMessages = (userMessages) => {
    return {
        type: TYPES.TYPE_ONGET_MESSAGES,
        messagesFromServer: userMessages
    }
}

export const ongetMessagesAction = () => async (dispatch) => {
    let response = await ChatApi.getMessages();
    if (response) {
        dispatch(ongetMessages(response));
    }
}
export const onMessageSendAction = (message, sendMessageDate) => async (dispatch) => {

    let response = await ChatApi.sendMessage(message, sendMessageDate);
    if (response) {
        dispatch(ongetMessages(response));
    }

}

const onRedrectToChatRoomAction=(chatUserLogin, chatUserPhoto)=>{
    return{
        type: TYPES.TYPE_ONREDIRECT_TOCHATROOM,
        chatUserLogin: chatUserLogin,
        chatUserPhoto: chatUserPhoto
    }
}

export const onChatUserChangedAction=(value)=>{
    return{
       type: TYPES.TYPE_ONCHANGE_USER,
       searchUser: value
    }
}

export default {
    onMessageChangedAction,
    onMessageSendAction,
    ongetMessagesAction,
    onRedrectToChatRoomAction,
    onChatUserChangedAction

}

