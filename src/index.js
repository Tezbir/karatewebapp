import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
function setMobileClass() {
  const isTouch =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  const isSmall = window.matchMedia("(max-width: 768px)").matches;

  // only treat as "mobile layout" if it's touch + small screen
  document.documentElement.classList.toggle("is-mobile", isTouch && isSmall);
}
setMobileClass();
window.addEventListener("resize", setMobileClass);
window.addEventListener("orientationchange", setMobileClass);
reportWebVitals();
