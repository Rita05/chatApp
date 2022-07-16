
class ValidationData {

    checkonValidationPassword (value){
        var pattern = /^(?=.*[a-z])(?=.[A-Z]*)(?=.[0-9]*)(?=.[^\w\s]*)/;
        var isPasswordValid = pattern.test(value)

        if(!isPasswordValid){
            return "Недопустимый символ, не латинская буква, цифра или спецсимвол"
        }else if(value.length < 8){
            return "Короткий пароль, менее 8 символов"
        }else if (value.length > 15){
            return "Слишком длинный пароль, более 8 символов"
        }else {
            return ""
        }
    }

    checkonValidationLogin (value){
        var pattern =/^[a-zA-Z0-9]+$/;
        var isLogindValid = pattern.test(value)
        if (isLogindValid){
            return ""
        }else if(!isLogindValid){
            return "Недопустимый символ, не латинская буква или цифра"
        }

        return isLogindValid

    }

}

export default new ValidationData();
