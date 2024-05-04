import React, { createContext, useState } from "react";


export const FavoritesContext = createContext({
    ids:[],
    addFavourite : (id : any) => {},
    removeFavourite : (id : any) => {},
});


const FavoritesContextProvider: React.FC<{children: React.ReactNode}> = ({children}) =>{

const [favouriteMealIds , setfavouriteMealIds] = useState([]);

const addFavourite = (id : any) =>{
   setfavouriteMealIds((currentFavIds) => [...currentFavIds , id])
}

const removeFavourite = (id: any) =>{
   setfavouriteMealIds ((currentFavIds) => currentFavIds.filter((mealId) => mealId !==id))
}

const value ={
    ids: favouriteMealIds,
    addFavourite : addFavourite,
    removeFavourite : removeFavourite
}

return <FavoritesContext.Provider value={value}>
{children}
</FavoritesContext.Provider>
}

export default FavoritesContextProvider
