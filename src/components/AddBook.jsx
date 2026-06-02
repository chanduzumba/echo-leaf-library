import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooks } from '../store/slices/bookSlice';
import categories from '../constants/categories';
import { useNavigate } from 'react-router-dom';
import Toast from './Toast';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    rating: 4,
    category: 'Fiction',
    imageLink: '',
    website: '',
  });
  const [toast, setToast] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      ...formData,
      id: String(Date.now()),
    };
    dispatch(addBooks(newBook));
    setToast({
      message: 'Book added successfully!',
      type: 'success'
    });
    setTimeout(() => {
      navigate('/books');
    }, 1000);
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
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-white mb-6">Add a New Book</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-semibold text-slate-100 mb-2">
                Book Title *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 text-slate-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter book title"
              />
              
            </div>

            <div>
              <label className="block font-semibold text-slate-100 mb-2">
                Author *
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 text-slate-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter author name"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-100 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-slate-800 border border-slate-700 text-slate-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Enter book description"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-100 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 text-slate-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-slate-900 text-slate-100">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-semibold text-slate-100 mb-2">
                  Rating (0-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  min="0"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 text-slate-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-100 mb-2">
                Cover Image URL
              </label>
              <input
                type="url"
                name="imageLink"
                value={formData.imageLink}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 text-slate-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-100 mb-2">
                Website/Reference Link
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 text-slate-100 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="https://example.com"
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-cyan-600 text-slate-950 py-3 rounded-2xl hover:bg-cyan-500 transition-colors font-bold text-lg"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
