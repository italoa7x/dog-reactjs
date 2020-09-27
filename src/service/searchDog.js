import api from "./api";
import replaceDogName from "./replaceDogName";

export default async function searchDog(dog) {
    const dogName = replaceDogName(dog);
    const URL = `${dogName}/images/random/10`;
    const { data } = await api.get(URL);
    const dogs = data.message;

    localStorage.setItem("dogs", JSON.stringify(dogs));
}