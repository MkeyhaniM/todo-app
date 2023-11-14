import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { store } from "./redux modules/store";
import { Provider } from "react-redux";
import Client from "./components/client/client";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement);
root.render(
  <>
    <Provider store={store}>
      <Client />
    </Provider>
  </>
);
