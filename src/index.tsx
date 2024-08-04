import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {router} from "./router/router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <RouterProvider router={router}/>
  </Provider>
);