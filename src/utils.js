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
