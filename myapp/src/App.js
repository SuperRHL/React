import Ninjas from "./ninja";

function App() {
  React.state = {
    ninjas: [
      { name: "Rahul", age: 30, belt: "Black", id: 1 },
      { name: "Elon", age: 25, belt: "Blue", id: 2 },
      { name: "Rowl", age: 20, belt: "Red", id: 3 },
    ],
  };
  return (
    <div className="App">
      <h1>My first react app!</h1>
      <p>Welcome!</p>
      <Ninjas ninjas={React.state.ninjas}/>
    </div>
  );
}

export default App;
