import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
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
		<nav className="navbar navbar-light bg-dark mb-3">
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
				<Dropdown.Toggle className="text-dark" variant="warning" id="dropdown-basic">
					Favourites
				</Dropdown.Toggle>

				<Dropdown.Menu>{favourites}</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
