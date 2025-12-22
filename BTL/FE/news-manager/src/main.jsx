import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { Provider } from "react-redux"; 
import { createStore } from "redux";
import { allReducers } from "./redux/reducer/index.js"

const store = createStore(allReducers);

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>

);
