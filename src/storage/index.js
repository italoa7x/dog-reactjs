import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reduces/";
import logger from "redux-logger";

//cria uma composição de middlewares
const composeEnhacers = window.__REDUX_DEVTOOLS_ || compose;

//cria um array de middleware
const middlewares = [thunk, logger];

//cria a store utilizando os reducers que foram combinados
//e cria uma composição de middlewares
const store = createStore(reducers, composeEnhacers(
    applyMiddleware(... middlewares)
));

export default store;