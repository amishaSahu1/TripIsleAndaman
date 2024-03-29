import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import Footer from "./components/Footer";
import Contact from "./components/Contact";


import "./style/App.scss";
import "./style/Header.scss";
import "./style/Home.scss";
import "./style/Footer.scss";
import "./style/Contact.scss";
import  "./style/mediaquery.scss";
function App() {
  return (
    <Router>
   <Header />
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/contact" element={<Contact />}/>
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
