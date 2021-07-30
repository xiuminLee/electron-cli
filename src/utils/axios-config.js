import axios from 'axios';
import { message } from 'antd';

const getAccessToken = () => localStorage.getItem('token');
const getOutAccessToken = () => localStorage.getItem('outToken');

const interceptors = {
  request: (config) => {
    // Do something before request is sent
    const token = getAccessToken();
    const outToken = getOutAccessToken();
    const headers = {};
    if (token || outToken) {
      if (token) headers['access-token'] = token;
      if (outToken) headers['out-access-token'] = outToken;
    }
    if (headers) {
      return Object.assign(config, {
        headers,
      });
    }

    return config;
  },
  requestError: error => Promise.reject(error),
  response: response => response,
  responseError: (error) => {
    const { response } = error;

    if (response && response.status) {
      if (response.status !== 200 || response.data.ret !== 0) {
        const hasShowUnloginError = localStorage.getItem('has_show_unlogin_error');

        // 未登录跳转
        if (response.data.ret === 20001) {
          if (hasShowUnloginError !== '1') {
            message.error(response.data.msg);
            localStorage.setItem('has_show_unlogin_error', '1');
            localStorage.removeItem('token');
            // localStorage.removeItem('userInfo');
          }
          if (window.location.href.indexOf('user/login') < 0) {
            window.location.href = `/user/login?redirect=${encodeURIComponent(`${window.location.pathname}${window.location.search}`)}`;
          }
        } else if (response.data.ret === 20011) {
          message.error(response.data.msg);
          localStorage.removeItem('token');
          // localStorage.removeItem('userInfo');
          window.location.href = '/user/login';
        } else if (response.data.ret === 20012) {
          localStorage.setItem('is_insider', false);
          message.error(response.data.msg);
        } else if (response.data.msg) {
          // 统一错误提示
          message.error(response.data.msg);
        }
      }
    }

    if (error.code && error.code === 'ECONNABORTED') {
      console.error('请求超时');
      message.error(window.location.host.includes('thisnew.com') ? 'Request timeout, please try again later' : '请求超时，请稍后重试');
    }

    return Promise.reject(response);
  },
};

axios.defaults.timeout = 60000;

axios.interceptors.request.use(interceptors.request, interceptors.requestError);

axios.interceptors.response.use(interceptors.response, interceptors.responseError);

export default interceptors;
