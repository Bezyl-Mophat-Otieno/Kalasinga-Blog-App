import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import bootstrap from 'react-bootstrap'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContextProvider } from './context/Context'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ContextProvider>
    <App />
  </ContextProvider>
  </React.StrictMode>
)