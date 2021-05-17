const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {},
			peopleDetails: {},
			species: {},
			speciesDetails: {},
			planets: {},
			planetsDetails: {},
			favourites: []
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
			setFavourites: name => {
				setStore({
					favourites: [...getStore().favourites, name]
				});
				console.log(getStore().favourites);
			}
		}
	};
};

export default getState;
