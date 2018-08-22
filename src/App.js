import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import HomeComp from "./components/HomeComp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Link react router component,
            defines clickable link that will lead to route */}
          <Link to="/">Home</Link>
          <Link to="/home2">Home Extended Component</Link>
          <Link to="/about-us">About</Link>
        </header>
        <div>
          {/* Route react router component
            defines component that will be loaded if the route matches current route */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home2" component={HomeComp} />
          <Route exact path="/about-us" component={About} />
        </div>
      </div>
    );
  }
}

export default App;
