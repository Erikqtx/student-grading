import React from "react";
import "./App.css";
import Greet from "./Greet";
import Student from "./Student";
function App() {
  return (
    <div className="app">
      <h1 className="red">Student Grading</h1>
      <hr />
      <h1>
        <Greet />
        <Student name="Max Mustermann" matriculation="11234562" />
        <Student name="Lilly Fee" matriculation="123434543" />
      </h1>
      {/* <button onClick={greet}>Greet</button> */}
    </div>
  );
}

export default App;
