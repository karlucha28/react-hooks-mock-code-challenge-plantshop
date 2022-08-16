import React from "react";

function Search({handleFilterPlants}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleFilterPlants(e.target.value)}
      />
    </div>
  );
}

export default Search;
