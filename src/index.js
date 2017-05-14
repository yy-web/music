import React from 'react';
import ReactDOM from 'react-dom';
import { Router ,browserHistory} from 'react-router';

//import App from './test/App'
import routes from './js/routes'




ReactDOM.render(
    <Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
);
