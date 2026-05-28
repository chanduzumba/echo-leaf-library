import { useSelector, useDispatch } from "react-redux";
import { useMemo, useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Book from "./Book";
import LoadingSpinner from "./LoadingSpinner";
import { filterBooks, clearFilter } from "../store/slices/bookSlice";

function BookList({ titleQuery = '', authorQuery = '' }) {
  const dispatch = useDispatch();
  const { allBooks, filteredBooks, popularBooks } = useSelector((store) => store.books);
  const location = useLocation();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

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

  const books = location.pathname === '/' ? popularBooks : ((location.pathname === '/browse') ? allBooks : filteredBooks);


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
      {params.category && (
        <div className="mb-6 flex flex-col justify-center items-center text-slate-100">
          <h2 className="mb-4 text-2xl font-bold capitalize">
            {params.category} Books
          </h2>
          <Link to="/" className="inline-block text-cyan-400 hover:text-cyan-200 font-medium">
            ← Back to Home
          </Link>
        </div>
      )}

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
