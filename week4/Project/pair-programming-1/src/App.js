import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import Tours from "./components/Tours";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* Added other routes if you want*/}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Added this line for 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
