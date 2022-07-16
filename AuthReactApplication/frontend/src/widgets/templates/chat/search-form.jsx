import * as React from "react";
import { Form, InputGroup } from 'react-bootstrap';

const ConversationSearch = (props) => {

    return (
        <Form>
            <InputGroup> 
                <InputGroup.Text>
                    <img src='../search-icon.svg' />
                </InputGroup.Text>
                <Form.Control defaultValue={props.searchUser.value} type="text" placeholder="Поиск..."
                    onChange={(event) => props.onChatUserChanged(event.target.value)}
                />
            </InputGroup> 
        </Form>
    )

}

export default ConversationSearch