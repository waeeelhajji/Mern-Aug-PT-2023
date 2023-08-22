import Axios from "axios"
import './App.css';
import { useEffect, useState } from 'react';
import useParams from "react-router-dom"
// import GitHubApi from "./components/GitHubApi";

function App() {

  const { idHero } = useParams()



  // anything dynamic needs STATE
  const [heroes, setHeroes] = useState([])
  //!-------------------------UseEffect

  useEffect(() => {
    Axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => {
        // Axios Wraps everything in .data
        console.log(res.data)
        setHeroes(res.data)
      }).catch(err => {
        console.log(err)
      })

  }, [])



  //!-------------------------Axios
  const AxiosHeroes = () => {
    Axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then(res => {
        // Axios Wraps everything in .data
        console.log(res.data)
        setHeroes(res.data)
      }).catch(err => {
        console.log(err)
      })
  }


  //!-------------------------fetch
  const fetchHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then(response => {
        //  you need transform you response to JSON before you set it in you state
        return response.json()
      }).then(response => {
        console.log(response)
        setHeroes(response)
      })
      .catch(err => {
        console.log(err);
      })

  }




  return (
    <div className="App">
      <h1> 🦸 🦹  SupperHeroes 🦸‍♀️ 🦹‍♀️ </h1>
      <h4>fetch /Axios / useEffect</h4>
      <hr />
      {/* {JSON.stringify(heroes)} */}
      <button onClick={fetchHeroes}> fetch SupperHeroes</button>
      <button onClick={AxiosHeroes}> Axios SupperHeroes</button>
      <hr />
      <table >
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              Image
            </th>
            <th>
              Hero Name
            </th >
            <th >
              Full Name
            </th>
            <th>
              Publisher
            </th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map(hero => {
              return (
                <tr key={hero.id}>
                  <th>{hero.id}</th>
                  <td>
                    <img src={hero.images.sm}
                      width="120px"
                    />

                  </td>
                  <td>
                    {hero.name}
                  </td>
                  <td>
                    {hero.biography.fullName ? hero.biography.fullName : "No Data"}
                  </td>
                  <td>
                    {hero.biography.publisher}
                  </td>
                </tr>

              )
            })
          }
        </tbody>

      </table>
      {/* <GitHubApi /> */}
    </div>
  );
}

export default App;