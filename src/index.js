import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from "./Redux/RootReducer";
import ReduxThunk from 'redux-thunk'
import {Provider } from "react-redux";

const composeEnhancers =
    typeof window === 'object' &&
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ?
        window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({
        }) : compose;

const store = createStore(RootReducer, composeEnhancers(applyMiddleware(ReduxThunk)))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)

