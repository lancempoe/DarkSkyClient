import React from 'react'; // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux';  // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import store from './store.jsx';
import router from './router.jsx';
// require('es6-promise').polyfill();

// Provider is a top-level component that wraps our entire application, including
// the Router. We pass it a reference to the store so we can use react-redux's
// connect() method for Component Containers.
ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('main')
);