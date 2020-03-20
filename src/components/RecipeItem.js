import React from "react";
import RecipeList from "../components/RecipeList";

function RecipeItem({ href, title, thumbnail }) {
   return (
     <>
       <h2>Recipes</h2>
       <RecipeList />
     </>
   );
}

export default RecipeItem;