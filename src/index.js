import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/global.scss";
import "./Style/bootstrap/modified.scss";
import axios from "axios";
// import ContextValue from "./Components/AccountSettingsPage/ContextValue";
import { Provider } from "react-redux";
import store from "./Store/store";
import PortfolioContext from "./Components/PortfolioMain/MiddleSidePortfolio/PortfolioContext";
import "boxicons";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PortfolioContext>
        <App />
      </PortfolioContext>

    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
