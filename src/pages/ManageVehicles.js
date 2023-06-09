import SubNavBar from "../componets/layout/SubNavBar";

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
        year: "2020",
        make: "BWM",
        model: "M6",
        color: "Black",
        vin: "ABCDEF123456"
    }
];


function ManageVehiclesPage(){
    return(
        <div>
             <SubNavBar />

            
        </div>
    );
}

export default ManageVehiclesPage;