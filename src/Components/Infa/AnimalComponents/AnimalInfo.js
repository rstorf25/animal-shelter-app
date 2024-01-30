import React from "react";
import PropTypes from "prop-types";

export default function AnimalInfo(props) {
  return (
    <div className="animal-info">
      <h3>{props.name}</h3>
      <p>Breed: {props.breed}</p>
      <p>Gender: {props.gender}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

AnimalInfo.propTypes = {
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
