import animal_attributes from "./animal_attributes";
const {temperments, animalTypes, gender, age} = animal_attributes;

const animalList = [
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
      {
        id: 5,
        name: "Dusty",
        type: animalTypes.CAT,
        breed: "Tabby",
        gender: gender.MALE,
        age: age.ADULT,
        temperment: temperments.CALM,
        adoptionPrice: 75,
        image: "https://images.pexels.com/photos/2361952/pexels-photo-2361952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 6,
        name: "Rose",
        type: animalTypes.CAT,
        breed: "Unknown",
        gender: gender.MALE,
        age: age.SENIOR,
        temperment: temperments.ENERGETIC,
        adoptionPrice: 90,
        image: "https://images.pexels.com/photos/2646483/pexels-photo-2646483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
        id: 7,
        name: "Clair",
        type: animalTypes.CAT,
        breed: "Calico",
        gender: gender.FEMALE,
        age: age.YOUNG,
        temperment: temperments.ENERGETIC,
        adoptionPrice: 55,
        image: "https://images.pexels.com/photos/179237/pexels-photo-179237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
        id: 8,
        name: "Jerry",
        type: animalTypes.CAT,
        breed: "Tabby",
        gender: gender.MALE,
        age: age.YOUNG,
        temperment: temperments.NEEDS_TRAINING,
        adoptionPrice: 150,
        image: "https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 9,
        name: "Dude",
        type: animalTypes.RABBIT,
        breed: "Lopped Eared",
        gender: gender.MALE,
        age: age.ADULT,
        temperment: temperments.CALM,
        adoptionPrice: 75,
        image: "https://images.pexels.com/photos/19904640/pexels-photo-19904640/free-photo-of-a-small-rabbit-is-standing-on-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 10,
        name: "Clyde",
        type: animalTypes.HAMSTER,
        breed: "Small one",
        gender: gender.MALE,
        age: age.SENIOR,
        temperment: temperments.PLAYFUL,
        adoptionPrice: 90,
        image: "https://images.pexels.com/photos/15373305/pexels-photo-15373305/free-photo-of-hamster-in-mug-eating-chocolate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
        id: 11,
        name: "Jet",
        type: animalTypes.SNAKE,
        breed: "King Cobra",
        gender: gender.FEMALE,
        age: age.YOUNG,
        temperment: temperments.ENERGETIC,
        adoptionPrice: 55,
        image: "https://images.pexels.com/photos/14173715/pexels-photo-14173715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
        id: 12,
        name: "Chonk",
        type: animalTypes.RABBIT,
        breed: "Lopped Eared",
        gender: gender.MALE,
        age: age.ADULT,
        temperment: temperments.NEEDS_TRAINING,
        adoptionPrice: 150,
        image: "https://images.pexels.com/photos/7408291/pexels-photo-7408291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]
export default animalList;