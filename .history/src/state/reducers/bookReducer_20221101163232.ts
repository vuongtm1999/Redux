const initialState: any = "test";

interface Action {
    type: "add" | "remove" | "update" | "getAllBooks" | "getBook";
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
        case "getBook":
            state = action.payload;
            return action.payload;
        default:
            return state;
    }
}

export default reducer