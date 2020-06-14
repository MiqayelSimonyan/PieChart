import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
<<<<<<< HEAD
import { END } from 'redux-saga';
import { fromJS } from 'immutable';
import logger from 'redux-logger';

import history from '../session-history';
import reducer from './reducer';

function getStore() {
=======
import createSagaMiddleware, { END } from 'redux-saga';
import { fromJS } from 'immutable';
import logger from 'redux-logger';

import history from 'session-history';
import reducer from './reducer';
import rootSaga from './saga';

function getStore() {
    const sagaMiddleware = createSagaMiddleware();

>>>>>>> 619efbd1eeac9705bc48278b2141fdd15c3ec757
    let initialState = {};
    if (typeof window != 'undefined') {
        for (let item in window.__INITIAL_STATE__) {
            initialState[item] = fromJS(window.__INITIAL_STATE__[item]);
        }
    }

    const enhancer = (process.env && process.env.NODE_ENV) !== 'production'
<<<<<<< HEAD
        ? applyMiddleware(routerMiddleware(history), logger) : applyMiddleware(routerMiddleware(history));

    const store = typeof window != 'undefined' ? createStore(reducer, initialState, enhancer) : createStore(reducer, enhancer);
    if (process.env && process.env.NODE_ENV !== 'production' && typeof window != 'undefined') window.store = store;

=======
        ? applyMiddleware(sagaMiddleware, routerMiddleware(history), logger) : applyMiddleware(sagaMiddleware, routerMiddleware(history));

    const store: any = typeof window != 'undefined' ? createStore(reducer, initialState, enhancer) : createStore(reducer, enhancer);
    if (process.env && process.env.NODE_ENV !== 'production' && typeof window != 'undefined') window.store = store;

    sagaMiddleware.run(rootSaga);
>>>>>>> 619efbd1eeac9705bc48278b2141fdd15c3ec757
    store.close = () => store.dispatch(END);

    return store;
}

export default getStore();