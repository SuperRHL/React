import Ninjas from "./ninja";
import React, {Component} from "react";
import AddNinja from "./addNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Rahul", age: 30, belt: "Black", id: 1 },
      { name: "Elon", age: 25, belt: "Blue", id: 2 },
      { name: "Rowl", age: 20, belt: "Red", id: 3 },
    ],
  };
  addNinja = (ninja)=> {
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas,ninja]
    this.setState({ninjas: ninjas})
  }
  deleteNinja=(id)=>{
    let ninjas = this.state
    this.setState({})
  }
  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome!</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
