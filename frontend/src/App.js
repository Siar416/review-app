import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReviewDetails from "./components/ReviewDetails";
import ReviewForm from "./components/ReviewForm";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/reviews-list" element={<ReviewDetails />} />
          <Route path="/create-review" element={<ReviewForm />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
