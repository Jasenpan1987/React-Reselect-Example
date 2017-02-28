import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App';

import reducers from "./reducers";
import { INIT } from "./actions/types"

import 'bootstrap/dist/css/bootstrap.css';

const dummyList = [
    { id: 1, text: "A very good item 1"},
    { id: 2, text: "A very good item 2"},
    { id: 3, text: "A very normal item 3"},
    { id: 4, text: "A very normal item 4"},
    { id: 5, text: "A very bad item 5"},
    { id: 6, text: "A very bad item 6"}
];

const store = createStore(reducers);

store.dispatch({ type: INIT, payload: dummyList });

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
