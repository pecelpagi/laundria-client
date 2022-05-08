import { METHOD_TYPE } from "./enums";
import fetchApi from "./ApiService";

export const login = async (payload) => {
    const response = await fetchApi("/api/employee/login", payload, METHOD_TYPE.POST);

    return response;
};

export const getCustomers = async (payload) => {
    const response = await fetchApi("/api/customer", {}, METHOD_TYPE.GET, {
        queryString: payload,
    });

    return response;
};

export const createCustomer = async (payload) => {
    const response = await fetchApi("/api/customer", payload, METHOD_TYPE.POST);

    return response;
};

export const updateCustomer = async (payload) => {
    const response = await fetchApi("/api/customer", payload, METHOD_TYPE.PUT);

    return response;
};

export const deleteCustomer = async (payload) => {
    const response = await fetchApi(`/api/customer/${payload.id}`, {}, METHOD_TYPE.DELETE);

    return response;
};
