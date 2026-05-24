import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './slices/bookSlice'

const appStore = configureStore({
    reducer: {
        books: bookReducer
    }
})

export default appStore