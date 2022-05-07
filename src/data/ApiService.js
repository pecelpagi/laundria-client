import { METHOD_TYPE } from "./enums";
import { getToken } from "../utils";

const getQueryString = (params) => {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join("&");
};

const fetchApi = async (endPoint, payload = {}, method = METHOD_TYPE.GET, options = {
  queryString: undefined,
}) => {
  let apiUrl = endPoint;

  switch (method) {
    case METHOD_TYPE.GET:
      if (options.queryString) {
        apiUrl = `${endPoint}?${getQueryString(options.queryString)}`;
      }
      break;
    default:
      // do nothing
  }

  const token = getToken();

  const authorization = {};

  if (token) Object.assign(authorization, { Authorization: `Bearer ${token}` });

  let fetchOptions = {
    method,
    headers: {
      ...authorization,
    },
  };

  if (method === METHOD_TYPE.PUT) {
    let formBody = [];

    const payloadKeys = Object.keys(payload);

    payloadKeys.map((x) => {
      const encodedKey = encodeURIComponent(x);
      const encodedValue = encodeURIComponent(payload[x]);
      formBody.push(`${encodedKey}=${encodedValue}`);

      return x;
    });

    formBody = formBody.join("&");

    fetchOptions = {
      ...fetchOptions,
      headers: {
        ...!fetchOptions.headers ? {} : fetchOptions.headers,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: formBody,
    };
  } else if (method !== METHOD_TYPE.GET) {
    const formData = new FormData();

    const payloadKeys = Object.keys(payload);

    payloadKeys.map((x) => {
      formData.append(x, payload[x]);

      return x;
    });

    fetchOptions = {
      ...fetchOptions,
      headers: {
        ...!fetchOptions.headers ? {} : fetchOptions.headers,
      },
      body: formData,
    };
  }

  const response = await fetch(apiUrl, fetchOptions);

  const retval = await response.json();

  if (response.ok) return retval;

  throw retval;
};

export default fetchApi;
