import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.sass';

// Components
import Input from './Components/Input/Input.jsx';
import InputReducer from './Components/Input/InputReducer.js';
import Map from './Components/Map/map.jsx';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const reducers = combineReducers({
  input: InputReducer
})
const store = applyMiddleware(thunk)(createStore)(reducers, devTools);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Input />
      <Map />
    </div>
  </Provider>
, document.getElementById('index'));