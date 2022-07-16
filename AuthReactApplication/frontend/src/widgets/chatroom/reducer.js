import { TYPES } from '../chat/actions'
import {TYPES as CHATROOMTYPES} from './actions'

export const initialState = {
    chatUserLogin: "",
    chatUserPhoto: "",
    inputmessage: '',
    chatUsersMessages: [{login: "", message: "", sendMessageDate: ""}]

}

export const ChatRoomReducer = (state = initialState, action) => {

    switch (action.type) {
        case TYPES.TYPE_ONREDIRECT_TOCHATROOM:
            return {
                ...state,
                chatUserLogin: action.chatUserLogin,
                chatUserPhoto: action.chatUserPhoto
            }
        case CHATROOMTYPES.TYPE_ONCHANGE_CHATROOM_MESSAGE:
            return{
                ...state,
                inputmessage: action.inputmessage
            }
        case CHATROOMTYPES.TYPE_ONLOADED_MESSAGES:
            return{
                ...state,
                chatUsersMessages: action.messages,
                inputmessage: ""
                
            }
        default:
            return state
    }
}

export default ChatRoomReducer
