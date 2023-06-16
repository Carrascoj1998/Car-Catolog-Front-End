import React, { useContext } from "react";
import classes from "./css/VehicleList.module.css";
import VehicleItem from "./VehicleItem";
import { VehicleListContext } from "../../store/vehicleList-context";

function VehicleList(props) {
    // const { makes, models } = useContext(VehicleListContext);

    return (
        <ul className={classes.list}>
            {props.vehicles.map((vehicle) => (
                <VehicleItem
                    key={vehicle.id}
                    id={vehicle.id}
                    year={vehicle.year}
                    make={vehicle.make}
                    model={vehicle.model}
                    color={vehicle.color}
                    vin={vehicle.vin}
                    purchasePrice={vehicle.purchasePrice}
                />
            ))}
        </ul>
    );
}

export default VehicleList;