import {
    getDoc,
    doc,
  } from "firebase/firestore";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../../firebase-config';

const initialState = { title: "", author: "", status: "" }

export const getBook = createAsyncThunk('test/getBook', async (id: any) => {
    const bookDoc = doc(db, "books", id);

    const response = await getDoc(bookDoc)
    return response.data()
})

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {},
    extraReducers: {
        [getBook.pending]: (state) => {
            console.log("pedding");
        },
        [getBook.rejected]: (state, action) => {
            console.log("Error", action.error);
            state = { ...state, error: action.error };
        },
        [getBook.fulfilled]: (state, action) => {
            state = { ...state, data: action.payload };
        }
    }
})

const { reducer: testReducer } = testSlice

export default testReducer