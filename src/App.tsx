import { Provider } from "react-redux"

import './App.css';
import store from "./Store/store";
import RepositoriesList from "./components/RepositoriesList";
import RepositorySearch from "./components/RepositorySearch";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RepositorySearch />
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
