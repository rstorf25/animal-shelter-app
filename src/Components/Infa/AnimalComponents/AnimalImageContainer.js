import React from "react";
import PropTypes from "prop-types";

export default function AnimalImage(props) {
  return <img className="animal-image" src={props.image} alt="test" />;
}

AnimalImage.propTypes = {
  image: PropTypes.string.isRequired,
};
