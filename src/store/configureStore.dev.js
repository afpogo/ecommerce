import { createStore, applyMiddleware } from 'redux';
//yarn add --dev redux-logger -> nos permite tener un log en la consola de desarrollo del navegador
import logger from 'redux-logger';
//nos permite utilizar, async y await
import thunk from 'redux-thunk';
//yarn add redux-devtools-extension -> verifica hacia delante y hacia atras como cambia el estado
//Se instala con un plugin de chrome - redux devtools extension
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const enhacer = composeWithDevTools(
	//Aqui añadimos los apply middleware que usaremos en la app, apply Middleware(es importante la forma como lo vas declarando y es el orden de llamado.)
	apply Middleware(thunk, logger())
);

export default function configureStore(initialState) {
	return createStore(rootReducer, initalState, enhacer);
}