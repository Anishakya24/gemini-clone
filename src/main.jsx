import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'; 
import ContextProvider from './context/Context.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)

