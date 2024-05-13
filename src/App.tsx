import "./App.css";
import AppRouter from "./AppRouter";
import Header from "./components/atoms/Header";
import Footer from "./components/atoms/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
