import * as React from "react"
import AuthorizationForm, { FIELD_IDS } from "../templates/authorization/authorization-form"
import { connect } from 'react-redux'
import actions from "./actions"
import authorizationReducer from "./reducer"
import { Redirect } from "react-router-dom"
import ChatPage from "../chat/sendmessage"

export const Authorization = (props) => {

    const [isRedirectToRegistration, setRedirectToRegistration] = React.useState(false)

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
    const onEntranceClicked = () => {
        props.onAuthCheckedClicked(props.login, props.password)
    }
    const setCookie = async (cname, cvalue) => {
        var d = new Date();
        var expires = d.toUTCString();
        document.cookie = `${cname} = ${cvalue}; path="/" `
    }


    if (props.authStatus === 200) {
        setCookie("login", props.login)
        return <Redirect to='/chat' />
    }
    else if (props.authStatus === 401) {
        return <Redirect to='/registration' />
    }


    const onRegistrationRedirect = () => {
        setRedirectToRegistration(true)
    }

    if (isRedirectToRegistration) {
        return <Redirect to='/registration' />
    }

    const templateProps = {
        login: props.login,
        password: props.password,
        onFieldChanged,
        onEntranceClicked,
        onRegistrationRedirect
    }

    return (
        <>
            {
                <AuthorizationForm {...templateProps} />
            }
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        ...state.authorizationReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        onLoginChanged: (value) => dispatch(actions.createActionLoginChanged(value)),
        onPasswordChanged: (value) => dispatch(actions.createActionPasswordChanged(value)),
        onAuthCheckedClicked: (login, password) => dispatch(actions.createActionRedirect(login, password))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization)
//TODO: проверка что регистрация выполнилась
//TODO: проверка с токеном 