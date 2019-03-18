import{
	LOAD_CART_ITEMS,
	ADD_CART_ITEM,
	REMOVE_CART_ITEM
} from '../actions/types'

impoty initialState from './initialState';

export default function cartReducer(state = initialState.cart, action){
	switch (action.type) {
		case LOAD_CART_ITEMS:
			return{
				...state,
				items: [...state.items]
			};

		case ADD_CART_ITEM:
			return{
				...state,
				items: [...state.items, action.payload],
				total: state.total + action.payload.price
			};

		case REMOVE_CART_ITEM: {
			const searchItem = (elem) => elem.id === action.payload._id;
			//find() operacion de array, busca el item dentro del array, tipo foreach
			const item = state.items.find(searchItem);
			//findIndex(), operacion de array, busca la posicion del item dentro del array
			const index = state.items.findIndex(searchItem);

			return{
				//genera una copia de estado
				...state,
				items: [
					//slice(posinicial, posfinal), operacion de array, crea una copia desde la pociion inicial hasta la posicion que le pasemos sin incluir
					...state.items.slice(0, index),
					...state.items.slice(index + 1)
				],
				total: state.total - item.price
			};
		}
			
		default:
			return state;
	}
}	