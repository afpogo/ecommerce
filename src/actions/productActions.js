import {
	FETCH_PRODCUTS_SUCCESS,
	FETCH_PRODCUTS_FAILURE,
	FETCH_PRODUCTS_INTI,
	FETCH_PRODCUT_SUCCESS,
	FETCH_PRODCUT_FAILURE,
	FETCH_PRODUCT_INTI,
	SAVE_PRODCUT_SUCCESS,
	SAVE_PRODCUT_FAILURE,
	SAVE_PRODUCT_INIT
} from 'types';
import API from "../api"

// Actions Creators

export function fetchProductsSuccess(products) {
	return{
		type: FETCH_PRODCUTS_SUCCESS,
		payload: products
	};
}

export function fetchProductsFailure(error) {
	return{
		type: FETCH_PRODCUTS_FAILURE,
		payload: error
	};
}

export function fetchProductSuccess(product) {
	return{
		type: FETCH_PRODCUT_SUCCESS,
		payload: product
	};
}

export function fetchProductFailure(error) {
	return{
		type: FETCH_PRODCUT_FAILURE,
		payload: error
	};
}

export function saveProductSuccess() {
	return{
		type: SAVE_PRODCUT_SUCCESS
	};
}

export function saveProductFailure(error) {
	return{
		type: SAVE_PRODCUT_FAILURE
		payload: error
	};
}

// Acction Creators (Assync)

export function fetchProducts(){
	// Se necesita un middleware redux-thunk -> engloba una funcion dentro de otra utilizando un dispath y resuelve la sincronia en redux
	return async(dispatch => {
		dispatch(() => {
			return {
				// Devulve funcion informativa que estamos iniciando la llamada asyncrona a la api
				type: FETCH_PRODUCTS_INIT
			};
		});

		try{
			const data = await API.products.getAll();
			return dispatch(fetchProductsSuccess(data.products));
		}catch(error){
			return dispatch(fetchProductsFailure(error));
		}
	});
}
export function fetchProduct(productId){
	return async(dispatch => {
		dispatch(() => {
			return {
				type: FETCH_PRODUCT_INIT
			};
		});
		try{
			const data = await API.products.getSingle(productId);
			return disptch(fetchProductSuccess(data.prosuct));
		}catch(error){
			return dispatch(fetchProductFailure(error));
		}
	});
}
export function saveProduct(){
	return async(dispatch => {
		dispatch(() => {
			return {
				type: SAVE_PRODUCT_INIT
			};
		});

		try{
			await API.product.save(product);
			return dispatch(saveProductSuccess(product));
		}catch(error){
			return dispatch(saveProductFailure(error));
		}
	});
}

// En la terminal añadir como dependencia redux-thunk -> conosla]$yarn add redux-thunk