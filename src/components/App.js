import React from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import {useEffect, useState} from 'react';

function App() {
  const poemAPI = 'http://localhost:8004/poems'
  const [poems, setPoems] = useState([]);
  const [formHidden, setFormHidden] = useState(true)
  
  function toggleFormVisible(){
    setFormHidden(!formHidden)
  }
  
  useEffect(() => {
    fetch(poemAPI)
    .then(res => res.json())
    .then(setPoems)
  }, [])

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={toggleFormVisible}>Show/hide new poem form</button>
        {formHidden ? <NewPoemForm poems={poems}/> : null}
      </div>
      <PoemsContainer poems={poems}/>
    </div>
  );
}

export default App;
