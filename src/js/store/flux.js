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
      deleteFavorite: (remove) => {
        console.log(remove);
        const store = getStore();
        let favoriteFiltered = store.favorites.filter((item) => item != remove);
        setStore({ favorites: favoriteFiltered });
      },
    },
  };
};

export default getState;
