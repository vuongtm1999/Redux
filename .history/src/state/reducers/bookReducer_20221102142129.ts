import { getBookTest } from './../action-creators/index';
const initialState: any = {};

interface Action {
    type: "add" | "remove" | "update" | "getAllBooks" | "getBook" | "getBook_FULFILLED" | "getBook_PENDING" | "undefined";
    payload: any;
}

const reducer = (state: any = initialState, action: Action): any => {
    switch (action.type) {
        case "add":
            return action.payload;
        case "remove":
            return action.payload;
        case "update":
            return action.payload;
        case "getAllBooks":
            return action.payload;
        case "getBook_FULFILLED":
            state = { ...state, result: action.payload }
            break;
        case String(getBookTest.pending):
            console.log("Test TESTssssssssssssssssssssss");
            break;
        // return action.payload;
    }

    return state;
}

export default reducer