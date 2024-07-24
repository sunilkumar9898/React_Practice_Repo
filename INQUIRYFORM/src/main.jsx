import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";


ReactDOM.createRoot(document.getElementById("root")).render(
    <PrimeReactProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </PrimeReactProvider>
);
