
function Book({ book }) {
  const { imageLink, title, description, author, rating } = book;
  return (
    <div className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
      <div className="overflow-hidden bg-gray-200 aspect-[4/5] sm:aspect-[3/4]">
        <img
          src={imageLink}
          alt={title}
          width="320"
          height="400"
          className="w-full h-full object-cover hover:scale-105 transition-transform"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col grow">
        <h4 className="font-bold text-lg text-gray-800 line-clamp-2 mb-1">
          {title}
        </h4>
        <p className="text-sm text-gray-600 mb-2">{author}</p>
        <p className="text-yellow-500 font-semibold text-sm mb-3">
          ⭐ {rating}
        </p>
        <p className="text-gray-700 text-sm line-clamp-3 grow mb-4">
          {description}
        </p>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-medium">
          View Details
        </button>
      </div>
    </div>
  );
}

export default Book;
