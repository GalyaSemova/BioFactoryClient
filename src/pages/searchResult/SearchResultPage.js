import React from "react";
import { Link, useLocation } from "react-router-dom";

const SearchResultPage = () => {

    const { state } = useLocation();
    const searchResults = state?.searchResults || [];

    console.log("Search Results in SearchResultPage:", searchResults);

  return (
    <div>
      {searchResults.length > 0 ? (
        <div className="row">
          {searchResults.map((note, index) => (
            <Link to={`/shop/product/${note.id}`} key={index}>
              <h4>{note.name}</h4>
            </Link>
          ))}
        </div>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default SearchResultPage;