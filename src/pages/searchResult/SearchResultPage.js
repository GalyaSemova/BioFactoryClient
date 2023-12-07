import React from "react";
import { Link, useLocation } from "react-router-dom";
import StaticNavBar from "../../components/staticNavBar/StaticNavBar";
import Footer from "../../components/footer/Footer";

const SearchResultPage = () => {

    const { state } = useLocation();
    const searchResults = state?.searchResults || [];

    console.log("Search Results in SearchResultPage:", searchResults);

    const primaryColor = "#008000";

  return (
    <div className="container-fluid">
        <StaticNavBar/>
       <div className="col-lg-6 p-4 my-5 mx-auto text-center"
       style={{ color: primaryColor }}>
        {searchResults.length > 0 ? (
            <div className="col-lg-6 p-4 text-light rounded"
              style={{ backgroundColor: primaryColor, color: "#FFFFFF" }}
            >
            {searchResults.map((note, index) => (
                <Link to={`/shop/product/${note.id}`} 
                    key={index}
                    className="text-decoration-none text-light"
                >
                <div className="bg-light text-dark p-3 mb-3 rounded">
                  <h4>{note.name}</h4>
                </div>
                </Link>
            ))}
                </div>
            ) : (
                <p>No items found.</p>
            )}
        </div> 
        <footer className="fixed-bottom">
            <Footer/>
        </footer>
    </div>
    
  );
};

export default SearchResultPage;