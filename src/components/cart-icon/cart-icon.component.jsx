import { useDispatch, useSelector } from "react-redux/es/exports.js";


import {
	CartIconContainer,
	ShoppingIconContainer,
	ItemCount,
} from "./cart-icon.styles.jsx";
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

const CartIcon = () => {
	const isCartOpen= useSelector(selectIsCartOpen)
	const quantityItemsCart = useSelector(selectCartCount)
	const dispatch = useDispatch();

	const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
	

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIconContainer />
			<ItemCount>{quantityItemsCart}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
