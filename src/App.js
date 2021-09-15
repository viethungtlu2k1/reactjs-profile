import React from 'react';
import NavMenu from './Components/NavMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Projects from './page/Projects';
import Contact from './page/Contact';
export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Router path="/about">
            <About />
          </Router>
          <Router path="/projects">
            <Projects />
          </Router>
          <Router path="/contact">
            <Contact />
          </Router>
          <Router path="/">
            <Home />
          </Router>
        </Switch>
      </Router>
    </>
  );
}
