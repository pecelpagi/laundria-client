import React from "react";
import * as apiService from "../../data";
import { catchError } from "../../utils";

export const createFormData = (data = null) => ({
  id: data ? data.id : "",
  name: data ? data.name : "",
});

export const tableColumns = [
  {
    id: "name",
    title: "Tipe Pembayaran",
  },
];

export const handleFetchDataList = async (state, onError) => {
  let data = [];
  let totalPage = 0;

  try {
    const response = await apiService.getPaymentTypes(state);

    ({ data } = response);
    totalPage = response.meta.total_pages;
  } catch (e) {
    onError(catchError(e));
  }

  return { data, totalPage };
};

export const handleSaveData = async (formData, onSuccessCallback, onErrorCallback) => {
  const form = formData;

  try {
    if (!form.id) await apiService.createPaymentType(form);
    if (form.id) await apiService.updatePaymentType(form);

    onSuccessCallback();
  } catch (e) {
    onErrorCallback(catchError(e));
  }
};

export const handleDeleteData = async (formData, onSuccessCallback, onErrorCallback) => {
  const form = formData;

  try {
    await apiService.deletePaymentType({ id: form.id });

    onSuccessCallback();
  } catch (e) {
    onErrorCallback(catchError(e));
  }
};
