import React from 'react';
import ReactDOM from 'react-dom';
//INITIALIZE REDUX//
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/PostReducer';
//INITIALIZE REDUX//

import App from './App';
import'./index.sass';

//REDUX SET UP//
const store = createStore(reducers, compose(applyMiddleware(thunk)));
//REDUX SET UP//

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    ,document.getElementById("root")
);