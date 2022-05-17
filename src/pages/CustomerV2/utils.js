import * as apiService from "../../data";
import { catchError } from "../../utils";

export const createFormData = (data = null) => ({
  id: data ? data.id : "",
  fullname: data ? data.fullname : "",
  addr: data ? data.addr : "",
  phone: data ? data.phone : "",
});

export const tableColumns = [
  {
    id: "fullname",
    title: "Nama Lengkap",
  },
  {
    id: "addr",
    title: "Alamat",
  },
  {
    id: "phone",
    title: "No. Telepon",
  },
];

export const handleFetchDataList = async (state, onError = null) => {
  let data = [];
  let totalPage = 0;

  try {
    const response = await apiService.getCustomers(state);

    ({ data } = response);
    totalPage = response.meta.total_pages;
  } catch (e) {
    if (onError) onError(catchError(e));
  }

  return { data, totalPage };
};

export const handleSaveData = async (formData, onSuccessCallback, onErrorCallback) => {
  const form = formData;

  try {
    if (!form.id) await apiService.createCustomer(form);
    if (form.id) await apiService.updateCustomer(form);

    onSuccessCallback();
  } catch (e) {
    onErrorCallback(catchError(e));
  }
};

export const handleDeleteData = async (formData, onSuccessCallback, onErrorCallback) => {
  const form = formData;

  try {
    await apiService.deleteCustomer({ id: form.id });

    onSuccessCallback();
  } catch (e) {
    onErrorCallback(catchError(e));
  }
};
