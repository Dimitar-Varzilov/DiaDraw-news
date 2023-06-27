import "./App.css";
import AppContextProvider from "./context/AppProvider";
import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <AppContextProvider>
      <Layout>
        <Home />
      </Layout>
    </AppContextProvider>
  );
}

export default App;
