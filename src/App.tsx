import Routers from "./Routes/Router";
import "./App.css";

import AppProvider from "./context/AppProvider";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routers />
      </AppProvider>
    </div>
  );
}

export default App;
