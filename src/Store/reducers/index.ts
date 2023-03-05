import { combineReducers } from "redux";

import RepositoriesReducer from "./repoReducer";


const RootReducer = combineReducers({
    Repository: RepositoriesReducer
});

export default RootReducer;