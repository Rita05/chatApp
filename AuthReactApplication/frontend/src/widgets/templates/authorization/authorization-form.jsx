import * as React from "react";
import { Form, Button, Container } from 'react-bootstrap';
import Styles from "./authorization.module.css"

export const FIELD_IDS = {
  login: "login",
  password: "password"
}

const AuthorizationForm = (props) => {

  return (
    <Container className={Styles.AuthContainer}>
      <h3 className={Styles.h3}>Вход</h3>
      <Form className={Styles.AuthorizationForm}>
        <Form.Group controlId="formBasicLogin">
          <Form.Label>Логин</Form.Label>
          <Form.Control defaultValue={props.login.value}
            onChange={(event) => props.onFieldChanged(event.target.value, FIELD_IDS.login)} type="text" placeholder="Логин" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control defaultValue={props.password.value}
            onChange={(event) => props.onFieldChanged(event.target.value, FIELD_IDS.password)} type="password" placeholder="Пароль" />
        </Form.Group>
        <div className={Styles.ButtonGroup}>
          <Button className={Styles.Button} onClick={props.onEntranceClicked} >
            Вход
          </Button>
          <Button className={Styles.Button} onClick={props.onRegistrationRedirect} >
            Регистрация
          </Button>
        </div>
      </Form>
    </Container>
  )
}
export default AuthorizationForm
//TODO: сделать упрощение и передавать объект при изменении данных формы
//TODO: подключить базу данных для получения и отправки сообщений 
