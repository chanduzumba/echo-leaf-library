import { createSlice } from "@reduxjs/toolkit";
import { books } from "../../utils/books";

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        allBooks: books,
        filteredBooks: [],
        popularBooks: books.filter((book) => book.rating >= 4.5),
    },
    reducers: {
        // Add a new book to the start of the list
        addBooks: (state,action) => {
            state.allBooks.unshift(action.payload)
        },
        // Filter books by selected category
        filterBooks: (state, action) => {
            const categoryToFilter = action.payload.toLowerCase();
            state.filteredBooks = state.allBooks.filter(book => book.category.toLowerCase() === categoryToFilter)
        },
        // Reset filtered books
        clearFilter: (state, action) => {
            state.filteredBooks = []
        }
    }
})

export const { addBooks, filterBooks, clearFilter } = bookSlice.actions

export default bookSlice.reducer