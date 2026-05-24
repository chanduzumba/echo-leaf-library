import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-linear-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="no-underline">
          <h1 className="text-2xl font-bold hover:text-blue-100 transition-colors">
            Echo Leaf Library
          </h1>
        </Link>
        <nav className="flex gap-6 items-center">
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
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors font-medium"
          >
            + Add Book
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
