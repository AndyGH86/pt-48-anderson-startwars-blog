const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
				personajes: [],
				planetas: [],
				naves: [],
				especies: [],
				favoritos: [],
		},
		actions: {
			fetchPersonajes: () => {
				fetch("https://www.swapi.tech/api/people/") 
				  .then(resp => resp.json())
				  .then(data => setStore({ personajes: data.results }))
				  .catch(err => console.log("No se encontro la informacion", err))
			  },
		
			  fetchPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets/")
				  .then(resp => resp.json())
				  .then(data => setStore({planetas: data.results}))
				  .catch(err => console.log("No se encontro la informacion", err))
			  },
		
			  fetchNaves: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				  .then(resp => resp.json())
				  .then(data => setStore({ naves: data.results }))
				  .catch(err => console.log("No se encontro la informacion", err))
			  },
			  fetchEspecies: () => {
				fetch("https://www.swapi.tech/api/species/")
				  .then(resp => resp.json())
				  .then(data => setStore({ especies: data.results }))
				  .catch(err => console.log("No se encontro la informacion", err))
			  },
		 
			  getFavorito: (data) => {
				const store = getStore();
				if (!store.favoritos.includes(data)) {
				  setStore({ favoritos: [...store.favoritos, data] })
				}
			  },
		      
			  deleteFavorito: (data) => {
				const store = getStore();
				const favorite = store.favoritos.filter(favorito => favorito !== data);
				setStore({ favoritos: favorite });
			  }
		}
	};
};

export default getState;
