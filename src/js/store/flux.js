const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {},
			peopleDetails: {},
			species: {},
			speciesDetails: {},
			planets: {},
			planetsDetails: {},
			changeFavourites: false
		},
		actions: {
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people?page=1&limit=100", { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ people: responseAsJson });
					});
			},
			getPeopleDetails: uid => {
				fetch("https://www.swapi.tech/api/people/".concat(uid), { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson, "joder");
						setStore({ peopleDetails: responseAsJson });
					});
			},
			getSpecies: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/species?page=1&limit=100");

					if (response.ok) {
						let responseAsJson = await response.json();
						setStore({ species: responseAsJson });
					} else {
						throw new Error(response.statusText, "code:", response.status);
					}
				} catch (error) {
					console.log(error);
				}
			},
			getSpeciesDetails: uid => {
				fetch("https://www.swapi.tech/api/species/".concat(uid), { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson, "joder");
						setStore({ speciesDetails: responseAsJson });
					});
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets?page=1&limit=100", { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ planets: responseAsJson });
					});
			},
			getPlanetsDetails: uid => {
				fetch("https://www.swapi.tech/api/planets/".concat(uid), { method: "GET" })
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
						setStore({ planetsDetails: responseAsJson });
					});
			},
			setFavourites: element => {
				let favourites = JSON.parse(localStorage.getItem("favourites"));
				const removeItemFromArr = (myArray, element) => {
					let index = myArray.findIndex(x => x.name == element.name);
					myArray.splice(index, 1);
				};
				if (favourites.findIndex(x => x.name == element.name) == -1) {
					localStorage.setItem("favourites", JSON.stringify([...favourites, element]));
					console.log(favourites);
					console.log(element, " añadido a favoritos");
				} else {
					removeItemFromArr(favourites, element);
					localStorage.setItem("favourites", JSON.stringify(favourites));
					console.log(element, " borrado de favoritos");
				}
				setStore({ changeFavourites: !getStore().changeFavourites });
			}
		}
	};
};

export default getState;
