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
            console.log("Test result", action.payload);
            // state = { result:  }
            break;
        // case String(getBookTest.fulfilled):
        //     return {
        //         ...state,
        //         data: action.payload,
        //     };
        // return action.payload;
    }

    return state;
}

export default reducer