
import './App.css';

import SecondeCom from "./components/SecondeCom.jsx"

function App() {
  console.dir(document)
  const x = 3
  const name = "Bob 🎈🎈🎈"
  const animals = ['🦁', "🦒", "🐫", "🐊", "🦓"]

  const person = {
    name: "Bob",
    facFood: "🍝",
    age: 100
  }


  return (
    <fieldset>
      <legend>App.jsx</legend>
      <h1>Hello React</h1>
      {x}
      <p>{name}</p>
      {JSON.stringify(animals)}
      {JSON.stringify(person)}
      <SecondeCom anim={animals} />


    </fieldset>
  );
}

export default App;
