import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import SamuriJSApp from './App';


ReactDOM.render(
  <SamuriJSApp />,
  document.getElementById('root')
);

ReactDOM.render(
  
      <React.StrictMode>
        {/* <App state={state} dispatch={store.dispatch.bind(store)} store={store} /> */}
        <App />
      </React.StrictMode>
    ,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
