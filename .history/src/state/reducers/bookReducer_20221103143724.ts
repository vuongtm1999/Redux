const initialState: any = {};

interface Action {
    type: "add" | "remove" | "update" | "getAllBooks" | "getBook" | "getBookTest_FULFILLED" | "getBookTest" | "undefined";
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
        case "getBookTest_FULFILLED":
            console.log("Payload", action.payload);
            return {
                ...state,
                data: action.payload
            }

        default: 
            return state;
    }
}

export default reducer