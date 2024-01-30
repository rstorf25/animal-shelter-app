import animal_attributes from "./animal_attributes";
const {temperments, animalTypes, gender, age} = animal_attributes;


const cats = [
    {
        id: 0,
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
        id: 1,
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
        id: 2,
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
        id: 3,
        name: "Jerry",
        type: animalTypes.CAT,
        breed: "Tabby",
        gender: gender.MALE,
        age: age.YOUNG,
        temperment: temperments.NEEDS_TRAINING,
        adoptionPrice: 150,
        image: "https://images.pexels.com/photos/1107807/pexels-photo-1107807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    
]

export default cats;