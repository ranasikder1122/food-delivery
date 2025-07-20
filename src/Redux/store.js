import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";

const store = configureStore({
    reducer:{
        card:cardsSlice
    }
});
export default store;