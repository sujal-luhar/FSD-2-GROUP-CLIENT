import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Userprofile from "./components/Userprofile";
import { Signin, Signup } from "./components/Form";
import Uploadpost from "./components/Uploadpost";
import Otherprofile from "./components/Otherprofile";
import Category from "./components/Category";
import ImageDetail from "./components/ImageDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category" element={<Category />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/uploadpost" element={<Uploadpost />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/otherprofile" element={<Otherprofile />} />
        <Route path="/image" element={<ImageDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
