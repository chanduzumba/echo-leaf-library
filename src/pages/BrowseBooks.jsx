import { useSelector } from "react-redux"
import BookList from "../components/BookList"
import Toast from "../components/Toast"
import { useState } from "react";

function BrowseBooks() {
  const [titleQuery, setTitleQuery] = useState('')
  const [authorQuery, setAuthorQuery] = useState('')
  const [toast, setToast] = useState(null)
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = () => {
    if (!titleQuery.trim() && !authorQuery.trim()) {
      setToast({
        message: 'Please enter title or author to search',
        type: 'warning'
      });
      return;
    }
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 300);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 p-6 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl">
          <h3 className="font-semibold text-2xl mb-4 text-slate-100">Search Books</h3>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="search"
              disabled={isSearching}
              className="flex-1 bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50"
              placeholder="Search by title"
              value={titleQuery}
              onChange={(e) => setTitleQuery(e.target.value)}
            />
            <input
              type="search"
              disabled={isSearching}
              className="flex-1 bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50"
              placeholder="Search by author"
              value={authorQuery}
              onChange={(e) => setAuthorQuery(e.target.value)}
            />
            <button
              type="button"
              disabled={isSearching}
              className="px-5 py-3 bg-cyan-600 text-white rounded-xl hover:bg-cyan-500 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              onClick={handleSearch}
            >
              {isSearching ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Searching...
                </>
              ) : (
                'Search'
              )}
            </button>
            <button
              type="button"
              disabled={isSearching}
              className="px-5 py-3 bg-slate-700 text-slate-100 rounded-xl hover:bg-slate-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => {
                setTitleQuery("");
                setAuthorQuery("");
              }}
            >
              Clear
            </button>
          </div>
        </div>
        <BookList titleQuery={titleQuery} authorQuery={authorQuery} />
      </div>
    </div>
  )
}

export default BrowseBooks
