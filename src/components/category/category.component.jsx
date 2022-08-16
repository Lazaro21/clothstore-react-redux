import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux/es/exports";

// import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../product-card/product-card.component";
import { selectCategories } from "../../store/categories/categories.selector";

import { CategoryTitle, CategoryContainer } from "./category.styles.jsx";

const Category = () => {
	const { category } = useParams();
	const categoriesMap = useSelector(selectCategories);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<CategoryTitle>{category.toUpperCase()}</CategoryTitle>
			<CategoryContainer>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</CategoryContainer>
		</Fragment>
	);
};

export default Category;
