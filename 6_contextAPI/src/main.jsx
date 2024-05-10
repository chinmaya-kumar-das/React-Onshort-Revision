import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { AppContextProvider } from './contexts/MyContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
