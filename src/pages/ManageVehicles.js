import SubNavBar from "../componets/layout/SubNavBar";
import VehicleList from "../componets/Vehicles/VehicleList";

const DUMMY_DATA=[
    {
        id: 'm1',
        year: "2020",
        make: "BWM",
        model: "M6",
        color: "Black",
        vin: "ABCDEF123456"


    },
    {
        id: 'm1',
        year: "2023",
        make: "Kia",
        model: "Forte",
        color: "Black",
        vin: "ASDFER2345F"
    }
];


function ManageVehiclesPage(){
    return(
        <div>
             <SubNavBar />

            <h1>Manage Vehicles</h1>

            <section>
                <VehicleList vehicles={DUMMY_DATA} />
            </section>
        </div>
    );
}

export default ManageVehiclesPage;