import api from "./api";
import replaceDogName from "./replaceDogName";

export default function searchDog(dog) {
    const dogName = replaceDogName(dog);
    const URL = `${dogName}/images/random/10`;
    var dogs = [];
    api.get(URL).then((photo) => {
        photo.data.message.forEach(dog => {
            dogs.push(dog);
        });
    })
    return dogs;
}