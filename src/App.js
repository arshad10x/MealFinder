// import React, { useState, useEffect } from "react";
// import "./App.css";
// import SearchBar from "./components/SearchBar";
// import RecipeCard from "./components/RecipeCard";
// const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [query, setQuery] = useState("");
//   const [recipes, setRecipes] = useState([]);
  
//   // search for the recipe
//   const searchRecipes = async () => {
//     setIsLoading(true);
//     const url = searchApi + query
//     const res = await fetch(url);
//     const data = await res.json();
//     setRecipes(data.meals);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     searchRecipes()
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     searchRecipes();
//   }

//   return (
//     <div className="container">
//       <h2>Our Food Recipes</h2>
//       <SearchBar
//         isLoading={isLoading}
//         query={query}
//         setQuery={setQuery}
//         handleSubmit={handleSubmit}
//       />
//       <div className="recipes">
//         // No Match
//         {recipes ? recipes.map(recipe => (
//           <RecipeCard
//              key={recipe.idMeal}
//              recipe={recipe}
//           />
//         )) : "No Results."}
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";

import './App.css';
import SearchBar from './components/SearchBar';
import RecipeContainer from './components/RecipeContainer';

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

// search for the recipe
const searchRecipes = async () => {
  setIsLoading(true);
  const url = searchApi + query
  const res = await fetch(url);
  const data = await res.json();
  setRecipes(data.meals);
  setIsLoading(false);
};

useEffect(() => {
  searchRecipes()
}, []);

const handleSubmit = (event) => {
  event.preventDefault();
  searchRecipes();
}
  return(
    <div className="Container">
      <div className="Header">
        <div className="AppNameComponent">
          <img className="AppIcon" alt="img" src="hamburger.svg"/> 
          <h2>Meal Finder</h2> 
        </div>
        <SearchBar isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit} />
        {/* <div className="SearchComponent">
          <img className="SearchIcon" alt="Search" src="search-icon.svg"/>
          <input className="SearchInput" placeholder="Search Recipe" />
        </div> */}
      </div>
      <div className="RecipeListContainer">
      {recipes ? recipes.map(recipe => (
          <RecipeContainer
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : <h3>"No Result Found."</h3>}
      </div>
    </div>
  )
}
export default App;
