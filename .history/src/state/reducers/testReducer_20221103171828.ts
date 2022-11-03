import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = { title: "", author: "", status: "" }

const testSlice = createSlice({
    name: 'Test',
    initialState,
    reducers: {

    }
})

export { reducer: userReducer } = testSlice

export default todosSlice.reducer