const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorite: (character) => {
				const store = getStore();
				setStore({favorites: [...store.favorites, character]})
				
			},
		
		}
	};
};

export default getState;
