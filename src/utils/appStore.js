import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moivesReducer from './moviesSlice';
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moivesReducer,
            gpt: gptReducer,
            config: configReducer,
        }
    }
)

export default appStore;