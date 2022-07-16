import { useEffect } from "react";
import { useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { ListGroup, Image } from 'react-bootstrap';
import Style from './sendmessage-form.module.css'

import config from "../../../config"


const ChatUsersList = (props) => {

    // Загрузка зарегистрированных пользователей и их фотографий и их отображение
    const [usersPhotos, setUsersPhotos] = useState([])

    const [isRedirectToChatRoom, setRedirectToChatRoom] = useState(false)

    useEffect(() => {
        ongetPhoto();
        const interval = setInterval(() => {
            ongetPhoto();
        }, 2000)
        return () => clearInterval(interval)

    }, [])

    const ongetPhoto = async () => {
        const response = await fetch(`http://${config.serverUrl}/photo`)
        const photos = await response.json()
        setUsersPhotos(photos)
        console.debug("Loading users avatars ...")
    }

    const onRedirectToChatRoomClicked = (userLogin, userPhoto) => {
        props.onRedirectToChatRoomClicked(userLogin, userPhoto)
        setRedirectToChatRoom(true)
    }

    if (isRedirectToChatRoom) {
        return <Redirect to='/chatroom' />
    }

    return (
        <ListGroup className={Style.UsersList} >
            {usersPhotos.filter((userItem) => {

                if (props.searchUser == "") {
                    return userItem
                } else if ((props.searchUser != "") && (userItem.login.toLowerCase().includes(props.searchUser.toLowerCase()))) {
                    return userItem
                } else if ((props.searchUser != "") && !(userItem.login.toLowerCase().includes(props.searchUser.toLowerCase()))) {
                    return
                }
            }).map((dataUser) =>
                <ListGroup.Item key={dataUser.login} onClick={() => onRedirectToChatRoomClicked(dataUser.login, dataUser.photo.filename)}>
                    <div className={Style.ImageComponent}>
                        <Image src={`http://localhost:8080/uploads/${dataUser.photo.filename}`} className={Style.Image} />
                        <div className={Style.UserLogin}>{dataUser.login}</div>

                    </div>
                </ListGroup.Item>
            )}
        </ListGroup>
    )

}

export default ChatUsersList

