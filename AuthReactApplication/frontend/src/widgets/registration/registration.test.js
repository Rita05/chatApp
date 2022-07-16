import validation from './ValidationData'
import registrationReducer from "./reducer"
import {ongetStatus} from "./actions"
import { create } from "react-test-renderer";
import { Component } from 'react';
import RegistrationForm from "../templates/registration/registration-form"

describe("Test validation", () => {
    test("Test password", () => {
        expect(validation.checkonValidationPassword("kiptorn5")).toEqual("")
        expect(validation.checkonValidationPassword("")).toEqual("Недопустимый символ, не латинская буква, цифра или спецсимвол")
        expect(validation.checkonValidationPassword("kiptorn")).toEqual("Короткий пароль, менее 8 символов")
        expect(validation.checkonValidationPassword("kiptornsdsdsdadada58")).toEqual("Слишком длинный пароль, более 8 символов")
    });
});

describe("Test reducer registration", () => {
    test("Test registration", () => {
        let action = ongetStatus(200)
        let state = {} 
        let newState = registrationReducer(state, action)
        expect(newState.registrationStatus).toEqual(200);
       
    });
});

describe("Test registration compoment", () => {
    test("Test render component", () => {

        const props={
            login: {value: "rita"},
            password: {value: "kiptorn5"}
        }

        const compoment = create(<RegistrationForm {...props}/>)
        const instance  = compoment.root;
        const formLoginInput = instance.findAllByType("input")[0] ;
        const formPasswordInput = instance.findAllByType("input")[1];
        expect(formLoginInput.props.defaultValue).toEqual("rita");
        expect(formPasswordInput.props.defaultValue).toEqual("kiptorn5");
    });
});
