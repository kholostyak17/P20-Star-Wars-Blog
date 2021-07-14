import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const PeopleDetails = () => {
	const { store, actions } = useContext(Context);
	const [peopleDetails, setPeopleDetails] = useState([]);
	const params = useParams();

	useEffect(() => {
		actions.getPeopleDetails(params.id);
	}, []);

	useEffect(
		() => {
			if (store.peopleDetails.result != undefined) {
				setPeopleDetails(
					<>
						<h2>{store.peopleDetails.result.properties.name}</h2>
						<ul>
							<li>Gender ⇨ {store.peopleDetails.result.properties.gender}</li>
							<li>Birth Year ⇨ {store.peopleDetails.result.properties.birth_year}</li>
							<li>Height ⇨ {store.peopleDetails.result.properties.height} cm</li>
							<li>Mass ⇨ {store.peopleDetails.result.properties.mass} kg</li>
							<li>Skin color ⇨ {store.peopleDetails.result.properties.skin_color}</li>
							<li>Eye color ⇨ {store.peopleDetails.result.properties.eye_color}</li>
							<li>Hair color ⇨ {store.peopleDetails.result.properties.hair_color}</li>
							<li>Description ⇨ {store.peopleDetails.result.description}</li>
						</ul>
					</>
				);
			}
		},
		[store.peopleDetails]
	);

	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<img
						className="detailsPhoto"
						src="https://play-lh.googleusercontent.com/proxy/cUAjPVJwQhMnagGUuZUpTauv4D3Qj7kMe5TLl4mbWyOaF9YzBYmqqbL-e8J3Xj6YU2NJhQJghCNXWLPSzR-GkWpbYQA4Hy6WiIAprIYkbZWBpA=w720-h405-rw"
					/>
				</div>
				<div className="col-6 d-flex flex-column">
					{peopleDetails != "" ? (
						peopleDetails
					) : (
						<div className="spinner-border text-warning m-auto" role="status">
							<span className="sr-only">Loading...</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
