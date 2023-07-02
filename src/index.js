import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { makeServer } from "./server";
import { AuthContext, AuthProvider } from "./ContextProvider/AuthProvider";
import { DataContext, DataProvider } from "./ContextProvider/DataProvider";

export { DataContext, AuthContext };

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
