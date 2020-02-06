export const WRONG_EMAIL_FORMAT = 'wrong email format';
export const PASSWORD_SHORT = 'password must be more 6 characters';
export const ERROR_CONFIRM_PASSWORD = 'password is not match';
export const WRONG_PHONE_FORMAT = 'only numbers on this field';
export const EMPTY_VALUE = 'please fill out this field'

export const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const regNumber = /^[0-9]*$/;


export const checkEmailFormat = (value) => {
    if(!regEmail.test(String(value)) && value !== '') {
        return WRONG_EMAIL_FORMAT;
    }else if(value === ''){
        return EMPTY_VALUE;
    }else {
        return value;
    }
}

export const checkPhoneFormat = (value) => {
    if(!regNumber.test(String(value)) && value !== '') {
        return WRONG_PHONE_FORMAT;
    }else if(value === ''){
        return EMPTY_VALUE;
    }else {
        return value;
    }
}

export const checkPasswordFormat = (value) => {
    if(String(value).length < 6 && value !== ''){
        return PASSWORD_SHORT;
    }else if(value === ''){
        return EMPTY_VALUE
    }else {
        return value;
    }
}

export const confirmPassword = (password,value) => {
    if(password !== value && value !== ''){
        return ERROR_CONFIRM_PASSWORD;
    }else if(value === ''){
        return EMPTY_VALUE;
    }else {
        return value;
    }
}