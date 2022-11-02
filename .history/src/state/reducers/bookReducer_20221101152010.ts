import { DocumentSnapshot } from "firebase/firestore";

const initialState: Array<string> = [];

interface Action {
    type: "add" | "remove" | "update" | "getAllBooks" | "getBook";
    payload: Promise<DocumentSnapshot<DocumentData>> | Promise<QuerySnapshot<DocumentData>> | Promise<DocumentReference<any>> | Promise<void>;
}

const reducer = (state: Array<string> = initialState, action: Action): any => {
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
            return action.payload;
        default:
            return state;
    }
}

export default reducer