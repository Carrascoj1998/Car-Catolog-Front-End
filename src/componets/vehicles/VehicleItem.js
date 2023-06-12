import classes from "./css/VehicleItem.module.css";
import Card from "../ui/Card";
function VehicleItem(props){
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <div className={classes.info}>
                        <h2>Year</h2>
                        <h3>{props.year}</h3>
                        <h2>Make</h2>
                        <h3>{props.make}</h3>
                        <h2>Model</h2>
                        <h3>{props.model}</h3>
                        <h2>Color</h2>
                        <h3>{props.color}</h3>
                        <h2>Vin</h2>
                        <h3>{props.vin}</h3>
                    </div>
                    <div>
                        <button className={classes.actions}>Edit</button>
                    </div>
                    <br/>
                    <div>
                        <button className={classes.actions}>My Favorites</button>
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default VehicleItem;