import { METHOD_TYPE } from "./enums";
import fetchApi from "./ApiService";

export const login = async (payload) => {
    const response = await fetchApi("/api/employee/login", payload, METHOD_TYPE.POST);

    return response;
};