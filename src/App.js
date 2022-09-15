import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "../src/styles/App.css";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Baptiste-portfolio" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:id" element={<ProjectDisplay />}></Route>
          <Route path="/experiences" element={<Experiences />}></Route>
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
      {/* <button onclick="topFunction()" id="myBtn" title="Go to top">
        Top
      </button> */}
<ScrollToTop />
    </div>
  );
}

export default App;
