import { useDispatch, useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
	ProductCardContainer,
	Footer,
	Name,
	Price,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const handleAddToCart = () => {
		console.log(cartItems)
		dispatch(addItemToCart(product, cartItems));
	};

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer className="footer">
				<Name className="name">{name}</Name>
				<Price className="price">${price}</Price>
			</Footer>
			<Button
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={handleAddToCart}
			>
				Add to card
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
