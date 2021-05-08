import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact'
import AboutMe from './Component/AboutMe';
import Blog from './Component/Blog';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/aboutMe" component={AboutMe}/>
          <Route path="/blog" component={Blog}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
