import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CelebrityContextProvider } from './Contexts/CelebrityContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <CelebrityContextProvider>
    <App />
  </CelebrityContextProvider>,
)
