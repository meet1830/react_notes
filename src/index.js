import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import App from './Notes/Lecture_01/00_App';
// import App from './Notes/Lecture_01/01_0_App';
// import App from './Notes/Lecture_02/01_0_App';
// import App from './Notes/Lecture_03/01_App';
// import App from './Notes/Lecture_04/01_App';
// import App from './Notes/Lecture_06_e_commerce_app/01_App';
// import App from './Notes/Lecture_07_Get_Github/App';
// import App from './Notes/Lecture_08_Get_Github/App';
import App from './Notes/Lecture_09_e_commerce_app_redux_1/01_App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
