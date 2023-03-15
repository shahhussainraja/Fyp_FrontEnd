import React, { useState } from "react";
import SearchBar from "./searchBar";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // make an API request or perform some search logic here
    setSearchResults([searchTerm]); // update search results state with the search term for demo purposes
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <li key={result}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
