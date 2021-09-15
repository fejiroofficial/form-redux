import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import formReducer from "./reducer";
import "./index.css";
import App from "./App";


const configureStore = (state = {}) => createStore(formReducer, state);

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
