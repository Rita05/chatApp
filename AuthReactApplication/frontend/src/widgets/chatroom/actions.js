import ChatRoomApi from './Api'

export const TYPES={
    TYPE_ONCHANGE_CHATROOM_MESSAGE: "change-input-message",
    TYPE_ONLOADED_MESSAGES: "load-chatroom-messages",
    TYPE_ONGET_STATUS: "get-send-messages-status"
}

export const onMessageChangedAction=(value)=>{
    return{
        type: TYPES.TYPE_ONCHANGE_CHATROOM_MESSAGE,
        inputmessage: value
    }
}

export const onMessagesLoaded =(messages)=>{
    return{
        type: TYPES.TYPE_ONLOADED_MESSAGES,
        messages: messages
    }
}

export const ongetsendMessageStatus =(resStatus)=>{
    return{
        type: TYPES.TYPE_ONGET_STATUS,
        resStatus: resStatus
    }

}

export const loadChatRoomMessagesAction=(senderUser, recipientUser)=>async(dispatch) =>{
       
    let response = await ChatRoomApi.getMessages(senderUser, recipientUser);
    if (response) {
        dispatch(onMessagesLoaded(response));
    }
}

export const onMessageSendAction=(message, sendMessageDate, chatRecipientUser)=>async(dispatch)=>{

    let resStatus=await ChatRoomApi.sendChatRoomMessage(message, sendMessageDate, chatRecipientUser);

    if (resStatus){
        dispatch(ongetsendMessageStatus(resStatus))
    }

}

export default {
    onMessageChangedAction,
    onMessageSendAction,
    loadChatRoomMessagesAction
}