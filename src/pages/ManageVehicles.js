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
            <ul>
                {DUMMY_DATA.map((vehicle) => {
                    return <li key={vehicle.id}>{vehicle.year}</li>
                })}
            </ul>
        </div>
    );
}

export default ManageVehiclesPage;