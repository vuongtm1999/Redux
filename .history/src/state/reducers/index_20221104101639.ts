import { combineReducers } from "redux";
import bankReducer from "./bankReducer"
import bookReducer from "./bookReducer"
import getBookReducer from "./getBookReducer";

const reducers = combineReducers({
    bank: bankReducer,
    book: bookReducer,
    getBook: getBookReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>