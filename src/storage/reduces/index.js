import { combineReducers } from "redux";
import searchDogs from "./searchDog";
import allDogs from "./allDogs";

const combinationReducers = combineReducers({
    searchDogs,
    allDogs
})

export default combinationReducers;