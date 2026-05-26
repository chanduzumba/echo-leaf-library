import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import appStore from "./store";

function App() {
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
