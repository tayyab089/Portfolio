import './App.css';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too

import Home from './Views/home';
import About from './Views/About';
import Contact from './Views/Contact';
import Opslog from './Views/Opslog';
import RebelFleet from './Views/RebelFleet';
import FlavourFlip from './Views/FlavourFlip';
import NavyBomb from './Views/NavyBomb';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opslog" element={<Opslog />}/>
        <Route path="/rebelfleet" element={<RebelFleet />} />
        <Route path="/flavourflip" element={<FlavourFlip />} />
        <Route path="/navybomb" element={<NavyBomb />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
