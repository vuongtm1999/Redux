const initialState: any = {};

interface Action {
    type: "add" | "remove" | "update" | "getAllBooks" | "getBook" | "getBook_FULFILLED" | "getBookTest" | "undefined";
    payload: any;
}

const bookReducer = (state: any = initialState, action: Action): any => {
    switch (action.type) {
        case "add":
            return action.payload;
        case "remove":
            return action.payload;
        case "update":
            return action.payload;
        case "getAllBooks":
            return action.payload;
        case "getBook":
            return {
                ...state,
                data: action.payload
            }

        default: 
            return state;
    }
}

export default bookReducer