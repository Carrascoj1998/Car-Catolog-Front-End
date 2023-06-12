import classes from "./css/VehicleList.module.css";

import VehicleItem from "./VehicleItem";
function VehicleList(props){

    return (
        <ul className={classes.list}>
            {props.vehicles.map(vehicle => <VehicleItem key={vehicle.id}
                                                        id={vehicle.id}
                                                        year={vehicle.year}
                                                        make={vehicle.make}
                                                        model={vehicle.model}
                                                        color={vehicle.color}
                                                        vin={vehicle.vin}
            />)}
        </ul>
    );

}

export default VehicleList;