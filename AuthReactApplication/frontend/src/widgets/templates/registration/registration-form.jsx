import * as React from "react";
import { useState } from "react";
import { Form, Button, Container } from 'react-bootstrap';

import Modal from 'react-bootstrap/Modal';
import Styles from "./registration-form.module.css"

export const FIELD_IDS = {
  login: "login",
  password: "password"
}

const RegistrationForm = (props) => {

  const [show, setShow] = useState(true)
  const [showSendPhoto, setShowSendPhoto] = useState(true)

  const onCloseModal = () => setShow(!show);
  const onCloseSendPhoto = () => setShowSendPhoto(!showSendPhoto)

  const onPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.onPhotoSelected(event.target.files[0]);
    }
  }

  return (
    <Container className={Styles.registryContainer}>
      <h3 className={Styles.h3}>Регистрация</h3>
      <Form noValidate className={Styles.registrationForm}>
        <Form.Group controlId="formBasicLogin" hasValidation>
          <Form.Label>Логин</Form.Label>
          <Form.Control defaultValue={props.login.value}
            onChange={(event) => props.onFieldChanged(event.target.value, FIELD_IDS.login)} type="text" placeholder="Логин" />
          <Form.Text className="text-muted">{props.validationLoginMessage} </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword" hasValidation>
          <Form.Label>Пароль</Form.Label>
          <Form.Control defaultValue={props.password.value}
            onChange={(event) => props.onFieldChanged(event.target.value, FIELD_IDS.password)} type="password" placeholder="Пароль" />
          <Form.Text className="text-muted">{props.validationPasswordMessage} </Form.Text>
        </Form.Group>
        <Form.File className={Styles.FormControlFile} onChange={onPhotoSelected} name="image" />
        <div className={Styles.ButtonsGroup}>
          <Button className={Styles.Button} onClick={props.onRegistrationClicked} >
            Зарегистрироваться
          </Button>
          <Button className={Styles.Button} onClick={props.onMainPageClicked}>
            На главную
          </Button>
        </div>
      </Form>
      <Modal
        size="sm"
        show={(props.registrationStatus !== 400) || !show ? false : true}
        onHide={onCloseModal}
        aria-labelledby="example-modal-sizes-title-sm-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Oшибка Регистрации
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Такой пользователь {props.login} уже существует</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={onCloseModal}>
            закрыть
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        size="sm"
        show={(props.respSendPhotoStatus !== 500) || !showSendPhoto ? false : true}
        onHide={onCloseModal}
        aria-labelledby="example-modal-sizes-title-sm-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Oшибка Регистрации
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Ошибка загрузки фото пользователя {props.login}</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={onCloseSendPhoto}>
            закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default RegistrationForm
