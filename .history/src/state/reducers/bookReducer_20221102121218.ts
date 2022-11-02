const initialState: any = {};

interface Action {
    type: "add" | "remove" | "update" | "getAllBooks" | "getBook" | "getBook_FULFILLED";
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
            return action.payload;
    }

    return state;
}

export default reducer