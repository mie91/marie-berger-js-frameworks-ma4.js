import React, { useState, useEffect } from "react";
import { BASE_URL } from "../constants/API";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeItem from "./RecipeItem";


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
    <Row>
        {recipes.map(recipe => {
            const { title, thumbnail, ingredients, href } = recipe;

            return (
                <Col sm={6} md={4} key={title}>
                    <RecipeItem title={title} thumbnail={thumbnail} ingredients={ingredients} href={href} />
                </Col>
            );
        })}
    </Row>
);
}

export default RecipeList;
