import {createContext, useState} from "react";
import { useNavigate } from 'react-router-dom';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: (favoriteVehicles) => {},
    removeFavorites: (vehicleId) => {},
    itemIsFavorite: (vehicleId) => {}
});

 export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] =useState([]);

    function addFavoriteHandler(favoriteVehicle){
        setUserFavorites((prevUserFavorites)=>{
            return prevUserFavorites.concat(favoriteVehicle);
        });
    }

     function removeFavoriteHandler(vehicleId) {
         setUserFavorites((prevUserFavorites) => {
             return prevUserFavorites.filter((vehicle) => vehicle.id !== vehicleId);


         });

         window.location.reload();
     }

    function itemIsFavoriteHandler(vehicleId){
        return userFavorites.some(vehicle => vehicle.id === vehicleId);
    }

     const context = {
         favorites: userFavorites,
         totalFavorites: userFavorites.length,
         addFavorites: addFavoriteHandler,
         removeFavorites: removeFavoriteHandler,
         itemIsFavorite: itemIsFavoriteHandler,
     };



    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;

