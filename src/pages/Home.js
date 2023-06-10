import classes from "./css/Pages.module.css";
import testPic from "../images/react-pic.jpg";

function HomePage(){
    return (

        <div className={classes.container}>

            <h1 className={classes.h1}>Welcome to the car catalog!</h1>

            <div className={classes.image}>
                <img className={classes.img} src={testPic} alt={"Car catalog"}/>
            </div>
        </div>


    );
}

export default HomePage;