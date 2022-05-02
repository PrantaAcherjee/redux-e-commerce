import { combineReducers } from "redux";
import { productReducer } from "./productReducer";


const reducres=combineReducers({
        allProducts:productReducer
})

export default reducres;