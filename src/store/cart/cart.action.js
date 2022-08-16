import { createAction } from "../../utils/reducer/reducer.utils";
import CART_ACTION_TYPES from "./cart.types";
import { addCartItem, removeItemCart, removeProductCart } from "./cart.utils";

export const addItemToCart = (product, cartItems) => {
	const newCartItems = addCartItem(cartItems, product);
	return createAction(CART_ACTION_TYPES.ADD_CART_ITEM, newCartItems)
};

export const removeItemFromCart = (product, cartItems) => {
	const newCartItems = removeItemCart(cartItems, product);
	return createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM, newCartItems)
};

export const removeProductFromCart = (product, cartItems) => {
	const newCartItems = removeProductCart(cartItems, product);
	return createAction(CART_ACTION_TYPES.REMOVE_CART_PRODUCT, newCartItems)
};

export const setIsCartOpen = (isCartOpen) => {
	console.log("chego no setIsCartOpen");
	return createAction(CART_ACTION_TYPES.IS_CART_OPEN, isCartOpen);
};

