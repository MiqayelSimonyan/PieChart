import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { END } from 'redux-saga';
import { fromJS } from 'immutable';
import logger from 'redux-logger';

import history from '../session-history';
import reducer from './reducer';

function getStore() {
    let initialState = {};
    if (typeof window != 'undefined') {
        for (let item in window.__INITIAL_STATE__) {
            initialState[item] = fromJS(window.__INITIAL_STATE__[item]);
        }
    }

    const enhancer = (process.env && process.env.NODE_ENV) !== 'production'
        ? applyMiddleware(routerMiddleware(history), logger) : applyMiddleware(routerMiddleware(history));

    const store = typeof window != 'undefined' ? createStore(reducer, initialState, enhancer) : createStore(reducer, enhancer);
    if (process.env && process.env.NODE_ENV !== 'production' && typeof window != 'undefined') window.store = store;

    store.close = () => store.dispatch(END);

    return store;
}

export default getStore();