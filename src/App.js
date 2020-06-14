import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './redux-implementation';
import history from './session-history';

import Root from './root';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <ToastContainer position="bottom-right" autoClose={2000} />
          <Root />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
