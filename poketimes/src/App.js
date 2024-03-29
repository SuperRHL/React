import React, { Component } from "react";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
//higher order components wrap and add extra functionality to existing components
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
          {/* Only want to match one */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
