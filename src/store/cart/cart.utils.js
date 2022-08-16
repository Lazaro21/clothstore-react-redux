export const addCartItem = (cartItems, productToAdd) => {
	// if (cartItems.includes(productToAdd)) {
	// 	const updatedCartItems = [...cartItems];
	// 	const indexProductToAdd = updatedCartItems.indexOf(productToAdd);
	// 	updatedCartItems[indexProductToAdd].quantity += 1;
	// 	return updatedCartItems;
	// } else {
	//     productToAdd['quantity'] = 1
	//     return [...cartItems, productToAdd]
	// }

	// console.log(cartItems);

	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: (cartItem.quantity += 1) }
				: cartItem
		);
	}
	// console.log([...cartItems, { ...productToAdd, quantity: 1 }])
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeItemCart = (cartItems, productToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToRemove.id
	);

	// console.log(cartItems)
	// console.log(existingCartItem)
	// console.log(productToRemove)

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(
			(cartItem) => cartItem.id !== productToRemove.id
		);
	} else {
		return cartItems.map((cartItem) =>
			cartItem.id === productToRemove.id
				? { ...cartItem, quantity: (cartItem.quantity -= 1) }
				: cartItem
		);
	}
};

export const removeProductCart = (cartItems, product) => {
	return cartItems.filter(item => item.id !== product.id)
}

