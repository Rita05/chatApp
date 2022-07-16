
import АuthorizationApi from "./Api"
export const TYPES = {

    TYPE_ONCHANGE_FIELD_LOGIN: "change-login-field",
    TYPE_ONCHANGE_FIELD_PASSWORD: "change-password-field",
    TYPE_ONENTRANCE_CLICKED: "redirect-on-chat"

}

export const createActionLoginChanged = (value) => {
    return {
        type: TYPES.TYPE_ONCHANGE_FIELD_LOGIN,
        login: value
    }
}

export const createActionPasswordChanged = (value) => {

    return {
        type: TYPES.TYPE_ONCHANGE_FIELD_PASSWORD,
        password: value
    }

}
export const isАuthorized = (serverStatus) => {
    return {
        type: TYPES.TYPE_ONENTRANCE_CLICKED,
        authStatus: serverStatus
    }
}
export const createActionRedirect = (login, password) => async (dispatch) => {
    let serverStatus = await АuthorizationApi.sendForАuthorizationData(login, password)
    if (serverStatus) {
        dispatch(isАuthorized(serverStatus))
    }
}

export default {
    createActionLoginChanged,
    createActionPasswordChanged,
    createActionRedirect
}
