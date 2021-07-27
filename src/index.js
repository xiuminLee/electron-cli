import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Router from './render/layout/router'
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router />
  </ConfigProvider>,
  document.getElementById('root')
);

reportWebVitals();
