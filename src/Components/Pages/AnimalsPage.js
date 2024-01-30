import React, { useState } from "react";
import TopNavBar from "../Infa/TopNavBar";
import DonateButton from "../Infa/DonateComponents/DonateButton";
import AnimalContainer from "../Infa/AnimalComponents/AnimalContainer";
import AnimalFilter from "../Infa/AnimalComponents/AnimalFilter";
import animalList from "../Animals/animals";

export default function AnimalsPage() {
  const [animals, setAnimals] = useState(animalList);

  const handleFilterChange = (filters) => {
    const filteredData = animalList.filter((animal) => {
      return (
        (filters.type === "All" || animal.type === filters.type) &&
        (filters.age === "All" || animal.age === filters.age) &&
        (filters.gender === "All" || animal.gender === filters.gender) &&
        (filters.temperment === "All" ||
          animal.temperment === filters.temperment) &&
        animal.adoptionPrice >= filters.adoptionPrice
      );
    });
    setAnimals(filteredData);
  };

  return (
    <div>
      <TopNavBar />
      <div className="animal-page-container">
        <div className="grid-wrapper button-element"></div>
        <div className="grid-wrapper avail-animal-grid-wrapper">
          <div className="available-animals-container">
            {animals.map((animal) => (
              <AnimalContainer
                key={animal.id}
                name={animal.name}
                gender={animal.gender}
                breed={animal.breed}
                image={animal.image}
                age={animal.age}
              />
            ))}
          </div>
        </div>
        <div className="grid-wrapper filter-element">
          <AnimalFilter onFilterChange={handleFilterChange} />
        </div>
      </div>
      <DonateButton />
    </div>
  );
}
