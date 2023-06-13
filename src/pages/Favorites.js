import {useContext} from "react";
import classes from "./css/Favorites.module.css"
import FavoritesContext from "../store/favorites-context";
import VehicleList from "../componets/vehicles/VehicleList";



function FavoritesPage(){

    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0){
        content = <p className={classes.p}>You have nothing in here yet.</p>
    }else{
        content =<VehicleList vehicles={favoritesCtx.favorites} />
    }

    return (
        <section>
            <h1 className={classes.h1}>Favorites</h1>
            {content}
        </section>
    );
}

export  default  FavoritesPage;