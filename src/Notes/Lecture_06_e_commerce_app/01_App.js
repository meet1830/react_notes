import React from "react";

// importing css from bootstrap website
import "bootstrap/dist/css/bootstrap.min.css";

// two ways to import react bootstrap component
// import { Button } from 'react-bootstrap';
import Button from "react-bootstrap/Button";

import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Error from "./Components/Layout/Error";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// react router removes prev component and places new component as per the link clicked. thus page is not reloaded and is faster
function App() {
  return (
    <div>
      <Header />

      <Router>
        <Link to="/">Home</Link> <br/>
        <Link to="/about">About</Link> <br/>
        <Link to="/contact">Contact</Link> <br/>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
