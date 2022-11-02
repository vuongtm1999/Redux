import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import reducers from "./reducers";
import logger from "redux-logger"

export const store = createStore(
    reducers,
    // initial state
    {},
    applyMiddleware(logger())
)