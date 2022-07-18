import * as React from "react"
import {ListGroup } from 'react-bootstrap'
import MessageItem from "./message-item"
import Styles from "./message-list-form.module.css"

const MessageForm = (props) => {
    return (
        <>
            <ListGroup border='none' className={Styles.MessageFormContent}>
                {props.chatUsersMessages.map((messageObject) =>(
                     <MessageItem messageObject={messageObject} loginCookie={props.loginCookie}/>
                ))}
            </ListGroup>
        </>
    )
}
export default MessageForm
