
import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [zoo, setZoo] = useState(["🦓", "🦒", "🦁", "🐫", "🐊"])
  const [animal, setAnimal] = useState("")

  const [allUsers, setAllUsers] = useState([
    {
      name: "Mario",
      age: 55
    },
    {
      name: "Luigi",
      age: 26
    },
    {
      name: "Mhamed",
      age: 19
    }
  ])
  const addNewOne = (onPersone) => {
    setAllUsers([...allUsers, onPersone])

  }


  const addAnimal = (e) => {
    e.preventDefault()
    console.log("clicked")
    if (zoo.length <= 6) {

      setZoo([...zoo, animal])
    }

    setAnimal("")

  }

  return (
    <fieldset className="App">
      <legend>App.jsx</legend>
      {JSON.stringify(allUsers)}
      <hr />
      {JSON.stringify(zoo)}
      <hr />
      {JSON.stringify(animal)}
      <hr />
      {
        zoo.length <= 6 ? <p style={{ color: "green" }}>We accept more animals!</p> : <p style={{ color: "red" }}>the zoo is full of animals!!</p>
      }

      <form onSubmit={addAnimal}>
        <input onChange={(e) => { setAnimal(e.target.value) }} value={animal} />
        <button>Add Animal</button>
      </form>

      <hr />
      <Form addNewOne={addNewOne} />

    </fieldset>
  );
}

export default App;
