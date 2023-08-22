
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Heroes from './components/Heroes';
import Error from './components/Error';

function App() {
  return (
    <fieldset className="App">
      <legend>App.jsx</legend>
      <h1>Routing</h1>
      <img style={{ width: "300px" }} src="https://pbs.twimg.com/media/Ei8rGfjX0AAWtAA.jpg" />
      <hr />
      {/* No anquer tag in React */}
      {/* <a href="/">Home</a> */}
      <Link to={"/home"} >Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to={"/heroes"} >All the Heroes</Link>
      {/* // theater or our big stage */}
      {/* Step2 Create the Routes inside my application */}
      <Routes>
        {/* Step 3 Create the Route for the component with specific PATH */}
        <Route path='/home' element={<Home />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/heroes/:idHero" element={<Heroes />} />
        <Route path="/ERROR:404" element={<Error />} />
      </Routes>



    </fieldset>
  );
}

export default App;
