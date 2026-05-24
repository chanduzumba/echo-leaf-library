import { Provider } from "react-redux";
import Header from "./components/Header";
import appStore from "./store";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
      </div>
    </Provider>
  );
}

export default App;
