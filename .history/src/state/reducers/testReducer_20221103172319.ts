import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = { title: "", author: "", status: "" }

export const getBook = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await client.get('/fakeApi/todos')
    return response.todos
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