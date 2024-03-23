import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    data: null
}

const channelIDslice = createSlice({
    name: "channelID",
    initialState,
    reducers: {
        setChannelID: (state, action) => {
            state.status = true;
            state.data = action.payload;
        },
        removeChannelID: (state) => {
            state.status = false;
            state.data = null;
        }
    }
})

export const { setChannelID, removeChannelID } = channelIDslice.actions;

export default channelIDslice.reducer;