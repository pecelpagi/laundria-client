import moment from "moment";
import numeral from "numeral";
import { isEmail } from "validator";
import jwt_decode from "jwt-decode";

const BASE_KEY = "LAUNDRIA";

export const MATCH_MEDIA_TYPE = {
    LG: '(min-width: 1024px)',
}

export const ROLE_TYPE = {
    EMPLOYEE: "2",
}

export const getToken = () => localStorage.getItem(`${BASE_KEY}::usertoken`);

export const setToken = (token) => { localStorage.setItem(`${BASE_KEY}::usertoken`, token); };

export const removeToken = () => { localStorage.removeItem(`${BASE_KEY}::usertoken`); };

export const getDecodedToken = () => jwt_decode(getToken());

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

export const matchMediaChecker = (type) => window.matchMedia(type).matches;