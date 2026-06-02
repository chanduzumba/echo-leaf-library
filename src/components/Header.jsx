import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  // Mobile menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full bg-linear-to-r from-blue-600 to-blue-800 text-white shadow-lg backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="no-underline">
            <h1 className="text-2xl font-bold hover:text-blue-100 transition-colors">
              <i className="fas fa-leaf"></i> Echo Leaf Library
              <img src="/books-svgrepo-com.svg" alt="Logo" className="inline-block w-6 h-6 ml-2" />
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

          {/* Desktop navigation links */}
          <nav className="hidden md:flex gap-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white transition-colors font-medium ${isActive ? "bg-gray-700 rounded px-3 py-1" : "hover:text-blue-100"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                `text-white transition-colors font-medium ${isActive ? "bg-slate-600 rounded p-2" : "hover:text-blue-100"}`
              }
            >
              Browse Books
            </NavLink>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                `text-white transition-colors font-medium ${isActive ? "bg-slate-600 rounded p-2" : "hover:text-blue-100"}`
              }
            >
              + Add Book
            </NavLink>
          </nav>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile side menu for small screens */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 max-w-full transform bg-blue-700 shadow-xl transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
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
          <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white transition-colors font-medium ${isActive ? "bg-gray-700 rounded px-3 py-1" : "hover:text-blue-100"}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                `text-white transition-colors font-medium ${isActive ? "bg-slate-600 rounded p-2" : "hover:text-blue-100"}`
              }
              onClick={closeMenu}
            >
              Browse Books
            </NavLink>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                `text-white transition-colors font-medium ${isActive ? "bg-slate-600 rounded p-2" : "hover:text-blue-100"}`
              }
              onClick={closeMenu}
            >
              + Add Book
            </NavLink>
        </div>
      </aside>
    </>
  );
}

export default Header;
