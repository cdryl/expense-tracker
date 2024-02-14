import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ReactModal from 'react-modal';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (root) {
  ReactModal.setAppElement("#root");
}
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
