import {useRef} from "react";
import Card from "../ui/Card";
import classes from "./css/NewVehicleForm.module.css";

function NewVehicleForm (props){

    const yearInputRef = useRef();
    const makeInputRef = useRef();
    const modelInputRef= useRef();
    const colorInputRef= useRef();
    const vinInputRef  = useRef();


    function submitHandler(event){
        event.preventDefault();

        const enteredYear = yearInputRef.current.value;
        const enteredMake = makeInputRef.current.value;
        const enteredModel = modelInputRef.current.value;
        const enteredColor = colorInputRef.current.value;
        const enteredVin = vinInputRef.current.value;

        const vehicleData ={
            year: enteredYear,
            make: enteredMake,
            model: enteredModel,
            color: enteredColor,
            vin: enteredVin,
        };

        props.onAddVehicle(vehicleData);

    }


    return(
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <input type="text" required id="year" ref={yearInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="make">Make</label>
                    <input type="text" required id="make" ref={makeInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="model">Model</label>
                    <input type="text" required id="model" ref={modelInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="color">Color</label>
                    <input type="text" required id="color" ref={colorInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="vin">VIN</label>
                    <input type="text" required id="vin" ref={vinInputRef} />
                </div>
                <div className={classes.actions}>
                    <button>Add Vehicle</button>
                </div>
            </form>
        </Card>
    );
}

export default NewVehicleForm;