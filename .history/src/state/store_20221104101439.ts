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

// export const store = createStore(
//     reducers,
//     // initial state
//     {},
//     applyMiddleware(logger, thunk, promise)
// )
// const rootReducer = {
//     getBook: getBookReducer,
// }

const reducers = combineReducers({
  bank: bankReducer,
  book: bookReducer,
  getBook: getBookReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>

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