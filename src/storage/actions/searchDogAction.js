import api from "../../service/api";
import replaceDogName from "../../service/replaceDogName";

function searchDogSucess(dogs) {
    return {
        type: "SEARCH_DOG_SUCESS",
        dogs: dogs,
        error: null,
        loading: false
    }
}

function searchDogError(error){
    return {
        type: "SEARCH_DOG_ERROR",
        error: error,
        loading: false
    
    }
}

function searchDogsInit(){
    return {
        type: "SEARCH_DOG_INIT",
        loading: true,
        error: null
    }
}


export default function searchDog(term){
    return dispatch => {
        dispatch(searchDogsInit())
        const dogName = replaceDogName(dog);
        const URL = `${dogName}/images/random/12`;
        const { data } = await api.get(URL);
        try{
            dispatch( searchDogSucess( data ) )
        }catch(error) {
            dispatch( searchDogError(error) );
        }   
        const dogs = data.message;
    }
}