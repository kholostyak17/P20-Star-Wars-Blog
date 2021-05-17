const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: {},
			peopleDetails: {},
			species: {},
			speciesDetails: {},
			planets: {},
			planetsDetails: {}
		},
		actions: {
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/", { method: "GET" })
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
					let response = await fetch("https://www.swapi.tech/api/species/");

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
				fetch("https://www.swapi.tech/api/planets/", { method: "GET" })
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
			}
		}
	};
};

export default getState;
