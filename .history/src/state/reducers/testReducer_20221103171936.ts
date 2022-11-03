import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = { title: "", author: "", status: "" }

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