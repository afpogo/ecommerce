import react from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import ProductListContainer from './products/ProductListContainer';

export default (
	<Route path="/", component={App}>
		<IndexRoute component={ProductListContainer} />
	<Route/>
)