const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			likes:0
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorite: () => {
				const store = getStore();
				setStore({likes: store.likes+1})
				
			},
		
		}
	};
};

export default getState;
