import { useSelector } from "react-redux";

import {
	selectCartItems,
	selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";

import {
	CheckoutContainer,
	CheckoutHeader,
	Total,
	HeaderBlock,
} from "./checkout.styles.jsx";

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);
	// console.log(cartItems)
	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map((product) =>
				product.quantity > 0 ? (
					<CheckOutItem key={product.id} product={product} />
				) : null
			)}
			<Total className="total">Total: ${cartTotal}</Total>
		</CheckoutContainer>
	);
};

export default Checkout;
