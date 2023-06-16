import { createContext, useState, useEffect } from "react";


export const VehicleListContext = createContext({
    make: [],
    model: [],
});

export function VehicleListContextProvider(props) {
    const [make, setMake] = useState([]);
    const [model, setModel] = useState([]);


    useEffect(() => {
        // Fetch make data
        fetch("http://localhost:8080/vehicleMake/")
            .then((response) => response.json())
            .then((jsonData) => {
                setMake(jsonData);
            })
            .catch((error) => {
                console.error("Error fetching makes:", error);
            });

        // Fetch model data
        fetch("http://localhost:8080/vehicleModel/")
            .then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData);
                setModel(jsonData);
            })
            .catch((error) => {
                console.error("Error fetching models:", error);
            });
    }, []);

    const context = {
        make,
        model,
    };

    return (
        <VehicleListContext.Provider value={context}>
            {props.children}
        </VehicleListContext.Provider>
    );
}
