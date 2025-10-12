import "./App.css";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Features from "./Components/Features";
import Home from "./Components/Home";
import IoTConnectionGuide from "./Components/IoTConnect";
import Navbar from "./Components/Navbar";
import OurTeam from "./Components/OurTeam";
import Work from "./Components/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Work />
      {/* <IoTConnectionGuide /> */}
      <About />
      <OurTeam />
      <ContactUs />
    </div>
  );
}

export default App;
