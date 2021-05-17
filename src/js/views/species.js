import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.js";

import "../../styles/home.scss";

export const Species = () => {
	const { store, actions } = useContext(Context);
	const [speciesCards, setSpeciesCards] = useState([]);

	console.log(store.species.results);
	useEffect(
		() => {
			if (store.species.results != undefined) {
				setSpeciesCards(
					store.species.results.map((elem, index) => {
						return (
							<Card
								key={index.toString()}
								title={elem.name}
								uid={elem.uid}
								type="species"
								description="A sepcies within the Star Wars universe"
								image="https://pm1.narvii.com/6333/d7d97fbf841bd4364933981c69697d309a686cfd_hq.jpg"
							/>
						);
					})
				);
			}
		},
		[store.species]
	);
	console.log("species Cards:", speciesCards);

	return <div className=" d-flex flex-wrap justify-content-around">{speciesCards}</div>;
};
