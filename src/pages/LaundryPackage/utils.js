import React from "react";
import * as apiService from "../../data";
import { catchError, currency } from "../../utils";

export const createFormData = (data = null) => ({
  id: data ? data.id : "",
  name: data ? data.name : "",
  price: data ? parseFloat(data.price) : "",
});

export const tableColumns = [
  {
    id: "name",
    title: "Paket Laundry",
  },
  {
    id: "price",
    title: "Harga",
    customComponent: val => <span>{currency(parseFloat(val))}</span>,
  },
];

export const handleFetchDataList = async (state, onError) => {
  let data = [];
  let totalPage = 0;

  try {
    const response = await apiService.getLaundryPackages(state);

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
    if (!form.id) await apiService.createLaundryPackage(form);
    if (form.id) await apiService.updateLaundryPackage(form);

    onSuccessCallback();
  } catch (e) {
    onErrorCallback(catchError(e));
  }
};

export const handleDeleteData = async (formData, onSuccessCallback, onErrorCallback) => {
  const form = formData;

  try {
    await apiService.deleteLaundryPackage({ id: form.id });

    onSuccessCallback();
  } catch (e) {
    onErrorCallback(catchError(e));
  }
};
