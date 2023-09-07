
// import { useEffect, useState } from 'react';
// import axios from "axios"
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './View/Main';

function App() {
  return (
    <fieldset className="App">
      <legend>App.js</legend>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </fieldset>
  );
}

export default App;
