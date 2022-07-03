import api from "./api";
import replaceDogName from "./replaceDogName";

export default async function searchDog(dog) {
    const dogName = replaceDogName(dog);
    const URL = `${dogName}/images/random/12`;
    const { data } = await api.get(URL);
    return data.message;

}