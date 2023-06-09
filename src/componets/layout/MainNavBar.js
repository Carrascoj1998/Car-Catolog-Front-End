import {Link} from "react-router-dom";
import classes from "../layout/css/MainNavBar.module.css";

function MainNavBar(){
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
                        <Link to={"/favorites"}>Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavBar;