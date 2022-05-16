import moment from "moment";
import numeral from "numeral";
import { isEmail } from "validator";

const BASE_KEY = "LAUNDRIA";

export const getToken = () => localStorage.getItem(`${BASE_KEY}::usertoken`);

export const setToken = (token) => { localStorage.setItem(`${BASE_KEY}::usertoken`, token); };

export const removeToken = () => { localStorage.removeItem(`${BASE_KEY}::usertoken`); };

export const isHasProperty = (obj, key) => Object.hasOwnProperty.call(obj, key);

export const catchError = (e) => {
    let message = "Unknown error";
    if (typeof e === "string") message = e;
    if (Object.prototype.hasOwnProperty.call(e, "message")) ({ message } = e);
    if (Object.prototype.hasOwnProperty.call(e, "error")) ({ error: message } = e);
    return message;
};

export const currency = val => numeral(parseFloat(val)).format("$0,0");

export const validateEmail = (email) => {
    if (isEmail(email)) return true;
    return false;
};

export const replaceAllExceptNumerics = (val) => {
    let newValue = val;
    newValue = newValue.replace(/[^0-9\.]+/g, "");

    return newValue;
}

export const reformatDateTimeAsText = val => moment(val, "YYYY-MM-DD HH:mm:ss").format("DD MMMM YYYY HH:mm:ss");

export const reformatDateAsText = val => moment(val, "YYYY-MM-DD").format("DD MMMM YYYY");
