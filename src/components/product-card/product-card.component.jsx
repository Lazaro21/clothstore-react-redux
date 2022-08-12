import { useContext } from "react";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { CartContext } from "../../context/cart.context";

import {ProductCardContainer, Footer, Name, Price} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const handleAddToCart = () => {
		addItemToCart(product);
	};

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer className="footer">
				<Name className="name">{name}</Name>
				<Price className="price">${price}</Price>
			</Footer>
			<Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddToCart}>
				Add to card
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
