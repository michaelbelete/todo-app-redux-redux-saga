import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="justify-center items-center p-6">
        <h1 className="font-extrabold text-blue-400">Hello World!</h1>
        <p className="tracking-widest">This is my first React App.</p>
      </div>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
