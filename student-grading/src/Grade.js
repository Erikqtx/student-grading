import React, { useState } from "react";

function Grade() {
  let [grade, setGrade] = useState(6); //Defaultwert wo wir anfangen Array mit 2 Feldern
  function inc() {
    setGrade(++grade);
  }
  function dec() {
    setGrade(--grade);
  }
  function format() {
    if (grade >= 5) {
      return "grade--negative";
    } else if (grade <= 2) {
      return "grade--positive";
    }
    return "grade--normal";
  }
  return (
    <div>
      <button onClick={inc}>+</button>
      <span className={format()}>{grade}</span>
      <button onClick={dec}>-</button>
    </div>
  );
}
export default Grade;
