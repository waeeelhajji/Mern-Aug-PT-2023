
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import DisplayAllNotes from './components/DisplayAllNotes';
import CreateNote from './components/CreateNote';
import ShowOneNote from './components/ShowOneNote';
import UpdateNote from './components/UpdateNote';

function App() {
  return (
    <fieldset className="App">
      <legend>Notes</legend>
      <h1>Notes</h1>
      <Link to="/notes">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/notes/create">Create</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Routes>
        <Route path="/notes" element={<DisplayAllNotes />} />
        <Route path="/notes/create" element={<CreateNote />} />
        <Route path="/notes/:noteId" element={<ShowOneNote />} />
        <Route path="/:noteId/edit" element={<UpdateNote />} />
      </Routes>
      <hr />
    </fieldset>
  );
}

export default App;
