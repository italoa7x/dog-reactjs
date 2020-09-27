const INITIAL_STATE = {
    dogs: {}
}
export default function allDogs(state = INITIAL_STATE, action){
    if(action.type === "ALL_DOGS"){
        return {
            dogs: action.dogs
        }
    }else {
        return state;
    }
}