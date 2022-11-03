import { db } from "../../firebase-config";
import { Dispatch } from "redux";
import { createAsyncAction } from "redux-promise-middleware-actions";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  DocumentData,
} from "firebase/firestore";

interface Action {
  type:
    | "add"
    | "remove"
    | "update"
    | "getAllBooks"
    | "getBook"
    | "getBook_FULFILLED";
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

export const getBook = (id: any) => async() => {
  const bookDoc = doc(db, "books", id);
  const data = await getDoc(bookDoc);

  // return (dispatch: Dispatch<Action>) => {
  //   dispatch({
  //     type: "getBook",
  //     payload: data.data(),
  //   });
  // };

  return () => {
    const response = await getDoc(bookDoc);
    return {
      type: 'FETCH_POSTS',
      payload: response
    }
  }
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
