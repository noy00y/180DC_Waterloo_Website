import "./App.css";
import Contact from "./Comoponents/Contact/Contact";
import Navbar from "./Comoponents/Navbar/Navbar";
import Services from "./Comoponents/Services/Services";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CaseStudy from "./Comoponents/Services/CaseStudies/CaseStudy/CaseStudy";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route path="/contact">
            <Contact/>
          </Route>
        <Route path="/about_us">
            {/* About Us */}
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/case_study/:id">
            <CaseStudy/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path = "/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
