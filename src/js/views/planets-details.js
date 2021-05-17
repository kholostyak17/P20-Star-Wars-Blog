import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PlanetsDetails = () => {
	const { store, actions } = useContext(Context);
	const [planetsDetails, setPlanetsDetails] = useState([]);
	const params = useParams();
	console.log(store.planetsDetails.result);

	useEffect(() => {
		actions.getPlanetsDetails(params.id);
	}, []);

	useEffect(
		() => {
			if (store.planetsDetails.result != undefined) {
				setPlanetsDetails(
					<>
						<h2>{store.planetsDetails.result.properties.name}</h2>
						<ul>
							<li>Diameter ⇨ {store.planetsDetails.result.properties.diameter}</li>
							<li>Rotation Period ⇨ {store.planetsDetails.result.properties.rotation_period}</li>
							<li>Orbital period ⇨ {store.planetsDetails.result.properties.orbital_period}</li>
							<li>Gravity ⇨ {store.planetsDetails.result.properties.gravity}</li>
							<li>Population ⇨ {store.planetsDetails.result.properties.population}</li>
							<li>Climate ⇨ {store.planetsDetails.result.properties.climate}</li>
							<li>Terrain ⇨ {store.planetsDetails.result.properties.terrain}</li>
							<li>Surface Water ⇨ {store.planetsDetails.result.properties.surface_water}</li>
							<li>Terrain ⇨ {store.planetsDetails.result.properties.terrain}</li>
							<li>Description ⇨ {store.planetsDetails.result.description}</li>
						</ul>
					</>
				);
			}
		},
		[store.planetsDetails]
	);

	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<img
						className="detailsPhoto"
						src="https://sm.ign.com/t/ign_in/gallery/e/every-plan/every-planet-and-location-in-star-wars-battlefront-2s-multip_te1n.1080.jpg"
					/>
				</div>
				<div className="col-6">{planetsDetails}</div>
			</div>
		</div>
	);
};
