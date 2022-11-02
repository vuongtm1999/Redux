import { db } from "../../firebase-config";
import { Dispatch } from "redux"

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

export const getBook = (id: any) => {
  const bookDoc = doc(db, "books", id);
  // async payload () {
  //   const fooData = await getFooData();
  //   const barData = await getBarData(fooData);

  //   return barData;
  // }

  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: "getBook",
      payload: getDoc(bookDoc),
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
