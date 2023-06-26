import "./App.css";
import AppContextProvider from "./context/AppProvider";
import Home from "./pages/Home";

function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}

export default App;
