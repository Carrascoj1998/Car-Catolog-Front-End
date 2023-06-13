import SubNavBar from "../componets/layout/SubNavBar";
import { useState, useEffect } from "react";
import VehicleList from "../componets/vehicles/VehicleList";
import classes from "./css/ManageVehicle.module.css";

function ManageVehiclesPage() {


    const [isLoading, setIsLoading] = useState(true);
    const [loadedVehicles, setLoadedVehicles] = useState([]);
    const [loadedMakes, setLoadedMakes] = useState([]);
    const [loadedModels, setLoadedModels] = useState([]);

    const fetchMakes = () => {
        return fetch("http://localhost:8080/vehicleMake/")
            .then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData); // Check the fetched make data
                setLoadedMakes(jsonData);
            })
            .catch((error) => {
                console.error("Error fetching makes:", error);
            });
    };

    const fetchModels = () => {
        return fetch("http://localhost:8080/vehicleModel/")
            .then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData); // Check the fetched model data
                setLoadedModels(jsonData);
            })
            .catch((error) => {
                console.error("Error fetching models:", error);
            });
    };

    const fetchVehicles = () => {
        fetch("http://localhost:8080/vehicle/")
            .then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData); // Check the fetched vehicle data

                const vehiclesWithMakeModel = jsonData.map((vehicle) => {
                    const make = loadedMakes.find((make) => make.id === vehicle.vehicleMake);
                    const model = loadedModels.find((model) => model.id === vehicle.vehicleModel);

                    return {
                        ...vehicle,
                        vehicleMake: make ? make.vehicleMake : null,
                        vehicleModel: model ? model.vehicleModel : null,
                    };
                });

                console.log(vehiclesWithMakeModel); // Check vehicles with make and model

                setLoadedVehicles(vehiclesWithMakeModel);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching vehicles:", error);
            });
    }

    useEffect(() => {
        Promise.all([fetchMakes(), fetchModels()]).then(() => {
            console.log(loadedMakes); // Check the value of loadedMakes
            console.log(loadedModels); // Check the value of loadedModels
            fetchVehicles();
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    console.log(loadedMakes); // Check the value of loadedMakes
    console.log(loadedModels); // Check the value of loadedModels

    return (
        <div>
            <SubNavBar />

            <h1 className={classes.h1}>Manage Vehicles</h1>

            <section>
                <VehicleList
                    vehicles={loadedVehicles}
                    makes={loadedMakes}
                    models={loadedModels}
                />
            </section>
        </div>
    );
}

export default ManageVehiclesPage;