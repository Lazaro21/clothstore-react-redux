import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCartReducer],
	(cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
	[selectCartReducer],
	(cart) => {
        console.log("arrived at selectIsCartOpen")
        return cart.isCartOpen}
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cart) => cart.reduce((total, item) => total += item.quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cart) => cart.reduce((total, item) => total += item.price * item.quantity, 0)
)
