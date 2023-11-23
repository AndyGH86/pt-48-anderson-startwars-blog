const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				
			],
				personajes: [],
				planetas: [],
				naves: [],
				favoritos: [],
		},
		actions: {
			fetchPersonajes: () => {
				fetch("https://www.swapi.tech/api/people/") 
				  .then(data => setStore({ personajes: data.results }))
				  .catch(err => console.log("No se encontro la informacion", err))
			  },
		//Planet
			  fetchPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets/")
				  .then(resp => resp.json())
				  .then(data => setStore({planetas: data.results}))
				  .catch(err => console.log("No se encontro la informacion", err))
			  },
		//Vehicle
			  fetchNaves: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
				  .then(resp => resp.json())
				  .then(data => setStore({ naves: data.results }))
				  .catch(err => console.log("No se encontro la informacion", err))
			  },
		//Funcion favorito, guarda la info del componenete que se seleccione 
			  getFavorito: (data) => {
				const store = getStore();
				if (!store.favoritos.includes(data)) {
				  setStore({ favoritos: [...store.favoritos, data] })
				}
			  },
		// Funcion eliminar, elimina el componente favorito que se seleccione      
			  deleteFavorito: (data) => {
				const store = getStore();
				const favorite = store.favoritos.filter(favorito => favorito !== data);
				setStore({ favoritos: favorite });
			  }
		}
	};
};

export default getState;
