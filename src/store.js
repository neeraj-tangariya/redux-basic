import { configureStore } from "@reduxjs/toolkit";
import reducer from "./taks_module/reducer";

const store = configureStore({
    reducer: {
        todoReducer: reducer
    }
});

export default store;
