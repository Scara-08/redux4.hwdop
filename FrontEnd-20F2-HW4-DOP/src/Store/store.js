import { configureStore } from "@reduxjs/toolkit"; 
import counterReducer from "./slices/Counter";
import usersReducer from "./slices/Users";
import postsReducer from "./slices/Posts";

const rootReducer = {
    counter: counterReducer,
    userList: usersReducer,
    postsList: postsReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;