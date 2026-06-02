
function Book({ book }) {
  const { imageLink, title, description, author, rating } = book;
  return (
    <div className="h-full bg-slate-900 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-90  transition-all overflow-hidden flex flex-col border border-slate-800">
      <div className="overflow-hidden bg-slate-800 aspect-4/5 sm:aspect-3/4">
        <img
          src={imageLink}
          alt={title}
          width="320"
          height="400"
          className="w-full h-full object-cover hover:scale-105 transition-transform"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLDP5s2j9u1x86fOb7kNKXanJeMn8zZ30ZQ&s'
          }}
        />
      </div>
      <div className="p-4 flex flex-col grow">
        <h4 className="font-bold text-lg text-slate-100 line-clamp-2 mb-1">
          {title}
        </h4>
        <p className="text-sm text-slate-400 mb-2">{author}</p>
        <p className="text-amber-400 font-semibold text-sm mb-3 flex items-center gap-2">
          <i className="fa-solid fa-star" aria-hidden="true" />
          <span>{rating}</span>
        </p>
        <p className="text-slate-300 text-sm line-clamp-3 grow mb-4">
          {description}
        </p>
        <button className="w-full bg-cyan-600 text-slate-950 py-2 rounded-2xl hover:bg-cyan-500 transition-colors font-medium">
          View Details
        </button>
      </div>
    </div>
  );
}

export default Book;
