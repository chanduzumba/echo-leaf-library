import { Provider } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import appStore from "./store";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <Provider store={appStore}>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Header />
        <main className="pt-24">
          <Outlet />
        </main>
      </div>
    </Provider>
  );
}

export default App;
