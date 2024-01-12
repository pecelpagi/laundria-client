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

export const handleFetchDataList = async (payload) => {
  let data = [];
  let totalPage = 0;
  let err = null;

  try {
    const response = await apiService.getCustomers(payload);

    ({ data } = response);
    totalPage = response.meta.number_of_pages;
  } catch (e) {
    err = e;
  }

  return { data, totalPage, err };
};

export const handleSaveData = async (formData, onSuccessCallback = () => { }, onErrorCallback = () => { }) => {
  const form = formData;

  try {
    if (!form.id) await apiService.createCustomer(form);
    if (form.id) await apiService.updateCustomer(form);

    onSuccessCallback();
  } catch (e) {
    onErrorCallback(catchError(e));
  }
};

export const handleDeleteData = async (formData, onSuccessCallback = () => { }, onErrorCallback = () => { }) => {
  const form = formData;

  try {
    await apiService.deleteCustomer({ id: form.id });

    onSuccessCallback();
  } catch (e) {
    onErrorCallback(catchError(e));
  }
};
