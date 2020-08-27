import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import store  from './reducers/store';
import postReducer from './reducers/postReducer';
import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'



ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('root'));

