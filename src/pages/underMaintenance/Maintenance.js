import { useNavigate } from "react-router-dom";
import MainButton from "../../components/button/MainButton";
import classes from './Maintenance.module.css'

function Maintenance() {
    const navigate = useNavigate();
  
    const handleGoBack = () => {
      navigate(-1);
    };

    return (
        <div className={classes.maintenanceContainer}>
        <h1 className={classes.maintenanceHeader}>COMING SOON...</h1>
  
        <MainButton value="Go Back" onClick={handleGoBack} />
  
        <div className={`my-5 ${classes.imageContainer}`}>
          <img
            src={require("../../assets/stayTuned.jpg")}
            alt="Egg is Dead"
            className={`img-fluid ${classes.maintenanceImage}`}
          />
        </div>
      </div>
    );
}

export default Maintenance;