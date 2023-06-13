import { useState } from "react";
import Card from "../ui/Card";
import { useNavigate } from "react-router-dom";
import classes from "./css/EditCard.module.css";

function EditCard(props) {
    const navigate = useNavigate();

    const [editedVehicle, setEditedVehicle] = useState({
        year: props.vehicle.year,
        make: props.vehicle.make,
        model: props.vehicle.model,
        color: props.vehicle.color,
        vin: props.vehicle.vin,
        purchasePrice: props.vehicle.purchasePrice,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedVehicle((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleEditSubmit = async (event) => {
        event.preventDefault();

        try {
            await fetch(`http://localhost:8080/vehicle/${props.vehicle.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editedVehicle),
            });

            props.onEditSubmit(props.vehicle.id, editedVehicle);

            // Redirect to a different page after successful submission
            navigate("/");
        } catch (error) {
            console.log("Error updating vehicle:", error);
        }
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this vehicle?"
        );

        if (confirmDelete) {
            try {
                await fetch(`http://localhost:8080/vehicle/${props.vehicle.id}`, {
                    method: "DELETE",
                });

                navigate("/manageVehicles");
            } catch (error) {
                console.log("Error deleting vehicle:", error);
            }
        }
    };


    return (
        <Card>
            <div className={classes.content}>
                <form onSubmit={handleEditSubmit}>
                    <div className={classes.p}>
                        <label htmlFor="year">Year:</label>
                        <input
                            type="text"
                            id="year"
                            name="year"
                            value={editedVehicle.year}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={classes.p}>
                        <label htmlFor="make">Make:</label>
                        <input
                            type="text"
                            id="make"
                            name="make"
                            value={editedVehicle.make}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={classes.p}>
                        <label htmlFor="model">Model:</label>
                        <input
                            type="text"
                            id="model"
                            name="model"
                            value={editedVehicle.model}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={classes.p}>
                        <label htmlFor="color">Color:</label>
                        <input
                            type="text"
                            id="color"
                            name="color"
                            value={editedVehicle.color}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={classes.p}>
                        <label htmlFor="vin">VIN:</label>
                        <input
                            type="text"
                            id="vin"
                            name="vin"
                            value={editedVehicle.vin}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={classes.p}>
                        <label htmlFor="purchasePrice">Purchase Price:</label>
                        <input
                            type="text"
                            id="purchasePrice"
                            name="purchasePrice"
                            value={editedVehicle.purchasePrice}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={classes.actions}>
                        <button type="submit">Save</button>
                    </div>
                    <div className={classes.actions}>
                        <button type="submit" onClick={handleDelete}>Delete</button>
                    </div>
                </form>
            </div>
        </Card>
    );
}

export default EditCard;