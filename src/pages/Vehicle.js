import SubNavBar from "../componets/layout/SubNavBar";
import {useNavigate} from 'react-router-dom';
import NewVehicleForm from "../componets/vehicles/NewVehicleForm";
import classes from "./css/Vehicles.module.css";

function VehiclesPage(){
    const navigate = useNavigate();
    function addVehicleHandler(vehicleData) {
        const vehiclePromise = fetch("http://localhost:8080/vehicle/", {
            method: "POST",
            body: JSON.stringify(vehicleData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const makePromise = fetch("http://localhost:8080/vehicleMake/", {
            method: "POST",
            body: JSON.stringify(vehicleData.make),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const modelPromise = fetch("http://localhost:8080/vehicleModel/", {
            method: "POST",
            body: JSON.stringify(vehicleData.model),
            headers: {
                "Content-Type": "application/json",
            },
        });

        Promise.all([vehiclePromise, makePromise, modelPromise])
            .then(() => {
                navigate("/manageVehicles");
            })
            .catch((error) => {
                console.error("Error adding vehicle:", error);
            });
    }



        return (

        <div>
            <SubNavBar />

            <section>
                <h1 className={classes.h1}>Add New Vehicle</h1>
                <NewVehicleForm onAddVehicle={addVehicleHandler}/>
            </section>
        </div>




    );

}

export default VehiclesPage;