import { useContext, useState } from "react";
import classes from "./css/VehicleItem.module.css";

import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";
import EditCard from "./EditCard";

function VehicleItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const isItemFavorite = favoritesCtx.itemIsFavorite(props.id);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isFavorite, setIsFavorite] = useState(isItemFavorite); // Maintain favorite status per item

    const toggleEditMode = () => {
        setIsEditMode((prevEditMode) => !prevEditMode);
    };

    const handleEditSubmit = (id, editedVehicle) => {
        console.log("Edit submitted for ID:", id);
        console.log("Edited vehicle data:", editedVehicle);
    };

    const toggleFavoriteStatusHandler = () => {
        if (isFavorite) {
            favoritesCtx.removeFavorites(props.id);
        } else {
            favoritesCtx.addFavorites({
                id: props.id,
                year: props.year,
                make: props.make,
                model: props.model,
                color: props.color,
                vin: props.vin,
                purchasePrice: props.purchasePrice,
            });
        }
        setIsFavorite((prevIsFavorite) => !prevIsFavorite); // Update favorite status of the item
    };

    return (
        <li className={classes.item}>
            {isEditMode ? (
                <EditCard vehicle={props} onEditSubmit={handleEditSubmit} />
            ) : (
                <Card>
                    <div className={classes.content}>
                        <div className={classes.info}>
                            {/*<p className={classes.p}>{props.id}</p>*/}
                            <p className={classes.p}>Year: {props.year}</p>
                            <p className={classes.p}>Make: {props.make}</p>
                            <p className={classes.p}>Model: {props.model}</p>
                            <p className={classes.p}>Color: {props.color}</p>
                            <p className={classes.p}>VIN: {props.vin}</p>
                            <p className={classes.p}>Purchase Price: {props.purchasePrice}</p>
                        </div>
                        <div className={classes.actions}>
                            <button onClick={toggleEditMode}>Edit</button>
                        </div>
                        <div className={classes.actions}>
                            <button onClick={toggleFavoriteStatusHandler}>
                                {isFavorite ? "Remove From Favorites" : "To Favorites"}
                            </button>
                        </div>
                    </div>
                </Card>
            )}
        </li>
    );
}

export default VehicleItem;