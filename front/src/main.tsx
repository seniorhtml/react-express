import '@/assets/style.pcss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import store from './store';
import axiosNpm from 'axios';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StyleProvider } from '@ant-design/cssinjs';

export const axios = axiosNpm.create({
  baseURL: 'http://localhost:4002',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyleProvider hashPriority="high">
          <App />
        </StyleProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
