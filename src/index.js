import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "milligram"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Auth0ProviderWithHistory from './auth0Provider';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
    <Route path="/" component={App} />
    </Auth0ProviderWithHistory>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
