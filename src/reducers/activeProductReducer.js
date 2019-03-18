import{
	FETCH_PRODUCT_INIT,
	FETCH_PRODUCT_SUCCESS,
	FETCH_PRODUCT_FAILURE
} from '../action/types';

import initialState from './initialState';

export default function activeProductReducer(state = initialState.activeProduct, action){
	switch (action.type) {
		case FETCH_PRODUCT_INIT:
			return{
				...state,
				loading: true,
				error: null
			};

		case FETCH_PRODUCT_SUCCESS:
			return{
				...state,
				product: action.payload,
				loading: false
			};

		case FETCH_PRODUCT_FAILURE:
			return{
				...state,
				error: action.payload,
				loading: false
			};
			
		default:
			return state;
	}
}