import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = { title: "", author: "", status: "" }

const todosSlice = createSlice({
    name: 'Test',
    initialState,
    reducers: {

    }
})

  export { reducer: userReducer } = todosSlice.actions

export default todosSlice.reducer