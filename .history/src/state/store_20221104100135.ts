// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk"
// import reducers from "./reducers";
// import promise from 'redux-promise-middleware';
// import logger from "redux-logger";

import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./reducers/getBookReducer";

// export const store = createStore(
//     reducers,
//     // initial state
//     {},
//     applyMiddleware(logger, thunk, promise)
// )
const rootReducer = {
    testReducer: testReducer,
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['add', 'delete', "update"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['add', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
})