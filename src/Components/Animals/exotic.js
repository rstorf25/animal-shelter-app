import animal_attributes from "./animal_attributes";
const {temperments, animalTypes, gender, age} = animal_attributes;

const exotic = [
    {
        id: 0,
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
        id: 1,
        name: "Clyde",
        type: animalTypes.HAMSTER,
        breed: "Small one",
        gender: gender.MALE,
        age: age.SENIOR,
        temperment: temperments.ENERGETIC,
        adoptionPrice: 90,
        image: "https://images.pexels.com/photos/15373305/pexels-photo-15373305/free-photo-of-hamster-in-mug-eating-chocolate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
        id: 2,
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
        id: 3,
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

export default exotic;