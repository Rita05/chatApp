import * as React from "react";
import { useState } from "react";
import { Form, Button, Container } from 'react-bootstrap';
import { Formik } from "formik";
import * as yup from "yup";
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

  const validateLogin = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (/^[a-zA-Z0-9]+$/.test(value)) {
      error = "Invalid input login";
    }
    return error;
  }

  const validatePassword = (value) => {
    let error;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s])/;
    if (!value) {
      error = 'Required';
    } else if (value.length < 8) {
      error = "Password must be 8 characters long";

    } else if (passwordRegex.test(value)) {
      error = "Invalid password. Must contain number, latin letter and special character"
    }
    return error;
  }

}
export default RegistrationForm
//TODO: отличие type="login"от type="text"
//TODO: сделать упрощение и передавать объект при изменении данных формы
//TODO: доработать стилями форму(размеры полей ввода, кнопку)
//TODO: подключить базу данных для получения и отправки сообщений 
