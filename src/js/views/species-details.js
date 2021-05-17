import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const SpeciesDetails = () => {
	const { store, actions } = useContext(Context);
	const [speciesDetails, setSpeciesDetails] = useState([]);
	const params = useParams();

	useEffect(() => {
		actions.getSpeciesDetails(params.id);
	}, []);

	useEffect(
		() => {
			if (store.speciesDetails.result != undefined) {
				setSpeciesDetails(
					<>
						<h2>{store.speciesDetails.result.properties.name}</h2>
						<ul>
							<li>Average lifespan ⇨ {store.speciesDetails.result.properties.average_lifespan}</li>
							<li>Classification ⇨ {store.speciesDetails.result.properties.classification}</li>
							<li>Eye colors ⇨ {store.speciesDetails.result.properties.eye_colors}</li>
							<li>Hair colors ⇨ {store.speciesDetails.result.properties.hair_colors}</li>
							<li>Homeworld ⇨ {store.speciesDetails.result.properties.homeworld}</li>
							<li>Language ⇨ {store.speciesDetails.result.properties.language}</li>
						</ul>
					</>
				);
				console.log(store.speciesDetails, "speciesDetails");
			}
		},
		[store.speciesDetails]
	);
	console.log({ speciesDetails });
	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<img
						className="detailsPhoto"
						src="https://i1.wp.com/wipy.tv/wp-content/uploads/2020/06/ewoks-de-star-wars-sin-pelaje.jpg?resize=1000%2C600&ssl=1"
					/>
				</div>
				<div className="col-6">{speciesDetails}</div>
			</div>
		</div>
	);
};
