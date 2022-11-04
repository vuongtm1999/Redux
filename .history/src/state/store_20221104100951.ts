// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk"
// import reducers from "./reducers";
// import promise from 'redux-promise-middleware';
// import logger from "redux-logger";

import { configureStore } from "@reduxjs/toolkit";
import getBookReducer from "./reducers/getBookReducer";

// export const store = createStore(
//     reducers,
//     // initial state
//     {},
//     applyMiddleware(logger, thunk, promise)
// )
const rootReducer = {
    getBook: getBookReducer,
    bank: bankReducer,
    book: bookReducer,
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['add', 'delete', "update"],
      },
    }),
})