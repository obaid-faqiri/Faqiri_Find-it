import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing components
import Header from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";  
import Properties from "./pages/Properties";
import Footer from "./layout/Footer";
import Blog from "./pages/Blog";
import Agents from "./pages/Agents";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/about" element={<About />} /> {/* About page route */}
          <Route path="/blog" element={<Blog />} /> {/* Blog page route */}
          <Route path="/properties" element={<Properties />} /> {/* Properties page route */}
          <Route path="/agents" element={<Agents />} />
        </Routes>
      </main>
      <Footer />
      
    </Router>
  );
};

export default App;