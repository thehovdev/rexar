// react
import React from 'react';
import ReactDOM from 'react-dom';
// react router
import { Router, Route, Switch } from 'react-router'

// browser history
import createHistory from 'history/createBrowserHistory'
// redux store
import {createStore} from 'redux';

// providers and reducers
import {Provider} from 'react-redux';
import allReducers from './reducers';
import {combineReducers} from 'redux';

// file for import all components and define all app (react component) routes
import router from "./routes/router";

// create browser history (react router)
const history = createHistory();
// create store (redux)
const store = createStore (allReducers);
// subscribe to redux store, for see changes
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                {router}
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);