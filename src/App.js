import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <div className="container-details">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
