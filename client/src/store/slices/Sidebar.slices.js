import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.status = !state.status;
        },
    },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;