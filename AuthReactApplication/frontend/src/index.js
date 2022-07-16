import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import { combineReducers, createStore, applyMiddleware} from "redux"
import { Provider } from 'react-redux'
import authorizationReducer from "./widgets/authorization/reducer"
import ChatReducer from "./widgets/chat/reducer"
import registrationReducer from "./widgets/registration/reducer"
import ChatRoomReducer from "./widgets/chatroom/reducer";
import { BrowserRouter } from 'react-router-dom';
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({
  authorizationReducer,
  ChatReducer,
  registrationReducer,
  ChatRoomReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>, document.getElementById('root')

);


