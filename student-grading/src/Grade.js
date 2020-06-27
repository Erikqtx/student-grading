import React, { useState } from "react";

function Grade() {
  let [grade, setGrade] = useState(6); //Defaultwert wo wir anfangen Array mit 2 Feldern
  return (
    <div>
      <button>+</button>
      <span>1</span>
      <button>-</button>
    </div>
  );
}
export default Grade;
