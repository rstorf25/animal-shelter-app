import animal_attributes from "./animal_attributes";
const {temperments, animalTypes, gender, age} = animal_attributes;

const dogs = [
  {
    id: 0,
    name: "Charlie",
    type: animalTypes.DOG,
    breed: "Lab",
    gender: gender.MALE,
    age: age.ADULT,
    temperment: temperments.CALM,
    adoptionPrice: 75,
    image:
      "https://images.pexels.com/photos/179221/pexels-photo-179221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 1,
    name: "Bob",
    type: animalTypes.DOG,
    breed: "Border Collie",
    gender: gender.MALE,
    age: age.ADULT,
    temperment: temperments.ENERGETIC,
    adoptionPrice: 90,
    image:
      "https://images.pexels.com/photos/19131363/pexels-photo-19131363/free-photo-of-border-collie-dog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Letty",
    type: animalTypes.DOG,
    breed: "Cattle Dog",
    gender: gender.FEMALE,
    age: age.YOUNG,
    temperment: temperments.ENERGETIC,
    adoptionPrice: 55,
    image:
      "https://images.pexels.com/photos/7752793/pexels-photo-7752793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Tom",
    type: animalTypes.DOG,
    breed: "Husky",
    gender: gender.MALE,
    age: age.YOUNG,
    temperment: temperments.NEEDS_TRAINING,
    adoptionPrice: 150,
    image:
      "https://images.pexels.com/photos/13312610/pexels-photo-13312610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Twin",
    type: animalTypes.DOG,
    breed: "Cattle Dog",
    gender: gender.FEMALE,
    age: age.SENIOR,
    temperment: temperments.ENERGETIC,
    adoptionPrice: 55,
    image:
      "https://images.pexels.com/photos/7752793/pexels-photo-7752793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default dogs;
