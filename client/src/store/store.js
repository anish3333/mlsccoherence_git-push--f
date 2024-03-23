import { configureStore } from "@reduxjs/toolkit"
import userSliceReducer from "./slices/User.slices.js"
import ChannelIDSlices from "./slices/ChannelID.slices.js";

const store = configureStore({
    reducer:{
        user: userSliceReducer,
        channelID:ChannelIDSlices
    }
})

export default store; 