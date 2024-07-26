import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";


ReactDOM.createRoot(document.getElementById("root")).render(
    <PrimeReactProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </PrimeReactProvider>
);
