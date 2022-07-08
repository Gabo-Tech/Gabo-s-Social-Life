import React from 'react';
import ReactDOM from 'react-dom';
//INITIALIZE REDUX//
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers/ReducerIndex';
//INITIALIZE REDUX//

import App from './App';
import'./index.sass';


//REDUX SET UP//
const store = createStore(reducers, compose(applyMiddleware(thunk)));
//REDUX SET UP//
// const store = createStore(
//     reducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    ,document.getElementById("root")
);