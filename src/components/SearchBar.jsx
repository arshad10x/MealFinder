import React from "react";

const SearchBar = ({ handleSubmit, query, isLoading, setQuery }) => {
  return (
    <form onSubmit={handleSubmit} autocomplete="off">
      <div className="SearchComponent">
        <img className="SearchIcon" alt="Search" src="search-icon.svg"/>
        <input
          value={query}
          className="SearchInput"
          placeholder="Search Recipe"
          name="query"
          disabled={isLoading}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;


