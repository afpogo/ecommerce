//Objeto Java scprit Stado inicial es todos los posibles datos que vayamos a utilizar en la app
const initialState = {
	productList: {
		products: [],
		error: null,
		loading: false
	},

	activeProduct: {
		product: null,
		error: null,
		loading: false
	}

	cart: {
		item: [],
		total: 0
	}
};

export default initialState;