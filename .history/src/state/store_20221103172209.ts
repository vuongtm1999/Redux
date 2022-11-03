// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk"
// import reducers from "./reducers";
// import promise from 'redux-promise-middleware';
// import logger from "redux-logger";

import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./reducers/testReducer";

// export const store = createStore(
//     reducers,
//     // initial state
//     {},
//     applyMiddleware(logger, thunk, promise)
// )
const rootReducer = {
    testReducer: testReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store;
