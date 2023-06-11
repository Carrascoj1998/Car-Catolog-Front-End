import SubNavBar from "../componets/layout/SubNavBar";
import classes from "./css/Pages.module.css";
import testPic from "../images/react-pic.jpg";
import NewVehicleForm from "../componets/Vehicles/NewVehicleForm";


function VehiclesPage(){


    return (

        <div>
            <SubNavBar />

            <section>
                <h1>Add New Vehicle</h1>
                <NewVehicleForm />
            </section>
        </div>




    );

}

export default VehiclesPage;