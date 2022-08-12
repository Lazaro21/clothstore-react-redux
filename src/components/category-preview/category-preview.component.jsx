import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import {CategorPreviewContainer, Title, Preview} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
	return (
		<CategorPreviewContainer>
			<h2>
				<Title to={`${title}`}>
					{title.toUpperCase()}
				</Title>
			</h2>
			<Preview>
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preview>
		</CategorPreviewContainer>
	);
};

export default CategoryPreview;
