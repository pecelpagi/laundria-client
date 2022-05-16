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

export const getLaundryPackages = async (payload) => {
  const response = await fetchApi("/api/LaundryPackage", {}, METHOD_TYPE.GET, {
    queryString: payload,
  });

  return response;
};

export const createLaundryPackage = async (payload) => {
  const response = await fetchApi("/api/LaundryPackage", payload, METHOD_TYPE.POST);

  return response;
};

export const updateLaundryPackage = async (payload) => {
  const response = await fetchApi("/api/LaundryPackage", payload, METHOD_TYPE.PUT);

  return response;
};

export const deleteLaundryPackage = async (payload) => {
  const response = await fetchApi(`/api/LaundryPackage/${payload.id}`, {}, METHOD_TYPE.DELETE);

  return response;
};

export const getPaymentTypes = async (payload) => {
  const response = await fetchApi("/api/PaymentType", {}, METHOD_TYPE.GET, {
    queryString: payload,
  });

  return response;
};

export const createPaymentType = async (payload) => {
  const response = await fetchApi("/api/PaymentType", payload, METHOD_TYPE.POST);

  return response;
};

export const updatePaymentType = async (payload) => {
  const response = await fetchApi("/api/PaymentType", payload, METHOD_TYPE.PUT);

  return response;
};

export const deletePaymentType = async (payload) => {
  const response = await fetchApi(`/api/PaymentType/${payload.id}`, {}, METHOD_TYPE.DELETE);

  return response;
};

export const getEmployees = async (payload) => {
  const response = await fetchApi("/api/employee", {}, METHOD_TYPE.GET, {
    queryString: payload,
  });

  return response;
};

export const createEmployee = async (payload) => {
  const response = await fetchApi("/api/employee", payload, METHOD_TYPE.POST);

  return response;
};

export const updateEmployee = async (payload) => {
  const response = await fetchApi("/api/employee", payload, METHOD_TYPE.PUT);

  return response;
};

export const deleteEmployee = async (payload) => {
  const response = await fetchApi(`/api/employee/${payload.id}`, {}, METHOD_TYPE.DELETE);

  return response;
};

export const getMyProfile = async () => {
  const response = await fetchApi("/api/employee/my_profile");

  return response;
};

export const getCompanyProfile = async () => {
  const response = await fetchApi("/api/welcome/company_profile");

  return response;
};

export const updateCompanyProfile = async (payload) => {
  const response = await fetchApi("/api/welcome/company_profile", payload, METHOD_TYPE.PUT);

  return response;
};

export const getOrders = async (payload) => {
  const response = await fetchApi("/api/sale", {}, METHOD_TYPE.GET, {
    queryString: payload,
  });

  return response;
};

export const getOrder = async (id) => {
  const response = await fetchApi(`/api/sale/${id}`, {}, METHOD_TYPE.GET, {});

  return response;
};

export const createOrder = async (payload) => {
  const response = await fetchApi("/api/sale", payload, METHOD_TYPE.POST);

  return response;
};

export const updateOrder = async (payload) => {
  const response = await fetchApi("/api/sale", payload, METHOD_TYPE.PUT);

  return response;
};
