const initialState: any = {};

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
            const getBook = async () => {
                const data = await action.payload;
                state = data.data();
                console.log(state);
            }
            getBook()
            return;
        default:
            return state;
    }
}

export default reducer