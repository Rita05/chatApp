import { TYPES } from "./actions"

export const initialState = {
    inputmessage: "",
    chatUsersMessages: [{login: "", message: "", sendMessageDate: ""}],
    searchUser: ""

}

export const ChatRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TYPE_ONCHANGE_MESSAGE:
            return {
                ...state,
                inputmessage: action.inputmessage
            }
        case TYPES.TYPE_ONGET_MESSAGES:
            return {
                ...state,
                chatUsersMessages: action.messagesFromServer,
                inputmessage: ""
            }
        case TYPES.TYPE_ONCHANGE_USER:
            return{
                ...state,
                searchUser: action.searchUser
            }
        default:
            return state
    }
}

export default ChatRoomReducer


