import { createSlice } from "@reduxjs/toolkit";
import { books } from "../../utils/Books";

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        allBooks: books,
        filteredBooks: [],
        popularBooks: books.filter((book) => book.rating >= 4.5),
    },
    reducers: {
        addBooks: (state,action) => {
            state.allBooks.unshift(action.payload)
        },
        filterBooks: (state, action) => {
            const categoryToFilter = action.payload.toLowerCase();
            state.filteredBooks = state.allBooks.filter(book => book.category.toLowerCase() === categoryToFilter)
        },
        clearFilter: (state, action) => {
            state.filteredBooks = []
        }
    }
})

export const { addBooks, filterBooks, clearFilter } = bookSlice.actions

export default bookSlice.reducer