import { useSelector, useDispatch } from "react-redux";
import { useMemo, useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Book from "./Book";
import { filterBooks, clearFilter } from "../store/slices/bookSlice";

function BookList({ books: booksProp }) {
  const dispatch = useDispatch();
  const { allBooks, filteredBooks, popularBooks } = useSelector((store) => store.books);
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    if (params.category) {
      dispatch(filterBooks(params.category));
    } else {
      dispatch(clearFilter());
    }
  }, [dispatch, params.category]);

  const books = location.pathname === '/' ? popularBooks : filteredBooks;


  return (
    <div className="w-full">
      {params.category && (
        <div className="mb-6 flex flex-col justify-center items-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 capitalize">
            {params.category} Books
          </h2>
          <Link to="/" className="inline-block text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      )}

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.length > 0 ? (
          books.map((book) => (
            <Link
              to={`/book/${book.id}`}
              key={book.id}
              className="no-underline"
            >
              <Book book={book} />
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No books found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookList;
