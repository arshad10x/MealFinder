// import React from "react";
// const RecipeCard = ({ recipe }) => {
//     const {
//         idMeal,
//         strMeal,
//         strCategory,
//         strMealThumb,
//     } = recipe;
    
//     return (
//         <div className="card">
//             <img
//                 src={strMealThumb}
//                 alt={strMeal}
//                 className="card-image"
//             />
//             <div className="card-body">
//                 <span className="category">{strCategory}</span>
//                 <h3>{strMeal}</h3>
//                 <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Instructions</a>
//             </div>
//         </div>
//     )
// };

// export default RecipeCard;

import React from "react" ;
const RecipeContainer = ({ recipe }) => {
const {idMeal,strMeal,strCategory,strMealThumb, } = recipe ;
return (
<div className="RecipeCard">
<div className= "RecipeContainer">
<img src={strMealThumb} alt={strMeal} className="CoverImage"/>
<span className= "category"> {strCategory} </ span>
<h3> {strMeal} </h3>
<a href={"https://www.themealdb.com/meal/" + idMeal}> Ingredients</a>
</div>
</div>
)
};
export default RecipeContainer;

