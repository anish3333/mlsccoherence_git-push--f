import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    data: null
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.status = true;
            state.data = action.payload;
        },
        removeData: (state) => {
            state.status = false;
            state.data = null;
        }
    }
})

export const { setData, removeData } = dataSlice.actions;

export default dataSlice.reducer;