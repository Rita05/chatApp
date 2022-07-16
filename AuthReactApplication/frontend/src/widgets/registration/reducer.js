import { TYPES } from './actions'

export const initialState = {
    login: '',
    password: '',
    registrationStatus: 0,
    respSendPhotoStatus: 0,
    validationLoginMessage: "",
    validationPasswordMessage: ""

}

export const registrationReducer = (state = initialState, action) => {

    switch (action.type) {
        case TYPES.TYPE_ONCHANGE_FIELD_LOGIN:
            return {
                ...state,
                login: action.login,
                validationLoginMessage: action.validationLoginMessage
            }
        case TYPES.TYPE_ONCHANGE_FIELD_PASSWORD:
            return {
                ...state,
                password: action.password,
                validationPasswordMessage: action.validationPasswordMessage
            }
        case TYPES.TYPE_ONREGISTER_CLICKED:
            return {
                ...state,
                registrationStatus: action.serverStatus
            }
        case TYPES.TYPE_ON_GET_PHOTO:
            return{
                ...state,
                respSendPhotoStatus: action.respSendPhotoStatus
            }
        default:
            return state
    } 
}

export default registrationReducer