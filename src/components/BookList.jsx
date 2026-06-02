import { useSelector, useDispatch } from "react-redux";
import { useMemo, useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Book from "./Book";
import LoadingSpinner from "./LoadingSpinner";
import { filterBooks, clearFilter } from "../store/slices/bookSlice";
import categories from "../constants/categories";

function BookList({ titleQuery = '', authorQuery = '' }) {
  // Redux store hooks for book data and filter state
  const dispatch = useDispatch();
  const { allBooks, filteredBooks, popularBooks } = useSelector((store) => store.books);
  const location = useLocation();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  // Update filtered books when the category route parameter changes
  useEffect(() => {
    if (params.category) {
      dispatch(filterBooks(params.category));
    } else {
      dispatch(clearFilter());
    }
  }, [dispatch, params.category]);

  // Add loading state for search queries
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [titleQuery, authorQuery]);

  // Choose the active book list depending on the current route
  const books = location.pathname === '/' ? popularBooks : (params.category ? filteredBooks : allBooks);


  // Filter books by title and author queries
  const filteredByQuery = useMemo(() => {
    return books.filter(book => {
      const titleMatch = book.title.toLowerCase().includes(titleQuery.toLowerCase());
      const authorMatch = book.author.toLowerCase().includes(authorQuery.toLowerCase());
      return titleMatch && authorMatch;
    });
  }, [books, titleQuery, authorQuery]);


  return (
    <div className="w-full">
      {/* Show spinner while search/filter logic is loading */}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredByQuery.length > 0 ? (
            filteredByQuery.map((book) => (
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
              <p className="text-slate-400 text-lg">No books found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BookList;
