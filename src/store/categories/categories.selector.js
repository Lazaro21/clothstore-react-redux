import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => {
	// console.log(state)
	return state.categories;
}


export const selectCategories = createSelector(
	[selectCategoriesReducer],
	(categories) => {
		return categories.categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {});
	}
);
