import classes from "./css/VehicleItem.module.css";
function VehicleItem(props){
    return (
        <li className={classes.item}>
            <div className={classes.content}>
                <h3>{props.year}</h3>
                <h3>{props.make}</h3>
                <h3>{props.model}</h3>
                <h3>{props.color}</h3>
                <h3>{props.vin}</h3>
                <div>
                    <button className={classes.actions}>Edit</button>
                </div>
                <br/>
                <div>
                    <button className={classes.actions}>My Favorites</button>
                </div>
            </div>
        </li>
    );
}

export default VehicleItem;