const INITIAL_STATE = {
    type: "",
    dogs: [],
    loading: false,
    error: null
};

export default searchDog(state = INITIAL_STATE, action) {
    switch(action.type){
        case "SEARCH_DOG_INIT":
            return {
                type: "SEARCH_DOG_INIT",
                loading: true,
                dogs: [],
                error: null
            }
        case "SEARCH_DOG_SUCESS":
            return {
                type: "SEARCH_DOG_SUCESS",
                dogs: aciton.dogs,
                loading: false,
                error: null
            }
        case "SEARCH_DOG_ERROR":
            return {
                type: "SEARCH_DOG_ERROR",
                dogs: [],
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}
