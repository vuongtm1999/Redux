import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    // entities: [],
    // status: null
}

const todosSlice = createSlice({
    name: 'Test',
    initialState,
    reducers: {

    }
})

//   export const { todoAdded, todoToggled, todosLoading } = todosSlice.actions

export default todosSlice.reducer