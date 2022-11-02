import { logger } from 'redux-logger';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import reducers from "./reducers";
import { promises } from 'fs';

export const store = createStore(
    reducers,
    // initial state
    {},
    applyMiddleware(logger, thunk, promises)
)