
import './App.css'
import {Routes,Route} from "react-router-dom";
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Scroll from "./components/Home/Scroll_To_Top/Scroll";
import About from "./components/About_Us/About";
import Privacy from "./components/Privacy_Policy/Privacy";
import Contact from "./components/Contact/Contact";
import Faqs from "./components/FAQs/Faqs";
 import Footer from "./components/Footer/Footer";
//  import Test from "./components/Test/Test"
function App() {
 

  return (
    <>
      <Header />
      <Navbar />
      <Scroll />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/privacy_policy" element={<Privacy/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/faqs" element={<Faqs/>}/>
      {/* <Route path="/test" element={<Test/>}/> */}
      </Routes>

      <Footer />


     </>
  )
}

export default App
