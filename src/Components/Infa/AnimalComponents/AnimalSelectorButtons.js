import React from "react";
import Button from "@mui/material/Button";

export default function AnimalSelectorButtons({ onClick }) {
  const handleButtonClick = (value) => {
    onClick(value);
  };

  return (
    <div className="animal-selector-container">
      <Button
        className="select-button"
        size="large"
        variant="contained"
        onClick={() => handleButtonClick("dogs")}
      >
        Dogs
      </Button>
      <Button
        className="select-button"
        size="large"
        variant="contained"
        onClick={() => handleButtonClick("cats")}
      >
        Cats
      </Button>
      <Button
        className="select-button"
        size="large"
        variant="contained"
        onClick={() => handleButtonClick("exotic")}
      >
        Exotic
      </Button>
    </div>
  );
}
