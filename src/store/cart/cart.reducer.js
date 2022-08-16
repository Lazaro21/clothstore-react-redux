import CART_ACTION_TYPES from "./cart.types";

const CART_INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],

};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
	const { type, payload } = action;
	switch (type) {
		case CART_ACTION_TYPES.IS_CART_OPEN:
			return { ...state, isCartOpen: payload };
		case CART_ACTION_TYPES.ADD_CART_ITEM:
			// console.log("ran inside cartReducer")
			return {
				...state,
				cartItems: payload
			};
		case CART_ACTION_TYPES.REMOVE_CART_ITEM:
			return {
				...state,
				cartItems: payload
			}
		case CART_ACTION_TYPES.REMOVE_CART_PRODUCT:
			return {
				...state,
				cartItems: payload
			}
		default:
			return state;
	}
};
