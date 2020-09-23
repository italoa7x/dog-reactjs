import api from "./api";
import replaceDogName from "./replaceDogName";

export default function searchDog(dog) {
    const dogName = replaceDogName(dog);
    const URL = `${dogName}/images/random`;
    console.log(URL);
}