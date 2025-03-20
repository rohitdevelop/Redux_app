import React from "react";
 import { Provider } from "react-redux";
import store from "./Redux/store"; // Import the store
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
