
import { useState, useEffect } from 'react';

import axios from "axios"
import './App.css';

function App() {


  const [heroes, setHeroes] = useState([])


  //!-------------------------fetch
  const fetchHeroes = () => {
    console.log("clicked")
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => {
        return response.json()
      })
      .then(response => {
        setHeroes(response)
      })
      .catch(err => {
        console.log(err);
      })
  }


  //!-------------------------Axios
  const axiosHeroes = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => {
        console.log("Axios ===>", response)
        setHeroes(response.data)
      })
      .catch(err => {
        console.log(err);
      })
  }
  //!-------------------------useEffect

  useEffect(() => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => {
        console.log("Axios ===>", response)
        setHeroes(response.data)
      })
      .catch(err => {
        console.log(err);
      })

  }, [])






  return (
    <fieldset className="App">
      <legend>App.jsx</legend>
      <h1> 🦸 🦹  SupperHeroes 🦸‍♀️ 🦹‍♀️ </h1>
      <h4>fetch /Axios / useEffect</h4>
      <hr />


      <button onClick={fetchHeroes}>Fetch SupperHeroes</button> <br />
      <button onClick={axiosHeroes}>Axios  SupperHeroes</button> <br />

      {/* {JSON.stringify(heroes)} */}
      <table>
        <thead>
          <tr >
            <th>Image</th>
            <th>Hero Name</th>
            <th>Full Name</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map((hero, idx) => {
              return (

                <tr key={idx}>
                  <th>
                    <img src={hero.images.sm} style={{ width: "100px" }} />
                  </th>
                  <th>
                    {hero.name}
                  </th>
                  <th>
                    {hero.biography.fullName ? hero.biography.fullName : "Ma3douch 2esm"}
                  </th>
                  <th>
                    {hero.biography.publisher ? hero.biography.publisher : "NO Data"}
                  </th>
                </tr>
              )
            })
          }

        </tbody>
      </table>

    </fieldset>
  );
}

export default App;
