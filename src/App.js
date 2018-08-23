import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
import "./App.css";
import Root from "./components/Root";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <Link to="/">Home</Link>
        </header> */}
        <div>
          <Root />
          {/* <Route exact path="/" component={Home} /> */}
        </div>
      </div>
    );
  }
}

export default App;
