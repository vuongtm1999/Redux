import { combineReducers } from "redux";
import bankReducer from "./bankReducer"
import bookReducer from "./bookReducer"
import { asyncReducer } from 'redux-promise-middleware-actions';

const reducers = combineReducers({
    bank: bankReducer,
    book: bookReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>