import { useDispatch, useSelector } from "react-redux";

import { addItemToCart, removeItemFromCart, removeProductFromCart } from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector.js";
import {
	CheckoutItemContainer,
	ImageContainer,
	NamePrice,
	Quantity,
	Arrow,
	Value,
	RemoveButton
} from "./checkout-item.styles.jsx";

const CheckOutItem = ({ product }) => {
	const { name, imageUrl, price, quantity } = product;
	const dispatch = useDispatch()
	const cartItems = useSelector(selectCartItems)
	// console.log("teste");
	// const { addItemToCart, removeItemFromCart, removeProductFromCart } =
	// 	cartContext;

	const increaseQuantityHandler = () => dispatch(addItemToCart(product, cartItems));
	const decreaseQuantityHandler = () => dispatch(removeItemFromCart(product, cartItems));
	const removeProductFromCartHandler = () => dispatch(removeProductFromCart(product, cartItems));

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<NamePrice>{name}</NamePrice>
			<Quantity>
				<Arrow onClick={decreaseQuantityHandler}> &#10094;</Arrow>
				<Value className="value">{quantity}</Value>
				<Arrow onClick={increaseQuantityHandler}>&#10095;</Arrow>
			</Quantity>
			<NamePrice>{price}</NamePrice>
			<RemoveButton
				className="remove-button"
				onClick={removeProductFromCartHandler}
			>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckOutItem;
