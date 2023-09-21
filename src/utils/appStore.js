import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moivesReducer from './moviesSlice';

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moivesReducer,
        }
    }
)

export default appStore;