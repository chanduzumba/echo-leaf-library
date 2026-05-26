import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookList from "../components/BookList";
import categories from "../constants/categories";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Fiction");
  const navigate = useNavigate();

  const goToCategory = () => {
    const formattedCategory = selectedCategory.toLowerCase();
    navigate(`/books/${formattedCategory}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-8 bg-gradient-to-r from-slate-900 via-slate-800 to-sky-900 text-white rounded-lg p-8 shadow-2xl shadow-slate-900/40">
          <h1 className="text-4xl font-bold mb-2">Welcome to Echo Leaf Online Library</h1>
          <p className="text-sky-200 text-lg">
            Discover books across all categories
          </p>
        </div>

        {/* Category Selector */}
        <div className="mb-8 bg-slate-900 rounded-lg shadow-md shadow-slate-950/40 p-6 border border-slate-800">
          <label className="block font-bold text-lg text-slate-100 mb-4" htmlFor="category-select">
            Choose a book category:
          </label>
          <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
            <select
              id="category-select"
              className="flex-1 border-2 border-slate-700 rounded bg-slate-950 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-100"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button
              className="px-6 py-2 bg-sky-500 text-white rounded hover:bg-sky-400 transition-colors font-bold whitespace-nowrap"
              onClick={goToCategory}
            >
              View Category
            </button>
          </div>
        </div>

        {/* Quick Category Links */}
        <div className="mb-8 p-4 bg-slate-900 rounded-lg shadow-md shadow-slate-950/30 border border-slate-800">
          <h3 className="text-xl font-bold text-slate-100 mb-4">Quick Categories</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              className="px-4 py-2 bg-slate-800 text-sky-200 rounded hover:bg-slate-700 transition-colors font-medium border border-slate-700 flex items-center gap-2"
              to="/books/fiction"
            >
              <i className="fa-solid fa-book-open" aria-hidden="true"></i>
              Fiction
            </Link>
            <Link
              className="px-4 py-2 bg-slate-800 text-emerald-200 rounded hover:bg-slate-700 transition-colors font-medium border border-slate-700 flex items-center gap-2"
              to="/books/non-fiction"
            >
              <i className="fa-solid fa-book" aria-hidden="true"></i>
              Non-Fiction
            </Link>
            <Link
              className="px-4 py-2 bg-slate-800 text-violet-200 rounded hover:bg-slate-700 transition-colors font-medium border border-slate-700 flex items-center gap-2"
              to="/books/sci-fi"
            >
              <i className="fa-solid fa-rocket" aria-hidden="true"></i>
              Sci-Fi
            </Link>
            <Link
              className="px-4 py-2 bg-slate-800 text-pink-200 rounded hover:bg-slate-700 transition-colors font-medium border border-slate-700 flex items-center gap-2"
              to="/books/fantasy"
            >
              <i className="fa-solid fa-magic" aria-hidden="true"></i>
              Fantasy
            </Link>
            <Link
              className="px-4 py-2 bg-slate-800 text-orange-200 rounded hover:bg-slate-700 transition-colors font-medium border border-slate-700 flex items-center gap-2"
              to="/books/thriller"
            >
              <i className="fa-solid fa-fire" aria-hidden="true"></i>
              Thriller
            </Link>
          </div>
        </div>

        {/* Popular Books Section */}
        <div className="pl-4">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Popular Books</h2>
          <BookList />
        </div>
      </div>
    </div>
  );
}

export default Home;
