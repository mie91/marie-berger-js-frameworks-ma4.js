import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function RecipeItem({ title, thumbnail, ingredients, href }) {
	return (
    <Card>
      <Card.Img  variant="top" src={thumbnail} />
      <Card.Title>{title}</Card.Title>
      <Card.Body>
        <a href={href} className="btn btn-info">
          More details
        </a>
      </Card.Body>
    </Card>
  );
}

RecipeItem.propTypes = {
	ingredients: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
};

export default RecipeItem;