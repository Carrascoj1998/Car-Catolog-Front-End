import {useContext} from "react";
import {Link} from "react-router-dom";
import classes from "../layout/css/MainNavBar.module.css";
import FavoritesContext from "../../store/favorites-context";


function MainNavBar(){
    const favoritesCtx = useContext(FavoritesContext);


    return (
        <header className={classes.header}>
            <div className={classes.logo}>Car Catalog</div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/addVehicles"}>Vehicles</Link>
                    </li>
                    <li>
                        <Link to={"/favorites"}>
                            Favorites
                            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavBar;