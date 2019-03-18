import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './configureStore';
import initialState from './initialState';

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<provider store={store}>
		<router history={history} routes={routes}/>
	</provider>,

	document.getElementById(root)
);
