import React from "react";
import "./Student.css";
import Grade from "./Grade";
function Student({ name, matriculation }) {
  return (
    <div className="student">
      <div className="student__name">Student: {name}</div>
      <div>Matrikelnummer: {matriculation}</div>
      <Grade />
    </div>
  );
}
export default Student;
