import classes from "./css/Pages.module.css";
import testPic from "../images/react-pic.jpg";

function HomePage(){
    return (

        <div className={classes.container}>

            <h1 className={classes.h1}>Welcome to your car catalog!</h1>

            <div className={classes.image}>
                <img src={testPic} alt={"Car catalog"}/>
            </div>
        </div>


    );
}

export default HomePage;