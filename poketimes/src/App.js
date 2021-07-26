import React, {Component} from 'react'
import Home from './components/Home';
import Navbar from './components/navbar';
import {BrowserRouter, Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
//higher order components wrap and add extra functionality to existing components
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
