import * as React from "react"
import styled, { keyframes } from "styled-components"
import { slideInLeft, slideInRight } from "react-animations"
import { ListGroup } from 'react-bootstrap'
import Styles from "./message-list-form.module.css"
import Toast from 'react-bootstrap/Toast'

const SlideInLeftAnimation = keyframes`${slideInLeft}`
const SlideInLeftWrapper = styled.div`
  animation: infinite 2s ${SlideInLeftAnimation}
  animation-iteration-count: 1
`

const SlideInRightAnimation = keyframes`${slideInRight}`
const SlideInRightWrapper = styled.div`
  animation: infinite 2s ${SlideInRightAnimation}
  animation-iteration-count: 1
`

const MessageItem = ({ messageObject, loginCookie }) => {
  const { login, message, sendMessageDate } = messageObject

  const renderMessage = () => { 
    if (login === loginCookie) {
      return (
        <SlideInLeftWrapper>
          <ListGroup.Item
            style={{ border: "none" }}
            className={'d-flex justify-content-start'}
          >
            <Toast className={Styles.CookieCard}
              style={{ width: '35%' }}
              margin='10px 10px'>
              <Toast.Header closeButton={false}>
                <strong className="me-auto">{login}</strong>
                <small>{sendMessageDate}</small>
              </Toast.Header>
              <Toast.Body>{message}</Toast.Body>
            </Toast>
          </ListGroup.Item>
        </SlideInLeftWrapper>
      )
    } else {
      return (
        <SlideInRightWrapper>
          <ListGroup.Item
            style={{ border: "none" }}
            className={'d-flex justify-content-end'}
          >
            <Toast className={Styles.CardMessage}
              style={{ width: '35%' }}
              margin='10px 10px'>
              <Toast.Header closeButton={false}>
                <strong className="me-auto">{login}</strong>
                <small>{sendMessageDate}</small>
              </Toast.Header>
              <Toast.Body>{message}</Toast.Body>
            </Toast>
          </ListGroup.Item>
        </SlideInRightWrapper>
      )
    }
  }

  return (
    <>{renderMessage()}</>
  )
}
export default MessageItem
//TODO: доделать то, с кем я буду чатиться(плюс загрузка аватарки)
//TODO: //потом усложнить token для отправки запросов пользователей, подключить базу

