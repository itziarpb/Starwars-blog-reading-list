const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			addLikes:(characters)=>{
				const store = getStore()
				setStore({likes: [...store.likes, characters]})
			}, 
			// Use getActions to call a function within a fuction
			addFavorite: (character) => {
				const store = getStore();
				setStore({favorites: [...store.favorites, character]})
				
			},
		
		}
	};
};

export default getState;
