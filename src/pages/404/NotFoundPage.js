import { useNavigate } from "react-router-dom";
import MainButton from "../../components/button/MainButton";

const NotFoundPage = () => {
    const navigate = useNavigate();
  
    const handleGoBack = () => {
      navigate(-1);
    };
  
    return (
      <div style={{ textAlign: "center", padding: "150px" }}>
        <h1>404 - Not Found</h1>
        <p>
          Oops! It seems like you're lost. The page you are looking for might be
          in another galaxy.
        </p>
        <MainButton value="Go Back" onClick={handleGoBack} />
        <div className="my-5">
            <img
                src= {require("../../assets/eggNotFound.jpg")}
                alt="Egg is Dead"
                className="img-fluid"
            />
        </div>
      </div>
    );
  };
  
  export default NotFoundPage;