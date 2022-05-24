import axios from 'axios';

export interface RequestParamsProps {
  apiUrl: string;
  method: string;
  payload?: any;
  contentType?: string;
  headerValue?: any;
  params?: any;
}

export interface AuthOptionParams {
  method: string;
  url: string;
  data?: any;
  headers: any;
  json?: boolean;
  params?: any;
}

export interface ResponseProps {
  response_type?: string;
  response?: any;
}

const callApi = async (authOptions: AuthOptionParams) => {
  const returnVal: ResponseProps = {};
  let responseCode = null;
  await axios(authOptions)
    .then((res) => {
      returnVal.response_type = 'success';
      returnVal.response = res.data;
      responseCode = returnVal;
    })
    .catch((error) => {
     
        returnVal.response_type = 'fail';
        returnVal.response = error.response;
        responseCode = returnVal;
    });
  if (responseCode) {
    return responseCode;
  }
}

export const apiRequest = ({
  apiUrl,
  method,
  payload,
  contentType,
  headerValue = {},
  params,
}: RequestParamsProps) => {
  let authOptions: AuthOptionParams = {
    method,
    url: apiUrl,
    data: payload,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headerValue,
    },
    json: true,
  };
  if (method === 'GET') {
    authOptions = {
      method,
      params: { ...params },
      url: apiUrl,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headerValue,
      },
      json: true,
    };
  }

  return callApi(authOptions);
};

