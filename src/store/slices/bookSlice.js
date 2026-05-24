import { createSlice } from "@reduxjs/toolkit";
import { books } from "../../utils/Books";

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        allBooks: books,
        filteredBooks: [],
    },
    reducers: {
        addBooks: (state,action) => {
            state.allBooks.unshift(action.payload)
        },
        filteredBooks: (state, action) => {
            state.filteredBooks = state.allBooks.filter(book => book.category === action.payload.category)
        },
    }
})

export const { addBooks, filteredBooks } = bookSlice.actions

export default bookSlice.reducer