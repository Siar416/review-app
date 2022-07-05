import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReviewDetails from "./components/ReviewDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/reviews-list" element={<ReviewDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
