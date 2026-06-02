import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BookDetails() {
  const params = useParams();
  const books = useSelector((store) => store.books.allBooks);
  const book = books.find((book) => book.id === params.id);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {book ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              {/* Book Cover */}
              <div className="md:col-span-1 flex justify-center">
                <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-800">
                  <img
                    src={book.imageLink}
                    alt={book.title}
                    className="w-full h-auto max-h-96 object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLDP5s2j9u1x86fOb7kNKXanJeMn8zZ30ZQ&s";
                    }}
                  />
                </div>
              </div>

              {/* Book Details */}
              <div className="md:col-span-2">
                <h1 className="text-4xl font-bold text-white mb-3">
                  {book.title}
                </h1>
                <p className="text-xl text-slate-300 mb-5">by {book.author}</p>
                <div className="flex flex-wrap items-center gap-3 mb-6 text-slate-200">
                  <span className="text-3xl text-amber-400"><i className="fa-solid fa-star" aria-hidden="true" /></span>
                  <span className="text-2xl font-bold text-white">
                    {book.rating}
                  </span>
                  <span className="text-slate-400">/5.0</span>
                </div>

                <div className="mb-6 p-5 bg-slate-800 rounded-3xl border border-slate-700">
                  <h3 className="font-bold text-slate-100 mb-2">Category</h3>
                  <span className="inline-block bg-cyan-500 text-slate-950 px-4 py-2 rounded-full font-medium">
                    {book.category}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg text-slate-100 mb-2">
                    Description
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-base">
                    {book.description}
                  </p>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <a
                    href={book.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-cyan-600 text-slate-950 rounded-2xl hover:bg-cyan-500 transition-colors font-medium"
                  >
                    Learn More
                  </a>
                  <Link
                    to="/books"
                    className="px-6 py-3 bg-slate-700 text-slate-100 rounded-2xl hover:bg-slate-600 transition-colors font-medium"
                  >
                    Back to Browse
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Book Not Found
            </h2>
            <p className="text-slate-300 mb-6">
              The book you are looking for does not exist.
            </p>
            <Link
              to="/books"
              className="inline-block px-6 py-3 bg-cyan-600 text-slate-950 rounded-2xl hover:bg-cyan-500 transition-colors font-medium"
            >
              Back to Books
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookDetails;
