import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-linear-to-r from-blue-600 to-blue-800 text-white shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="no-underline">
          <h1 className="text-2xl font-bold hover:text-blue-100 transition-colors">
            Echo Leaf Library
          </h1>
        </Link>

        <button
          type="button"
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
          onClick={handleToggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>

        <nav className="hidden md:flex gap-6 items-center">
          <Link
            to="/"
            className="text-white hover:text-blue-100 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/browse"
            className="text-white hover:text-blue-100 transition-colors font-medium"
          >
            Browse Books
          </Link>
          <Link
            to="/add"
            className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-400 transition-colors font-medium"
          >
            + Add Book
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-10 bg-black/40 md:hidden" onClick={closeMenu} />
      )}

      <aside
        className={`fixed top-0 left-0 z-20 h-full w-72 max-w-full transform bg-blue-700 shadow-xl transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-blue-600">
          <Link to="/" onClick={closeMenu} className="no-underline">
            <h2 className="text-xl font-bold text-white">Menu</h2>
          </Link>
          <button
            type="button"
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-2 px-4 py-6">
          <Link
            to="/"
            onClick={closeMenu}
            className="rounded px-4 py-3 text-white hover:bg-blue-600 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/browse"
            onClick={closeMenu}
            className="rounded px-4 py-3 text-white hover:bg-blue-600 transition-colors font-medium"
          >
            Browse Books
          </Link>
          <Link
            to="/add"
            onClick={closeMenu}
            className="rounded bg-sky-500 text-white px-4 py-3 text-center font-medium hover:bg-sky-400 transition-colors"
          >
            + Add Book
          </Link>
        </div>
      </aside>
    </header>
  );
}

export default Header;
