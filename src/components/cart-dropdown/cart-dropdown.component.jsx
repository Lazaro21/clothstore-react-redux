import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";

import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	// console.log(cartItems)
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((product) => (
						<CartItem key={product.id} product={product} />
					))
				) : (
					<EmptyMessage>Your Cart is Empty</EmptyMessage>
				)}
				{cartItems.length ? <span>Total: ${cartTotal}</span> : ":("}
				<Button
					buttonType={BUTTON_TYPE_CLASSES.inverted}
					onClick={goToCheckoutHandler}
				>
					CHECKOUT
				</Button>
			</CartItems>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
