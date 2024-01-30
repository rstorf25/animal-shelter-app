import React, { useState } from "react";

export default function AnimalFilter({ onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState({
    type: "All",
    age: "All",
    gender: "All",
    adoptionPrice: 0,
    temperment: "All",
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));

    onFilterChange({
      ...selectedFilters,
      [filterType]: value,
    });
  };

  return (
    <div className="animal-filter-container">
      <h1 className="animal-filter-header">Filter</h1>
      <div className="filter-options">
        <label htmlFor="type">Animal Type:</label>
        <select
          id="type"
          value={selectedFilters.type}
          onChange={(event) => handleFilterChange("type", event.target.value)}
        >
          <option value="all">All</option>  
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="rabbit">Rabbit</option>
          <option value="hamster">Hamster</option>
          <option value="snake">Snake</option>
        </select>
        <label htmlFor="age">Age:</label>
        <select
          id="age"
          value={selectedFilters.age}
          onChange={(event) => handleFilterChange("age", event.target.value)}
        >
          <option value="All">All</option>
          <option value="Young">Young</option>
          <option value="Adult">Adult</option>
          <option value="Senior">Senior</option>
        </select>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={selectedFilters.gender}
          onChange={(event) => handleFilterChange("gender", event.target.value)}
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label htmlFor="temperment">Temperment:</label>
        <select
          id="temperment"
          value={selectedFilters.temperment}
          onChange={(event) =>
            handleFilterChange("temperment", event.target.value)
          }
        >
          <option value="all">All</option>
          <option value="calm">Calm</option>
          <option value="playful">Playful</option>
          <option value="energetic">Energetic</option>
          <option value="needs training">Needs Training</option>
        </select>
        <label htmlFor="price">Price:</label>
        <input
          type="range"
          id="adoptionPrice"
          min={0}
          max={150}
          value={selectedFilters.adoptionPrice}
          onChange={(event) =>
            handleFilterChange("adoptionPrice", Number(event.target.value))
          }
        ></input>
        <span>
          {" "}
          {">"} {selectedFilters.adoptionPrice}
        </span>
      </div>
    </div>
  );
}

// break out options into another component, .map them?
