import { useState } from "react";

const initialState = {
	cart: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {

		let tempState ;
		if (state.cart.length > 0 ) {
			tempState = state.cart.map((item) =>{
				if (item.id === payload.id){
					return { ...item, quantity: item.quantity + 1 } //Actualizamos la cantidad
				} else {
					return item
				}
		   	})
		}	
	
		let itemFind = state.cart.find(items => items.id === payload.id);
		if (itemFind === undefined){
			setState({
				...state,
				cart: [...state.cart,payload]
			});
		}else{
			setState({cart: [...tempState]});
		}

	};

	const addQuantity = (payload) => {

		let tempState ;
		if (state.cart.length > 0 ) {
			tempState = state.cart.map((item) =>{
				if (item.id === payload.id){
					return { ...item, quantity: item.quantity + 1 } //Actualizamos la cantidad
				} else {
					return item
				}
		   	})
		}	
	
			setState({cart: [...tempState]});

	};

	
	const removeQuantity = (payload) => {

		let tempState ;
		if (state.cart.length > 0 ) {
			tempState = state.cart.map((item) =>{
				if (item.id === payload.id){
					return { ...item, quantity: item.quantity===1?item.quantity:item.quantity-1 } //Actualizamos la cantidad
				} else {
					return item
				}
		   	})
		}	
	
			setState({cart: [...tempState]});

	};

	const removeFromCart = (payload) => {
		setState({
			...state,
			cart: state.cart.filter(items => items.id !== payload.id),
		});
	}


	return {
		state,
		addToCart,
		removeFromCart,
		addQuantity,
		removeQuantity
	}
}

export default useInitialState;
