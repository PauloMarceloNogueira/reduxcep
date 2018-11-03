import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.sass';

// Components
import Header from './Components/Header/Header.jsx'
import Map from './Components/Map/map.jsx';
import InputReducer from './Reducers/Reducers.js'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const reducers = combineReducers({
  input: InputReducer
})
const store = applyMiddleware(thunk)(createStore)(reducers, devTools);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Header />
      <Map />
    </div>
  </Provider>
, document.getElementById('index'));