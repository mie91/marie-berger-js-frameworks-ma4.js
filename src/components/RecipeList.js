import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants/API";
import Spinner from "react-bootstrap/Spinner";


function RecipeList() {
const [recipes, setRecipes] = useState([]);
const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => setRecipes(json.results))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

if (loading) {
    return <Spinner animation="border" className="spinner" />;
}

  return (
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.title}>{recipe.title}</li>
      ))}
    </ul>
  );
}

export default RecipeList;
