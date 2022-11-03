import { db } from "../../firebase-config";
import { Dispatch } from "redux"
import { createAction, createAsyncAction } from 'redux-promise-middleware-actions';

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

interface Action {
  type: "add" | "remove" | "update" | "getAllBooks" | "getBook";
  payload: any;
}

const bookCollectionRef = collection(db, "books");

export const addBooks = (newBook: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "add",
      payload: addDoc(bookCollectionRef, newBook),
    });
  };
};

export const updateBook = (id: any, updatedBook: any) => {
  const bookDoc = doc(db, "books", id);

  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "update",
      payload: updateDoc(bookDoc, updatedBook),
    });
  };
};

// Create an async action
const fooAction = createAction('GET_BOOK_TEST', async () => {
  const bookDoc = doc(db, "books", id);

  const data = await getDoc(bookDoc);

  return response;
});

// Use async action
fooAction('123')

export const getBook = (id: any) => {
  
  const getData = async () => { 

    return data.data();
  };

  let data = getData()

  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "getBook",
      payload: data.then((data) => console.log(data)),
    });
  };
};

export const getAllBooks = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "getAllBooks",
      payload: getDocs(bookCollectionRef),
    });
  };
};

export const deleteBook = (id: any) => {
  const bookDoc = doc(db, "books", id);

  return (dispatch: Dispatch) => {
    dispatch({
      type: "delete",
      payload: deleteDoc(bookDoc),
    });
  };
};

// export const depositMoney = (amount: number) => {
//     return (dispatch: Dispatch<Action>) => {
//         dispatch({
//             type: ActionType.DEPOSIT,
//             payload: amount
//         })
//     }
// }

// export const withdrawMoney = (amount: number) => {
//     return (dispatch: Dispatch<Action>) => {
//         dispatch({
//             type: ActionType.WITHDRAW,
//             payload: amount
//         })
//     }
// }

// export const bankrupt = () => {
//     return (dispatch: Dispatch<Action>) => {
//         dispatch({
//             type: ActionType.BANKRUPT
//         })
//     }
// }
