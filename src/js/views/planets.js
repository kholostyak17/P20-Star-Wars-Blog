import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.js";

import "../../styles/home.scss";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const [planetsCards, setPlanetsCards] = useState([]);

	console.log(store.planets.results);
	useEffect(
		() => {
			if (store.planets.results != undefined) {
				setPlanetsCards(
					store.planets.results.map((elem, index) => {
						return (
							<Card
								key={index.toString()}
								title={elem.name}
								uid={elem.uid}
								type="planets"
								description="A planet."
								image="https://cdna.artstation.com/p/assets/images/images/017/390/192/medium/brian-hagan-pla-ossus-final.jpg?1555781865"
							/>
						);
					})
				);
			}
		},
		[store.planets]
	);
	console.log("Planets Cards:", planetsCards);

	return <div className=" d-flex flex-wrap justify-content-around">{planetsCards}</div>;
};
