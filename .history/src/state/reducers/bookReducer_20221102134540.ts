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
            state = { ...state, result: action.payload };
            // console.log("getBook_FULFILLED");
            break;
        case "undefined":
            console.log("undefined neeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
            break;
        // return action.payload;
    }

    return state;
}

export default reducer