import { createStore } from "redux";
import reducres from "./reducres";

const store=createStore(reducres,{},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
