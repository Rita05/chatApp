import { Reducer } from 'redux'
import { TYPES } from './actions'

export const initialState = {
    login: '',
    password: '',
    authStatus: 0

}

export const authorizationReducer = (state=initialState, action) => {

    switch (action.type) {
        case TYPES.TYPE_ONCHANGE_FIELD_LOGIN:
            return {
                ...state,
                login: action.login
            }
        case TYPES.TYPE_ONCHANGE_FIELD_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case TYPES.TYPE_ONENTRANCE_CLICKED:
            return{
                ...state,
                authStatus: action.authStatus
            }
        default:
            return state
    }
}

export default authorizationReducer
