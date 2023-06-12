import SubNavBar from "../componets/layout/SubNavBar";
import NewVehicleForm from "../componets/Vehicles/NewVehicleForm";
import classes from "./css/Vehicles.module.css";

function VehiclesPage(){
    function addVehicleHandler(vehicleData){
        fetch(
            "http://localhost:8080/vehicle/",
            {
                method:"POST",
                body: JSON.stringify(vehicleData),
                headers: {
                    "Content-Type": "application.json"
                }
            }
        );

        fetch(
            "http://localhost:8080/vehicleMake/",
            {
                method:"POST",
                body: JSON.stringify(vehicleData),
                headers: {
                    "Content-Type": "application.json"
                }
            }
        );

        fetch(
            "http://localhost:8080/vehicleModel/",
            {
                method:"POST",
                body: JSON.stringify(vehicleData),
                headers: {
                    "Content-Type": "application.json"
                }
            }
        );

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