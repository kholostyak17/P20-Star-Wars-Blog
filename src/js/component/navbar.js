import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const favourites = JSON.parse(localStorage.getItem("favourites"));
	const [favouritesMap, setFavouritesMap] = useState([]);

	console.log(favourites, "favourites");
	useEffect(
		() => {
			if (favourites != undefined) {
				setFavouritesMap(
					favourites.map((element, index) => {
						return (
							<div className="d-flex justify-content-between flex-nowrap" key={index.toString()}>
								<a href={"/".concat(element.type, "/", element.id)}>
									<span>{element.name}</span>
								</a>
								<button
									className="btn bg-transparent p-0"
									onClick={() =>
										actions.setFavourites({
											name: element.name,
											id: element.id,
											type: element.type
										})
									}>
									<div className="text-danger">Delete</div>
								</button>
							</div>
						);
					})
				);
			}
		},
		[store.changeFavourites]
	);

	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/home">
				<span className="navbar-brand mb-0 h1 text-warning">STAR WARS BLOG</span>
			</Link>
			<Link to="/people">
				<button className="btn btn-warning font-weight-bold text-dark">People</button>
			</Link>
			<Link to="/planets">
				<button className="btn btn-warning font-weight-bold text-dark">Planets</button>
			</Link>
			<Link to="/species">
				<button className="btn btn-warning font-weight-bold text-dark">Species</button>
			</Link>
			<Dropdown>
				<Dropdown.Toggle className="text-dark font-weight-bold" variant="warning" id="dropdown-basic">
					Favourites
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<div className="flex-column mx-1">
						{favouritesMap != "" ? favouritesMap : "Todavía no hay favoritos."}
					</div>
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
