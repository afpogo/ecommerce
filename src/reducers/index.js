import { combineReducer } from 'redux';
import { routerReducer } from 'react-router-redux';

import productList from './productListReducer';
import activeProduct from './activeProductReducer';
import cart from './cartReducer';

//Instalar: yarn add react-router-redux@4.0.8
//Pasamos el nombre que va a tener el estado para cada uno de los reducers
const rootReducer = combineReducer({
	routing: routerReducer,
	productList,
	activeProduct,
	cart
});

export default rootReducer;