import * as React from "react";
import { Form, Button } from 'react-bootstrap';
import Styles from "./sendmessage-form.module.css"

const SendMessageInputForm = (props) => {
    return (
        <Form>
            <Form.Group className={Styles.InputMessageComponent}>
                <Form.Control defaultValue={props.inputmessage.value}
                    onChange={(event) => props.onMessageChanged(event.target.value)} type="text" placeholder="Введите соообщение"/>
                <Button className={Styles.Button} onClick={props.onsendMessageClick}>
                    Отправить
                </Button>
            </Form.Group>
        </Form>
    )
}

export default SendMessageInputForm

