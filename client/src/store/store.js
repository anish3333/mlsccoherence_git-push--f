import { configureStore } from "@reduxjs/toolkit"
import userSliceReducer from "./slices/User.slices.js"
import dataSliceReducer from "./slices/Data.slices.js"

const store = configureStore({
    reducer:{
        user: userSliceReducer,
        data: dataSliceReducer
    }
})

export default store; 