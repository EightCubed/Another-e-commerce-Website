import { cartReducer } from "./reducer";
import { createStore } from "redux";

export const store = createStore(cartReducer); 