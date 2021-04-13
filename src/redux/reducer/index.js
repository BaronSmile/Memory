import {combineReducers} from "redux";

import gameResultReducer from "../reducer/gameResultReducer";

const rootReducer = combineReducers({
  game: gameResultReducer
});

export default rootReducer;