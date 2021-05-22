import React from "react";
// import config from "config";
// MongoDB
import * as mongodb from "mongodb";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// eslint-disable-next-line
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// app.listen(3000, function () {
//   console.log("Listening on port 3000!");
// });
