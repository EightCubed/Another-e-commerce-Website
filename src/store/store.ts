import { boardReducer } from "./reducer";
import { createStore } from "redux";

export const store = createStore(boardReducer); 