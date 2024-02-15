import './App.css';
import { Routes,Route } from "react-router-dom";
import NAVBAR from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Services from './components/Pages/Services/Services';
import OurWork from './components/Pages/OurWork/OurWork';
import Blogs from './components/Pages/Blogs/Blogs';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import FOOTER from './components/Footer/Footer';

function App() {
  return (
    <div className="App"> 
          <NAVBAR />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />}  />
              <Route path="/services" element={<Services />}  />
              <Route path="/our-work" element={<OurWork />}  />
              <Route path="/blogs" element={<Blogs />}  />
              <Route path="/contact-us" element={<ContactUs />}  />
            </Routes>
          <FOOTER />
    </div>
  );
}

export default App;
