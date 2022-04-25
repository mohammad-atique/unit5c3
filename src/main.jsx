import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import {BrowserRouter} from "react-router-dom"
import { TerminatedContextProvider } from "./context/TerminatedContext";
import { PromotedContextProvider } from "./context/PromotedContext";
import { EmployeeContextProvider } from "./context/EmployeeContext";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <EmployeeContextProvider>
        <PromotedContextProvider>
          <TerminatedContextProvider>
            <App />
          </TerminatedContextProvider>
        </PromotedContextProvider>
      </EmployeeContextProvider>
    </BrowserRouter>
   
  </React.StrictMode>
)
