
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

