import { Link, useLocation } from "react-router-dom"

function PageNotFound() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-10 text-center">
        <p className="text-sm uppercase text-cyan-400 tracking-[0.4em] mb-4">Page not found</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-lg text-slate-300 mb-6">
          The page <span className="text-white font-semibold">{location.pathname}</span> does not exist.
        </p>
        <p className="text-slate-400 mb-8">Please check the URL or return to the homepage.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-cyan-600 text-slate-950 rounded-2xl hover:bg-cyan-500 transition-colors font-semibold"
          >
            Back to Home
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-slate-700 text-slate-100 rounded-2xl hover:border-slate-600 hover:text-white transition-colors font-semibold"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
