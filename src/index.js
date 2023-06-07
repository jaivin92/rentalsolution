import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import {
//   ThemeProvider,
//   unstable_createMuiStrictModeTheme,
// } from "@mui/material/styles";
// import customtheme from "./theme/customtheme";
// import { neutral } from "theme/colors";
// import { AppProvider } from "context/appcontext";
//const theme = unstable_createMuiStrictModeTheme();
// style + assets

//const root = ReactDOM.createRoot(document.getElementById("root"));
//document.body.style = 'background: #00FFFF;';
//document.body.style = `background: ${neutral[200]};`;
ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
