import * as React from "react"
import RegistrationForm, { FIELD_IDS } from "../templates/registration/registration-form"
import { connect } from 'react-redux'
import actions from "./actions"
import registrationReducer from "./reducer"
import { Redirect } from "react-router-dom"
import ChatPage from "../chat/sendmessage"


export const Registration = (props) => {

    const [isRedirectToMainPage, setRedirectToMainPage] = React.useState(false)

    const onFieldChanged = (value, fieldId) => {
        switch (fieldId) {
            case FIELD_IDS.login:
                props.onLoginChanged(value);
                console.log(props.login);
                break;
            case FIELD_IDS.password:
                props.onPasswordChanged(value);
                console.log(props.password);
                break;
        }
    }
    const onRegistrationClicked = () => {
        props.onRegistration(props.login, props.password)
    }


    const onPhotoSelected = (fileName) => {
        props.sendPhoto(fileName, props.login)
    }

    console.log(props.respSendPhotoStatus)

    const onMainPageClicked = () => {
        setRedirectToMainPage(true)
    }

    if (isRedirectToMainPage) {
        return <Redirect to='/' />
    }

    const templateProps = {
        login: props.login,
        password: props.password,
        registrationStatus: props.registrationStatus,
        respSendPhotoStatus: props.respSendPhotoStatus,
        validationPasswordMessage: props.validationPasswordMessage,
        validatinLoginMessage: props.validationLoginMessage,
        onFieldChanged,
        onRegistrationClicked,
        onPhotoSelected,
        onMainPageClicked

    }

    return (
        <>
            {
                <RegistrationForm {...templateProps} />
            }
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        ...state.registrationReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        onLoginChanged: (value) => dispatch(actions.createActionLoginChanged(value)),
        onPasswordChanged: (value) => dispatch(actions.createActionPasswordChanged(value)),
        onRegistration: (login, password) => dispatch(actions.createActionRegisterUser(login, password)),
        sendPhoto: (file, login) => dispatch(actions.createActionOnGetPhoto(file, login))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)

