
import { useEffect, useState } from 'react';
import axios from "axios"
import './App.css';

function App() {

  //!-1 useState
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [Belt, setBelt] = useState("")
  //!-2 SuBmitHandler
  const SubmitHandler = (e) => {
    e.preventDefault()
    const newSt = {
      name,
      age,
      Belt
    }
    axios.post("http://localhost:5000/api/student", newSt)
      .then(res => {
        console.log("Successfully submitted ✅✅✅")
      })
      .catch(err => {
        console.log(err)
      })
  }






  ///--------------ReadAll

  //1 - useState
  const [allStudents, setAllStudents] = useState([])

  //2 - useEffect
  useEffect(() => {
    axios.get("http://localhost:5000/api/student")
      .then((res) => {
        console.log(res.data)
        setAllStudents(res.data.AllNinjas)

      })
      .catch(err => {
        console.log(err)
      })
  }, [])





  return (
    <fieldset className="App">
      <legend>App.js</legend>
      {/* //3 - Rendering Data */}
      {/* //!-3 FORM */}
      <form onSubmit={SubmitHandler}>
        Name of the student :
        <input onChange={(e) => { setName(e.target.value) }} value={(name)} /> <br /><br /><br />
        Age of the Student :
        <input onChange={(e) => { setAge(e.target.value) }} value={(age)} /><br /><br /><br />
        Belt of the Student :
        <input onChange={(e) => { setBelt(e.target.value) }} value={(Belt)} /><br /><br /><br />
        <input type="Submit" value="ADD Student" />
      </form>
      {
        allStudents.map((oneStudent) => {
          return <div>
            <hr />
            <h3>{oneStudent.name}</h3>
            <h3>{oneStudent.age}</h3>
            <h3>{oneStudent.Belt}</h3>


          </div>
        })
      }


    </fieldset>
  );
}

export default App;
