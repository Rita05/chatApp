import * as React from "react";
import { ListGroup, Card } from 'react-bootstrap';
import Styles from "./message-list-form.module.css";
import Toast from 'react-bootstrap/Toast';

const MessageItem = ({ messageObject, loginCookie }) => {
  const { login, message, sendMessageDate } = messageObject

  return (
    <ListGroup.Item
      style={{ border: "none" }}
      className={`${login === loginCookie ? 'd-flex justify-content-start' : 'd-flex justify-content-end'}`}
    >
      <Toast className={`${login === loginCookie ? Styles.CookieCard : Styles.CardMessage}`}
        style={{ width: '35%' }}
        margin='10px 10px'>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">{login}</strong>
          <small>{sendMessageDate}</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ListGroup.Item>
  )
}
export default MessageItem
//TODO: доделать то, с кем я буду чатиться(плюс загрузка аватарки)
//TODO: //потом усложнить token для отправки запросов пользователей, подключить базу

