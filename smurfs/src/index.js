import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducer} from './reducers';
import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
