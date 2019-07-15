const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|((([a-zA-Z\-0-9]{3,})+\.)+[a-zA-Z]{2,}))$/
const MIN_LEN_PASSWORD = 8;
const MIN_LEN_USER_NAME = 3

export const isEmailValid = email => mailRegex.test(email);
export const equalsPassword = (password, confirmPassword) => password === confirmPassword;
export const minLenPassword = (password) => password.length >= MIN_LEN_PASSWORD;
export const minLenUsername = (name) => name.length >= MIN_LEN_USER_NAME;
