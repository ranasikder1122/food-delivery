import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardsSlice";

const store = configureStore({
    reducer:{
        card:cardsReducer
    }
});
export default store;