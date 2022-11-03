import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = { title: "", author: "", status: "" }

export const getBook = createAsyncThunk('todos/fetchTodos', async () => {
    const bookDoc = doc(db, "books", id);
    const response = await getDoc(bookDoc)
    const response = await client.get('/fakeApi/todos')
    return response.data()
})

const testSlice = createSlice({
    name: 'Test',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
})

const { reducer: testReducer } = testSlice

export default testReducer