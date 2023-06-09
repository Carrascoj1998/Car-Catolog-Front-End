
import {Link} from "react-router-dom";
import classes from "./css/SubNavBar.module.css";
function SubNavBar(){
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <Link to={"/addVehicles"}>Add Vehicle</Link>
                    </li>
                    <li>
                        <Link to={"/manageVehicles"}>Manage Vehicle</Link>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default SubNavBar;