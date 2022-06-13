// import React from "react";

// const SearchBar = ({
//     handleSubmit,
//     query,
//     isLoading,
//     setQuery
// }) => {
//     return (
//         <form onSubmit={handleSubmit}>
//             <input 
//                 value={query}
//                 className="form-control"
//                 placeholder="Search Recipe"
//                 name="query"
//                 disabled={isLoading}
//                 onChange={(event) => setQuery(event.target.value)}
//             />   
//             <input
//                 disabled={isLoading || !query}
//                 type="submit"
//                 className="btn"
//                 value="Search"
//             />
//         </form>
//     )
// };

// export default SearchBar;

import React from "react";

const SearchBar = ({ handleSubmit, query, isLoading, setQuery }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="SearchComponent">
        <img className="SearchIcon" alt="Search" src="search-icon.svg" />
        <input
          value={query}
          className="SearchInput"
          placeholder="Search Recipe"
          name="query"
          disabled={isLoading}
          onChange={(event) => setQuery(event.target.value)}
        />

        {/* <input
          disabled={isLoading || !query}
          type="submit"
          className="btn"
          value="Search"
        /> */}
      </div>
    </form>
  );
};

export default SearchBar;


