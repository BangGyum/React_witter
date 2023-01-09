import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import initializeApp from "./fbInstance";
console.log(initializeApp);
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//https://console.firebase.google.com/u/0/project/bwitter-1dcf1/overview?hl=ko
//firebase SDK

