import axios from 'axios';
import { queryParams } from './commonFuc';
import interceptors from './axios-config';
import * as configs from '../config/config';

const request = (config) => {
  const url = `${configs.SERVER_URL}${config.url}${config.url.indexOf('?') > -1 ? '&t=' : '?t='}${Date.now()}`;
  return interceptors.request({ ...config, url });
};

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(request, interceptors.requestError);
axiosInstance.interceptors.response.use(interceptors.response, interceptors.responseError);

const http = {};

http.CancelToken = axios.CancelToken;

http.request = options =>
  axiosInstance(options);

http.get = (url, data = null, options = null) => {
  const params = queryParams(data);
  const query = params ? `${url.indexOf('?') > -1 ? '&' : '?'}${params}` : '';
  return axiosInstance(url + query, { ...options });
};

http.post = (url, data = {}, options = null) =>
  axiosInstance({
    url,
    method: 'POST',
    data,
    ...options,
  });

http.put = (url, data = {}, options = null) =>
  axiosInstance({
    url,
    method: 'PUT',
    data,
    ...options,
  });

http.delete = (url, data = {}, options = null) =>
  axiosInstance({
    url,
    method: 'DELETE',
    data,
    ...options,
  });


export { http };
