import { categories } from "../../mock-data/category-info";
import Directory from "../../components/directory/directory.component";

const Home = () => {
	return <Directory categories={categories} />;
};

export default Home;
