import RegistrationApi from "./Api"
import ValidationData from "./ValidationData"
export const TYPES = {

    TYPE_ONCHANGE_FIELD_LOGIN: "change-login-field",
    TYPE_ONCHANGE_FIELD_PASSWORD: "change-password-field",
    TYPE_ONREGISTER_CLICKED: "server-message-registration",
    TYPE_ON_GET_PHOTO: "user-profile-photo"

}

export const createActionLoginChanged = (value) => {
    var validationMeassage = ValidationData.checkonValidationLogin(value)
    return {
        type: TYPES.TYPE_ONCHANGE_FIELD_LOGIN,
        login: value,
        validationLoginMessage: validationMeassage
    }
}

export const createActionPasswordChanged = (value) => {
    var validationMessage = ValidationData.checkonValidationPassword(value)
    return {
        type: TYPES.TYPE_ONCHANGE_FIELD_PASSWORD,
        password: value,
        validationPasswordMessage: validationMessage
    }

}

export const ongetStatus = (respStatus) => {
    return {
        type: TYPES.TYPE_ONREGISTER_CLICKED,
        serverStatus: respStatus
    }
}
export const ongetPhoto = (respSendPhotoStatus) => {
    return {
        type: TYPES.TYPE_ON_GET_PHOTO,
        respSendPhotoStatus: respSendPhotoStatus
    }
}

export const createActionRegisterUser = (login, password) => async (dispatch) => {

    let respStatus = await RegistrationApi.sendRegistrationData(login, password)
    if (respStatus) {
        dispatch(ongetStatus(respStatus))
    }
}

export const createActionOnGetPhoto = (file, login) => async (dispatch) => {
    let respSendPhotoStatus = await RegistrationApi.sendUserPhoto(file, login)
    if (respSendPhotoStatus) {
        dispatch(ongetPhoto(respSendPhotoStatus))
    }

}

export default {
    createActionLoginChanged,
    createActionPasswordChanged,
    createActionRegisterUser,
    createActionOnGetPhoto,
    ongetStatus
}