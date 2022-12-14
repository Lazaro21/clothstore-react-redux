/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "../routes/home/home.component";
import Navigation from "../routes/navigation/navigation.component";
import Authentication from "../routes/authentication/authentication.component.jsx";
import Shop from "../routes/shop/shop.component.jsx";
import Checkout from "../routes/checkout/checkout.component";
import { setCurrentUser } from "../store/user/user.action";
import {
	onAuthStateChangedListener,
	createUserDocumentFromAuth,
} from "../firebase/firebase.utils";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}

			dispatch(setCurrentUser(user));
		});

		return unsubscribe;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="auth" element={<Authentication />} />
				<Route path="checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
