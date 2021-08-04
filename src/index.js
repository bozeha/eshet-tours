import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './comps/GlobalStyles';


//// import allReducers , this hold all reducers , we dont need to wire "./reducers/index" becuse index in the defualt file 
import { allReducers } from "./reducers";


/// this will connect our state to our app
import { Provider } from "react-redux";


///// import create store , object of redux
import thank from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;






const store = createStore(
  allReducers,
  composeEnchancer(applyMiddleware(thank))
);









ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


