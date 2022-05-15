import * as employeeApi from "../../data";
import { catchError } from "../../utils";

export const createFormData = (data = null) => ({
  id: data ? data.id : "",
  fullname: data ? data.fullname : "",
  username: data ? data.username : "",
  email: data ? data.email : "",
  addr: data ? data.addr : "",
  phone: data ? data.phone : "",
});

export const tableColumns = [
  {
    id: "fullname",
    title: "Nama Lengkap",
  },
  {
    id: "username",
    title: "Username",
  },
  {
    id: "email",
    title: "Email",
  },
  {
    id: "phone",
    title: "No. Telepon",
  },
];

export const handleFetchDataList = async () => {
  let data = [];
  let totalPage = 0;

  try {
    const response = await employeeApi.getEmployees({ limit: 5, page: 1 });

    ({ data } = response);
    totalPage = response.meta.total_pages;
  } catch (e) {
    console.log(e);
  }

  return { data, totalPage };
};

export const handleSaveData = async (formData, onSuccessCallback, onErrorCallback) => {
  const form = formData;

  try {
    if (!form.id) await employeeApi.createEmployee(form);
    if (form.id) await employeeApi.updateEmployee(form);

    onSuccessCallback();
  } catch (e) {
    onErrorCallback(catchError(e));
  }
};

export const handleDeleteData = async (formData, onSuccessCallback, onErrorCallback) => {
  const form = formData;

  try {
    await employeeApi.deleteEmployee({ id: form.id });

    onSuccessCallback();
  } catch (e) {
    onErrorCallback(catchError(e));
  }
};
