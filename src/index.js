import React from 'react';
import ReactDOM from 'react-dom';
import { Router ,browserHistory} from 'react-router';

import {applyMiddleware,createStore} from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import stores from './js/store/stores'
import routes from './js/routes'


const logger = createLogger();
const store = createStore(
    stores,
    applyMiddleware(thunk),
    applyMiddleware(logger)
)


ReactDOM.render(
<Provider store={store}>
    <Router  routes={routes} history={browserHistory}/>
</Provider> ,document.getElementById('root')
);
