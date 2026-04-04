import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footers from "./components/common/Footer";
import Home from "./pages/Home";
import ServicePage from "./pages/Service";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF2]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footers />
    </div>
  );
}

export default App;
