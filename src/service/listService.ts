import { apiRequest } from "./service";
import ApiConfig from '../utils/apiCallConfig'

export const getNextToGoList = (payload: any) => {
  return apiRequest({
    apiUrl: `${ApiConfig.NEDS_API_URL}/rest/v1/racing/?method=nextraces&count=10`,
    payload: {},
    method: "GET",
    headerValue: payload,
  });
};