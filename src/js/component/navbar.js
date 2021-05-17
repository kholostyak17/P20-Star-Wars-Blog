import React from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Navbar = () => {
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
			<Link to="/favourites">
				<button className="btn btn-warning font-weight-bold text-dark">Favourites</button>
			</Link>
		</nav>
	);
};
