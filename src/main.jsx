import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import GiphyApp from './GiphyApp'
import './index.css'
import { ButtonApp } from './ButtonApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <GiphyApp title='Buscador de GIFs' />
    {/* <ButtonApp /> */}
  </React.StrictMode>
)
