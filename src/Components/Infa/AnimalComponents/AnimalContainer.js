import React from "react";
import PropTypes from "prop-types";
import AnimalImage from "./AnimalImageContainer";
import AnimalInfo from "./AnimalInfo";

function AnimalContainer(props) {
  return (
    <div className="animal-container">
      <div className="animal-image-container">
        <AnimalImage image={props.image} />
        <AnimalInfo
          name={props.name}
          breed={props.breed}
          gender={props.gender}
          age={props.age}
        />
      </div>
    </div>
  );
}

AnimalContainer.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default AnimalContainer;
