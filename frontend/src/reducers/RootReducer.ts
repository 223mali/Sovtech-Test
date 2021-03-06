import {combineReducers} from "redux";
import JokeReducer from "./JokeReducer";
import sampleReducer from "./SampleReducer";
import TogglePopupReducer from "./TogglePopupReducer";

const RootReducer = combineReducers({
  // sample: sampleReducer,
  popup: TogglePopupReducer,
  joke: JokeReducer
});

export default RootReducer