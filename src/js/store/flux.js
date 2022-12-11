const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
    },
    actions: {
      addFavorite: (character) => {
        const store = getStore();
        setStore({ favorites: [...store.favorites, character] });
      },
	  deleteFavorite: (remove)=> {
		console.log(remove);
		const store = getStore();
		// setStore({
		// 	//favorites : store.favorites.filter(items => items.e !=e)
		// 	//setStore({favorites:newfavorites})
		// })
	  }
    },
  };
};

export default getState;
