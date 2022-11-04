import { combineReducers } from 'redux';
// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk"
// import reducers from "./reducers";
// import promise from 'redux-promise-middleware';
// import logger from "redux-logger";

import { configureStore } from "@reduxjs/toolkit";
import bankReducer from "./reducers/bankReducer";
import bookReducer from "./reducers/bookReducer";
import getBookReducer from "./reducers/getBookReducer";

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['add', 'delete', "update"],
      },
    }),
})