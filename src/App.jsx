import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import appStore from "./store";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
