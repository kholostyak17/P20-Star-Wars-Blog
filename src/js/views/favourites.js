import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.js";

import "../../styles/home.scss";

export const Favourites = () => {
	const { store, actions } = useContext(Context);
	const [favourites, setFavourites] = useState([]);

	console.log(store.favourites);
	useEffect(
		() => {
			if (store.favourites != undefined) {
				setFavourites(
					store.favourites.map((elem, index) => {
						return <li key={index.toString()}>{elem}</li>;
					})
				);
			}
		},
		[store.favourites]
	);

	return (
		<div className="d-flex justify-content-center">
			<ul>{favourites}</ul>
		</div>
	);
};
