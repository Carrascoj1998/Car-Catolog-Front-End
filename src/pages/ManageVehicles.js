import SubNavBar from "../componets/layout/SubNavBar";
import { useState, useEffect } from "react";
import VehicleList from "../componets/vehicles/VehicleList";
import classes from "./css/ManageVehicle.module.css";
import { VehicleListContextProvider } from "../store/vehicleList-context";

function ManageVehiclesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVehicles, setLoadedVehicles] = useState([]);

    const fetchVehicles = () => {
        fetch("http://localhost:8080/vehicleMake/")
            .then((response) => response.json())
            .then((jsonData) => {
                setLoadedVehicles(jsonData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching vehicles:", error);
            });
    };

    useEffect(() => {
        fetchVehicles();
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <div>
            <SubNavBar />

            <h1 className={classes.h1}>Manage Vehicles</h1>

            <section>
                <VehicleListContextProvider>
                    <VehicleList vehicles={loadedVehicles} />
                </VehicleListContextProvider>
            </section>
        </div>
    );
}

export default ManageVehiclesPage;