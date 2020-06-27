import React from "react";
function Greet() {
  function greet() {
    alert("Hallo Ansbach");
  }
  return <button onClick={greet}>Greet</button>;
}
export default Greet;
