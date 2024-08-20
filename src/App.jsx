

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Footer } from "./components/Footer";
import { Career } from "./components/Career";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ordernow" element={<Order />} />
            <Route path="/career" element={<Career />} />
          </Routes>
          <Footer/>
        </main>
      </div>
    </Router>
  );
}

export default App;
