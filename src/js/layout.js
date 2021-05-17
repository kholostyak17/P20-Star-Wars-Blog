import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { People } from "./views/people";
import { PeopleDetails } from "./views/people-details";
import { Species } from "./views/species";
import { SpeciesDetails } from "./views/species-details";
import { Planets } from "./views/planets";
import { PlanetsDetails } from "./views/planets-details";
import { Favourites } from "./views/favourites";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/people">
							<People />
						</Route>
						<Route exact path="/people/:id">
							<PeopleDetails />
						</Route>
						<Route exact path="/species">
							<Species />
						</Route>
						<Route exact path="/species/:id">
							<SpeciesDetails />
						</Route>
						<Route exact path="/planets">
							<Planets />
						</Route>
						<Route exact path="/planets/:id">
							<PlanetsDetails />
						</Route>
						<Route exact path="/favourites">
							<Favourites />
						</Route>
						<Route>
							<h1>sorry, not found :(</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
