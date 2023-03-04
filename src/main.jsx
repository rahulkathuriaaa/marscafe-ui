import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import GetFoodSlice from './redux/GetFoodSlice';
import { Provider } from 'react-redux';

//import Provider from "@reduxjs/toolkit"

const store=configureStore({
  reducer:GetFoodSlice
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
